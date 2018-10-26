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
  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.employeeSalaryForm.id=this.empid;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'SalryInfo/get'+'?token='+token,{id:this.employeeSalaryForm.id}).subscribe(data => {

          this.salaryForm=data;
          this.employeeSalaryForm.consolidatedSalary=this.salaryForm.consolidatedSalary;
          this.employeeSalaryForm.payroll=this.salaryForm.payroll;


        },
        error => {
          console.log(error);
        }
    );
  }


  submit(){
    const token=this.token.get();
    this.http.post(Constants.API_URL+'SalryInfo/post'+'?token='+token,this.employeeSalaryForm).subscribe(data => {

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
