import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {Constants} from "../../../constants";
declare var $ :any;
@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.css']
})
export class BankInfoComponent implements OnInit {

  @Input('empid') empid: any;
  bankFrom:any;
  employeeBankForm:any={
    id:'',
    pfAccountNo:'',
    bankAccountNo:'',
    tinId:''
  };
  result:any;
  error=[];
  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.employeeBankForm.id=this.empid;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'bankinfo/get'+'?token='+token,{id:this.employeeBankForm.id}).subscribe(data => {
          // console.log(data);
      this.bankFrom=data;
      this.employeeBankForm.pfAccountNo=this.bankFrom.pfAccountNo;
      this.employeeBankForm.bankAccountNo=this.bankFrom.bankAccountNo;
      this.employeeBankForm.tinId=this.bankFrom.tinId;



        },
        error => {
          console.log(error);
        }
    );


  }

  submit(){
    const token=this.token.get();
    this.http.post(Constants.API_URL+'bankinfo/post'+'?token='+token,this.employeeBankForm).subscribe(data => {
          this.result=data;
          $.alert({
            title: 'Success!',
            content: this.result.message,
          });

        },
        error => {
          const data=error.error.errors;

          for (var p in data) {

            for (var k in data[p]) {
              this.error.push(data[p][k]);
            }
          }

        }
    );



  }

}
