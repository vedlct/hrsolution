import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-show-leave',
  templateUrl: './show-leave.component.html',
  styleUrls: ['./show-leave.component.css']
})
export class ShowLeaveComponent implements AfterViewInit,OnDestroy,OnInit {
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    employee:any;
    dtOptions:DataTables.Settings={};
    dtTrigger:Subject<any>=new Subject();
    id:any;
    allEmp=[];
    shiftId:number;
    shift:any;
    dtInstance:DataTables.Api;
    startDate:string;
    // DROPDOWN
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }




  ngOnInit() {
      this.getData();
  }

    getData(){
        const token=this.token.get();
        this.dtOptions = {
            ajax: {
                url: Constants.API_URL+'leave/getLeaveRequests'+'?token='+token,
                type: 'POST',
                data:function (d){

                },
            },
            columns: [

                { data: 'firstName' ,name:'employeeinfo.firstName'},
                { data: 'lastName' ,name:'employeeinfo.lastName'},
                { data: 'startDate' ,name:'hrmleaves.startDate'},
                { data: 'endDate' ,name:'hrmleaves.endDate'},
                { data: 'noOfDays' ,name:'hrmleaves.noOfDays'},
                { data: 'applicationStatus' ,name:'hrmleaves.applicationStatus'},


            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }



    ngAfterViewInit(): void {
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', (event) => {

            if (event.target.hasAttribute("data-emp-id")) {

                let id=event.target.getAttribute("data-emp-id");
                console.log(id);
                let index = this.allEmp.indexOf(id.toString());
                if (index == -1){
                    this.allEmp.push(id);
                }else {
                    this.allEmp.splice(index, 1);
                }
                // console.log(this.allEmp);
            }




        });
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

}
