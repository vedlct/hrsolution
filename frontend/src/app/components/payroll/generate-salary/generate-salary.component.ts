import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Constants} from "../../../constants";
import {Subject} from "rxjs";
declare var $ :any;
@Component({
  selector: 'app-generate-salary',
  templateUrl: './generate-salary.component.html',
  styleUrls: ['./generate-salary.component.css']
})
export class GenerateSalaryComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  salaryModel: any = {};
  salaryMain:any;
  checkTable=0;
  constructor(public http: HttpClient, private token:TokenService,private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getSalarySheet();
  }

  getSalarySheet(){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'salary/get-main-sheet'+'?token='+token).subscribe(data => {
            console.log(data);
          this.salaryMain=data;
          if(this.checkTable==0){
            this.dtTeigger.next();
            this.checkTable++;
          }

        },
        error => {
          $.alert({
            title: 'Oops!',
            content: 'Something went wrong',
          });
          console.log(error);
        }
    );
  }
  generateSalary(){
    if(this.salaryModel.date){

      this.salaryModel.date=new Date(this.salaryModel.date).toLocaleDateString();
      this.spinner.show();
      const token=this.token.get();
      this.http.post(Constants.API_URL+'salary/generate'+'?token='+token,this.salaryModel).subscribe(data => {
            this.salaryModel.date="";
            this.spinner.hide();
            $.alert({
              title: 'Success!',
              content: 'Salary Generated Successfully',
            });
            console.log(data);

            this.getSalarySheet();
          },
          error => {
            this.salaryModel.date="";
            this.spinner.hide();
            $.alert({
              title: 'Oops!',
              content: 'Something went wrong',
            });
            console.log(error);
          }
      );
    }

    else {
      $.alert({
        title: 'Alert!',
        content: 'Please Select Month',
      });
    }

  }


  downloadSalarySheet(value){
      this.spinner.show();
      const token=this.token.get();
      this.http.post(Constants.API_URL+'salary/main-sheet/download'+'?token='+token,value).subscribe(data => {
              this.spinner.hide();
              console.log(data);
              // let fileName=Constants.Image_URL+'exportedExcel/'+data;
              //
              // let link = document.createElement("a");
              // link.download = data+".xls";
              // let uri = fileName+".xls";
              // link.href = uri;
              // document.body.appendChild(link);
              // link.click();
              // document.body.removeChild(link);


          },
          error => {
              this.spinner.hide();
              $.alert({
                  title: 'Oops!',
                  content: 'Something went wrong',
              });
              console.log(error);
          }
      );

  }
}
