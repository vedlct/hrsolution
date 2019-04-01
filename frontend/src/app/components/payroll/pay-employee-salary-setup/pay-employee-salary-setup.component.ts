import {Component, OnInit, Renderer} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Subject} from "rxjs";
import {Constants} from "../../../constants";
declare var $:any;

@Component({
  selector: 'app-pay-employee-salary-setup',
  templateUrl: './pay-employee-salary-setup.component.html',
  styleUrls: ['./pay-employee-salary-setup.component.css']
})
export class PayEmployeeSalarySetupComponent implements OnInit {
  employee: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: any;
  payAdvanceModel: any = {};
  subsheetModel: any = {};
  salarySheetTable:any;
  showSalary=false;
  empAllPayrolls:any;
  payrolls:any;
  model:any={};

  constructor(private renderer: Renderer, public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.initModel();

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
          this.showSalary=false;
          this.model.fkEmployeeId= this.payAdvanceModel.fkEmployeeId;
          this.getEmployeeData(this.payAdvanceModel.fkEmployeeId);
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

  getEmployeeData(id){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'payroll/payhead/employee/get/'+id+'?token='+token).subscribe(data => {

          console.log(data);
          this.empAllPayrolls=data;

        },
        error => {

          console.log(error);

        }
    );

  }

  editSheet(data){
    console.log(data);
    this.model.amount=data.amount;
    this.model.payroll=data.fkPaymentHeadId;
    this.model.description=data.description;
    this.model.grossPercent=data.grossPercent;
    this.model.id=data.salaryId;


  }


  initModel(){
    this.model.payroll="";
    this.model.amount="";
    this.http.get(Constants.API_URL+'payroll/payhead/get').subscribe(data => {
          this.payrolls=data;
        },
        error => {
          console.log(error);

        }
    );

  }

  checkUpdateFlag(){
    if(this.model.id){
      return false;
    }

    else if(this.model.id==""){
      return false;
    }
    return true;
  }

  update(){
    const token=this.token.get();
    // console.log(this.model);
    if(this.model.payroll==""){

      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please select payhead",
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

    if(this.model.amount==""){

      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please insert amount",
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

    this.http.post(Constants.API_URL+'payroll/payhead/salarySetupSet'+'?token='+token,this.model).subscribe(data => {
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: "Success",
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });
          this.getEmployeeData(this.payAdvanceModel.fkEmployeeId);

        },
        error => {
          console.log(error);
        }
    );
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();

  }


  resetSheet(){
    this.model={};
    // this.payAdvanceModel.fkEmployeeId=this.empid;
    this.model.payroll="";
    this.model.amount="";

  }



  editSubSheet(data){
    // console.log(data);
    this.subsheetModel.payhead=data.allowDeducTitle;
    this.subsheetModel.amount=data.AMOUNT;
    this.subsheetModel.description=data.DESCRIPTION;
    this.subsheetModel.id=data.paysalarysheetsub_id;
  }

  updateSubSheet(){


    if (!this.payAdvanceModel.id) {
      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please Select Salary Sheet",
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
    this.http.post(Constants.API_URL+'payroll/paysalarysheetsub/update'+'?token='+token,this.subsheetModel).subscribe(data => {
          // console.log(data);
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: "Updated",
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });

          this.subsheetModel={};
        },

        error => {
          console.log(error);
        }
    );
  }


}
