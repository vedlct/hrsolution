import {Component, OnInit, Renderer, ViewChild} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../../constants";
declare var $ :any;

@Component({
  selector: 'app-showovertime',
  templateUrl: './showovertime.component.html',
  styleUrls: ['./showovertime.component.css']
})
export class ShowovertimeComponent implements OnInit {
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
    rejectModel:any={};
    leaveCategories:any;

    constructor(private modalService: NgbModal,private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }


    ngOnInit() {
        this.getData();
        this.getCategory();

    }

    dateToYMD(date) {
        let strArray=['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let d = date.getDate();
        let m = strArray[date.getMonth()];
        let y = date.getFullYear();
        // return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
        return '' + y + '-' + m + '-' + (d <= 9 ? '0' + d : d);
    }

    dateToYMD2(date) {
        let strArray=['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let d = date.getDate();
        let m = strArray[date.getMonth()];
        let y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
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

            "drawCallback": function () {
                let api = this.api();

                // $( api.table().footer() ).html(
                //
                //     // $('#footTotal').html(api.column( 4, {page:'current'} ).data().sum())
                //     console.log(api.column( 4, {page:'current'} ).data().sum())
                // );
                // console.log(api.column( 4, {page:'current'} ).data().sum());

                // $( api.table().footer() ).html(
                //
                //     $('#footTotal').html(api.column( 4, {page:'current'} ).data().sum())
                // );

            },
            ajax: {
                url: Constants.API_URL+'overtime/get'+'?token='+token,
                type: 'POST',
                data:function (d:any){
                    d.startDate=$('#startDate').val();
                    d.endDate=$('#endDate').val();

                },
            },
            columns: [

                { data: 'firstName' ,name:'employeeinfo.firstName'},
                { data: 'lastName' ,name:'employeeinfo.lastName'},
                { data: 'overtime' ,name:'overtime'},
                { data: 'totalhour' ,name:'totalhour'},

                {

                    "data": function (data: any, type: any, full: any) {
                        return '<div class="dropdown">\n' +
                            '  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n' +
                            '  </button>\n' +
                            '  <div class="dropdown-menu">\n' +
                            '    <button class="dropdown-item" data-show-id="'+data.id+'" >Show</button>\n' +
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




    show(id){

        this.router.navigate(["leave/summery/" + id]);
        return false;

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

            if (event.target.hasAttribute("data-show-id")) {

                let id=event.target.getAttribute("data-show-id");
                this.show(id);
            }


        });
    }

    reject(id){
        // alert(id);
        const token=this.token.get();
        this.http.post(Constants.API_URL+'leave/get/individual'+'?token='+token,{id:id}).subscribe(data => {
                console.log(data);
                // this.employee=data;
                this.rejectModel=data;
                $('#rejectModal').modal();
            },
            error => {
                console.log(error);
            }
        );
    }


    updateReject(){
        // console.log(this.rejectModel);
        let form={
            id:this.rejectModel.id,
            startDate:new Date(this.rejectModel.startDate).toLocaleDateString(),
            endDate:new Date(this.rejectModel.endDate).toLocaleDateString(),
            noOfDays:this.rejectModel.noOfDays,
            remark:this.rejectModel.remark,
            fkLeaveCategory:this.rejectModel.fkLeaveCategory,
            status:'Rejected',
            rejectCause:this.rejectModel.rejectCause,

        };

        const token=this.token.get();

        this.http.post(Constants.API_URL+'leave/individual/update'+'?token='+token,form).subscribe(data => {
                // console.log(data);
                $('#rejectModal').modal('hide');
                this.rerender();


                $.alert({
                    title: 'Success!',
                    type: 'Green',
                    content: 'Leave Rejected',
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
            id:this.employee.id,
            startDate:new Date(this.employee.startDate).toLocaleDateString(),
            endDate:new Date(this.employee.endDate).toLocaleDateString(),
            noOfDays:this.employee.noOfDays,
            remark:this.employee.remark,
            fkLeaveCategory:this.employee.fkLeaveCategory,

        };


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
