import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {Constants} from "../../../constants";
declare var $:any;
@Component({
  selector: 'app-salary-info',
  templateUrl: './salary-info.component.html',
  styleUrls: ['./salary-info.component.css']
})
export class SalaryInfoComponent implements OnInit {
  @Input('empid') empid: any;
  salaryForm:any;
  employeeSalaryForm:any={
    id:'',
    consolidatedSalary:'',
    payroll:''
  };
  result:any;
  payrolls:any;
  empAllPayrolls:any;
  model:any={};
  payAdvanceModel:any={};
  temp:any={};
  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
      this.model.payroll="";
      this.model.fkEmployeeId=this.empid;
      this.model.amount="";
      this.payAdvanceModel.fkEmployeeId=this.empid;

    this.employeeSalaryForm.id=this.empid;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'payroll/payhead/salarySetupGet'+'?token='+token, this.model).subscribe(data => {
       if(data){
           this.temp=data;
           // this.model.payroll=this.temp.fkPaymentHeadId;
           // this.model.amount=this.temp.amount;
           // this.model.description=this.temp.description;
           // this.model.grossPercent=this.temp.grossPercent;
       }
       else {
            // alert("empty");
       }

        },
        error => {
          console.log(error);
        }
    );
    this.getData();
    this.getEmployeeData();
  }

  getData(){
      this.http.get(Constants.API_URL+'payroll/payhead/get').subscribe(data => {
          this.payrolls=data;
          },
          error => {
              console.log(error);

          }
      );
  }

  getEmployeeData(){
      const token=this.token.get();
      this.http.get(Constants.API_URL+'payroll/payhead/employee/get/'+this.empid+'?token='+token).subscribe(data => {

            // console.log(data);
            this.empAllPayrolls=data;

          },
          error => {

              console.log(error);

          }
      );

  }
  update(){
      const token=this.token.get();
      console.log(this.model);
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
              this.getEmployeeData();

          },
          error => {
              console.log(error);
          }
      );
  }

  payAdvanceSubmit(){
      this.payAdvanceModel.fkPayHeadId=this.model.payroll;
      //

      // console.log(this.payAdvanceModel);

      const token=this.token.get();
      this.http.post(Constants.API_URL+'payroll/payadvance/ledger'+'?token='+token,this.payAdvanceModel).subscribe(data => {

          },
          error => {
              console.log(error);
          }
      );
  }

  editSheet(data){
      // console.log(data);
      this.model.amount=data.amount;
      this.model.payroll=data.fkPaymentHeadId;
      this.model.description=data.description;
      this.model.grossPercent=data.grossPercent;
      this.model.id=data.salaryId;
      this.payAdvanceModel.fkEmployeeId=this.empid;

  }

  deleteSheet(data){
      console.log(data);
    }

  resetSheet(){
      this.model={};
      this.payAdvanceModel.fkEmployeeId=this.empid;
      this.model.payroll="";
      this.model.amount="";

  }
  checkUpdateFlag(){
      if(this.model.id){
          return false;
      }

      if(this.model.id==""){
          return false;
      }
      return true;
  }

  submit(){
    const token=this.token.get();
    this.http.post(Constants.API_URL+'SalryInfo/post'+'?token='+token,this.employeeSalaryForm).subscribe(data => {
        console.log(data);
        this.result=data;
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: this.result.message,
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

}
