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
  selector: 'app-pay-salary-sheet',
  templateUrl: './pay-salary-sheet.component.html',
  styleUrls: ['./pay-salary-sheet.component.css']
})
export class PaySalarySheetComponent implements OnInit {

  employee: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: any;
  payAdvanceModel: any = {};
  subsheetModel: any = {};
  salarySheetTable:any;

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

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }

  initModel(){
    // this.payAdvanceModel.status = "";
    // this.payAdvanceModel.empName = "";

  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();

  }


  getSalarySheet() {

    this.payAdvanceModel.year=$('#year').val();

    if (!this.payAdvanceModel.fkEmployeeId) {
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

    if (this.payAdvanceModel.year=='') {
      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please Select Year",
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
    this.http.post(Constants.API_URL+'payroll/paysalarysheetmain/get'+'?token='+token,this.payAdvanceModel).subscribe(data => {
         console.log(data);
          this.salarySheetTable=data;
        },

        error => {
          console.log(error);
        }
    );



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
          this.getSalarySheet();
          this.subsheetModel={};
        },

        error => {
          console.log(error);
        }
    );
  }


}
