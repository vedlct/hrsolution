import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
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
    endDate:string;
    noOfDays:string;
    remark:string;
    fkLeaveCategory:string;
    leaveCategories:any;
    constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }


    ngOnInit() {
        this.getData();
    }



    getData(){
        const token=this.token.get();

        this.dtOptions = {
            ajax: {
                url: Constants.API_URL+'report/attendance'+'?token='+token,
                type: 'POST',
                data:function (d:any){
                    d.startDate=$('#startDate').val();
                    d.endDate=$('#endDate').val();

                },
            },
            columns: [

                { data: 'empname' ,name:'empname'},
                // { data: 'middleName' ,name:'middleName'},
                // { data: 'lastName' ,name:'lastName'},
                { data: 'departmentName' ,name:'departmentName'},
                { data: 'totAttendance' , name: 'totAttendance' },
                { data: 'totalLate', name: 'totalLate'},
                { data: 'averageWorkingHour', name: 'averageWorkingHour'},
                { data: 'totalLeave', name: 'totalLeave'},
                { data: 'weekends', name: 'weekends'},
                { data: 'totalWeekend', name: 'totalWeekend'},
                {

                    "data": function (data: any, type: any, full: any) {
                        return '<button class="btn btn-sm btn-info" data-emp-id="'+data.employeeId+'">View</button>';
                    },
                    "orderable": false, "searchable":false, "name":"selected_rows"
                },

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
                this.router.navigate(["report/attendance/" +id]);
            }




        });
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    search(){
      this.rerender();
    }
    rerender(){
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

            dtInstance.destroy();

            this.dtTrigger.next();
        });
    }
}
