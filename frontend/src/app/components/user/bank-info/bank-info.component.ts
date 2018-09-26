import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.css']
})
export class BankInfoComponent implements OnInit {

  @Input('empid') empid: any;
  employeeBankForm:any={
    id:'',
    pfAccountNo:'',
    bankAccountNo:'',
    tinId:''
  };
  result:any;
  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.employeeBankForm.id=this.empid;

  }

  submit(){
    const token=this.token.get();
    this.http.post(Constants.API_URL+'bankinfo/post'+'?token='+token,this.employeeBankForm).subscribe(data => {
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
