import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
declare var $ :any;

@Component({
  selector: 'app-show-leave',
  templateUrl: './show-leave.component.html',
  styleUrls: ['./show-leave.component.css']
})



export class ShowLeaveComponent implements AfterViewInit,OnDestroy,OnInit {
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    employee:any={};
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
    modalRef:any;
    leaveCategories:any;


    constructor(private modalService: NgbModal,private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }




  ngOnInit() {
      this.getData();
      this.getCategory();
  }


    getCategory(){
        this.employee.fkLeaveCategory="";

        const token=this.token.get();
        this.http.get(Constants.API_URL+'leave/getLeaveCategory'+'?token='+token).subscribe(data => {
                this.leaveCategories=data;
            },
            error => {
                console.log(error);
            }
        );
    }

    getData(){
        const token=this.token.get();
        this.dtOptions = {
            stateSave:true,
            "createdRow": function( row, data, dataIndex){
                if( data['applicationStatus'] ==  'Pending'){
                    $('td', row).css('background-color', '#FC7153');
                    $('td', row).css('color', 'white');
                }
                if( data['applicationStatus'] ==  'Rejected'){
                    // $('td', row).css('background-color', '#FC7153');
                    $('td', row).css('color', 'red');
                }
            },
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
                {

                    "data": function (data: any, type: any, full: any) {
                        return '<div class="dropdown">\n' +
                            '  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n' +
                            '  </button>\n' +
                            '  <div class="dropdown-menu">\n' +
                            '    <button class="dropdown-item" data-approve-id="'+data.id+'">Approve</button>\n' +
                            '    <button class="dropdown-item" data-reject-id="'+data.id+'">Reject</button>\n' +
                            '    <button class="dropdown-item" data-edit-id="'+data.id+'" >Edit</button>\n' +
                            '  </div>\n' +
                            '</div>';
                    },
                    "orderable": false, "searchable":false, "name":"selected_rows"
                }


            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }


    temp(data){
        console.log(data);
    }


    edit(id){
        // console.log(id);
        // return false;
        const token=this.token.get();
        this.http.post(Constants.API_URL+'leave/get/individual'+'?token='+token,{id:id}).subscribe(data => {
                console.log(data);
                this.employee=data;
                $('#myModal').modal();
            },
            error => {
                console.log(error);
            }
        );


    }

    changeStatus(id,status){
        const token=this.token.get();
        this.http.post(Constants.API_URL+'leave/change/status'+'?token='+token,{id:id,applicationStatus:status}).subscribe(data => {
                this.rerender();
            },
            error => {
                console.log(error);
            }
        );
    }


    ngAfterViewInit(): void {
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', (event) => {
            // this.approved();
            if (event.target.hasAttribute("data-approve-id")) {

                let id=event.target.getAttribute("data-approve-id");
                this.changeStatus(id,'Approved');

            }

            else if (event.target.hasAttribute("data-reject-id")) {

                let id=event.target.getAttribute("data-reject-id");
                this.changeStatus(id,'Rejected');
            }

            else if (event.target.hasAttribute("data-edit-id")) {

                let id=event.target.getAttribute("data-edit-id");
                this.edit(id);
            }


        });
    }
    openLg(content) {
        // this.shiftObj={};
        this.modalRef =  this.modalService.open(content, { size: 'lg'});

    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    updateLeave(){


        let form={
            // allEmp:this.allEmp,
            id:this.employee.id,
            startDate:new Date(this.employee.startDate).toLocaleDateString(),
            endDate:new Date(this.employee.endDate).toLocaleDateString(),
            noOfDays:this.employee.noOfDays,
            remark:this.employee.remark,
            fkLeaveCategory:this.employee.fkLeaveCategory,

        };
        // leave/assignLeavePersonal

        const token=this.token.get();

        this.http.post(Constants.API_URL+'leave/individual/update'+'?token='+token,form).subscribe(data => {
            console.log(data);

                $('#myModal').modal('hide');
                this.rerender();


                $.alert({
                    title: 'Success!',
                    type: 'Green',
                    content: 'Leave Updated',
                    buttons: {
                        tryAgain: {
                            text: 'Ok',
                            btnClass: 'btn-red',
                            action: function () {
                            }
                        }
                    }
                });
            },
            error => {
                console.log(error);
            }
        );

    }

    rerender(){
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

            dtInstance.destroy();

            this.dtTrigger.next();
        });
    }
}
