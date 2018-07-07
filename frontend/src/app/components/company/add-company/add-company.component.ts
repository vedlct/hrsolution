import {Component, OnInit, Input} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService } from 'ngx-spinner';
import {Company} from "../../../model/company.model";
import {FormGroup, FormControl, Validators} from '@angular/forms';
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


  constructor(public http: HttpClient,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.http.get(Constants.API_URL+'company/get').subscribe(data => {
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
    // console.log(this.selectedFile);

    let fd = new FormData();


    if (this.selectedFile) {
      var i: number;
      for (i = 0 ; i < this.selectedFile.length; i++) {
        fd.append('image[]', this.selectedFile[i], this.selectedFile[i].name);
      }
    }




    this.http.post(Constants.API_URL + 'company/post/updateInfo', fd).subscribe(data => {
          console.log(data);

        },
        error => {
          console.log(error.message);

          // this.error=error.error.error;
          // console.log(this.error);

        }
    );


  }

}
