import {Component, OnInit, Renderer} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../../constants";
declare var $:any;
@Component({
  selector: 'app-pay-advance',
  templateUrl: './pay-advance.component.html',
  styleUrls: ['./pay-advance.component.css']
})
export class PayAdvanceComponent implements OnInit {

    employee: any;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    id: any;
    payAdvanceModel: any = {};

    constructor(private renderer: Renderer, public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) {
    }


    ngOnInit() {
        this.payAdvanceModel.status = "";
        this.payAdvanceModel.empName = "";
        const token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: Constants.API_URL + 'employee/get' + '?token=' + token,
                type: 'POST'
            },
            columns: [
                {data: 'firstName', name: 'employeeinfo.firstName'},
                {data: 'middleName', name: 'employeeinfo.middleName'},
                {data: 'lastName', name: 'employeeinfo.lastName'},
                {data: 'EmployeeId', name: 'employeeinfo.EmployeeId'},
                {data: 'title', name: 'hrmdesignations.title'},
                {data: 'departmentName', name: 'hrmdepartments.departmentName'},
                {

                    "data": function (data: any, type: any, full: any) {
                        return ' <button class="btn btn-info select-user" data-panel-id="' + data.empid + '" data-emp-name="' + data.firstName + ' ' + data.middleName + ' ' + data.lastName + '">Select</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                }
            ],
            drawCallback: () => {
                $('.select-user').on('click', (event) => {

                    this.payAdvanceModel.fkEmployeeId = event.target.getAttribute("data-panel-id");
                    this.payAdvanceModel.empName = event.target.getAttribute("data-emp-name").replace(null, "");
                    return false;

                });
            },
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            // pageLength: 5,
            "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        };
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
        // this.renderer.listenGlobal('document', 'click', (event) => {
        //
        //     if (event.target.hasAttribute("data-emp-id")) {
        //         // this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
        //         // alert(event.target.getAttribute("data-emp-id"));
        //         this.payAdvanceModel.empId = event.target.getAttribute("data-emp-id");
        //         this.payAdvanceModel.empName = event.target.getAttribute("data-emp-name").replace(null, "");
        //     }
        //
        //
        // });
    }


    payAdvanceSubmit() {
        // this.payAdvanceModel.fkPayHeadId=this.model.payroll;
        //

        // console.log(this.payAdvanceModel);
        if(!this.payAdvanceModel.empId){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Employee",
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

        if(!this.payAdvanceModel.startDate){

            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Start Date",
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

        if(!this.payAdvanceModel.amount){

            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Amount",
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

        if(this.payAdvanceModel.status==""){

                $.alert({
                    title: 'Alert!',
                    type: 'Red',
                    content: "Please Select Status",
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


        const token = this.token.get();

        this.http.post(Constants.API_URL+'payroll/payadvance/ledger'+'?token='+token,this.payAdvanceModel).subscribe(data => {

                console.log(data);
            },

                error => {
                    console.log(error);
                }
            );


    }



}
