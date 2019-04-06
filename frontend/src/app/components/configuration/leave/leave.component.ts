import {Component, OnInit, AfterViewInit, Renderer, OnDestroy, ViewChild} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTableDirective} from "angular-datatables";
declare var $ :any;

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    employee:any;
    dtOptions:DataTables.Settings={};
    dtTrigger:Subject<any>=new Subject();
    id:any;
    allEmp=[];
    shiftId:number;
    shift:any;
    team:any;
    dtInstance:DataTables.Api;
    startDate:string;
    endDate:string;
    noOfDays:string;
    remark:string;
    fkLeaveCategory:string;
    leaveCategories:any;
    // DROPDOWN
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id:'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id:'friday', item_text: 'Friday' }
        ];

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.getData();
        this.getCategory();
        this.getTeam();


        this.fkLeaveCategory='';
        this.startDate='';
        this.endDate='';
        this.noOfDays='';
        this.remark='';
        this.allEmp=[];


    }

    getTeam(){
        const token=this.token.get();

        this.http.get(Constants.API_URL+'team/leave/get'+'?token='+token).subscribe(data => {
                // console.log(data);
                this.team=data;


            },
            error => {
                console.log(error);
            }
        );
    }

    getCategory(){
        const token=this.token.get();

        this.http.get(Constants.API_URL+'leave/getLeaveCategory'+'?token='+token).subscribe(data => {
                this.leaveCategories=data;
            },
            error => {
                console.log(error);
            }
        );
    }

    onItemSelect(value){
        // console.log(value);
    }
    onSelectAll(value){
        // console.log(value);
    }



    getData(){
        const token=this.token.get();
        this.dtOptions = {
            ajax: {
                url: Constants.API_URL+'employee/leaveteam/get'+'?token='+token,
                type: 'POST',
                data:function (d:any){
                    d.teamId=$("#team").val();

                },
            },
            columns: [
                {
                    "data": function (data: any, type: any, full: any) {
                        return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="'+ data.empid +'">';
                    },
                    "orderable": false, "searchable":false, "name":"selected_rows"
                },
                { data: 'firstName' ,name:'employeeinfo.firstName'},
                { data: 'EmployeeId' , name: 'employeeinfo.EmployeeId' },
                { data: 'shiftName', name: 'shift.shiftName'},
                { data: 'weekend', name: 'shiftlog.weekend'},
                { data: 'startDate', name: 'shiftlog.startDate'},
                { data: 'teamName', name: 'leave_team.teamName'},

            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();

    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }

    selectTeam(){
        this.rerender();
    }

    selectAll(){
        this.allEmp=[];
        if($('#selectall2').is(":checked")) {

            let  checkboxes = document.getElementsByName('selected_rows[]');

            $('input:checkbox').prop('checked',true);

            let that=this;
            $(".chk:checked").each(function () {
                that.allEmp.push($(this).val());
            });
            // console.log(this.allEmp);
        }
        else {

            $(':checkbox:checked').prop('checked',false);
        }

    }

    selectCategory(value){
      this.fkLeaveCategory=value;

    }



    assignLeave(){
        if(!this.checkForm()){
            return false;
        }

        let form={
            allEmp:this.allEmp,
            startDate:new Date(this.startDate).toLocaleDateString(),
            endDate:new Date(this.endDate).toLocaleDateString(),
            noOfDays:this.noOfDays,
            remark:this.remark,
            fkLeaveCategory:this.fkLeaveCategory,

        };

        this.allEmp=[];
        let that=this;
        $(".chk:checked").each(function () {
            that.allEmp.push($(this).val());
        });

        const token=this.token.get();

        this.http.post(Constants.API_URL+'leave/assignLeave'+'?token='+token,form).subscribe(data => {
                // console.log(data);
                this.ngOnInit();
                this.rerender();
                $.alert({
                    title: 'Success!',
                    type: 'Green',
                    content: 'Leave Assigned',
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

    checkForm(){
        let message="";
        let condition=true;
        if(this.startDate==''){
            condition=false;
            message="Please Insert Start Date";

        }

        if(this.endDate==''){
            condition=false;
            message="Please Insert End Date";
        }
        if(this.noOfDays==''){
            condition=false;
            message="Please Insert No Of Days";
        }
        if(this.fkLeaveCategory==''){
            condition=false;
            message="Please Select Leave Category";
        }

        if (this.allEmp.length==0){
            condition=false;
            message="Please Select Employee";
        }



        if (condition==false){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: message,
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;

        }

        return true;

    }


    rerender(){
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

            dtInstance.destroy();

            this.dtTrigger.next();
        });
    }
}
