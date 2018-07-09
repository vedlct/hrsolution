import {Component, OnInit, Input} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService } from 'ngx-spinner';
import {Company} from "../../../model/company.model";
import {TokenService} from "../../../services/token.service";
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  // @Input('companyForm') companyForm: any;
  // companyInfo:any={
  //   id:'',
  //   companyAddress:'',
  //   companyName:'',
  //   email:'',
  //   fax:'',
  //   fkActivationStatus:'',
  //   logo:'',
  //   logoUrl:'',
  //   note:'',
  //   phone:'',
  //   webSite:''};
  selectedFile:File[];


   companyInfo = {} as Company;


  constructor(public http: HttpClient,private spinner: NgxSpinnerService,private token:TokenService) { }

  ngOnInit() {


    this.spinner.show();

    //Getting Company Info
      const token=this.token.get();
    this.http.get(Constants.API_URL+'company/get'+'?token='+token).subscribe(data => {
          // console.log(data);
          if(data !=null){
            this.companyInfo=<Company>data;
          }
          this.spinner.hide();
        },
        error => {
          console.log(error);
          this.spinner.hide();

        }
    );








  }
  onFileSelected(event) {

    this.selectedFile =event.target.files;
    // console.log(this.selectedFile);

  }

  onSubmit(){


    this.spinner.show();

    let value=this.companyInfo;

    let fd = new FormData();
      for ( let key in value ) {
          fd.append(key, value[key]);
      }


    if (this.selectedFile) {
      var i: number;
      for (i = 0 ; i < this.selectedFile.length; i++) {
        fd.append('image[]', this.selectedFile[i], this.selectedFile[i].name);
      }
    }

      const token=this.token.get();
    this.http.post(Constants.API_URL + 'company/post/updateInfo'+'?token='+token, fd).subscribe(data => {
          console.log(data);
          this.spinner.hide();

        },
        error => {
          console.log(error.message);
          this.spinner.hide();


        }
    );


  }

}
