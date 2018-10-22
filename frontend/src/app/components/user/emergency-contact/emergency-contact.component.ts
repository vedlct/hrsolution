import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
declare var $ :any;
@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  @Input('empid') empid: any;
  error=[];
  form:any;
  emergencyForm:any={
    fkemployeeId:'',
    firstName:'',
    middleName:'',
    lastName:'',
    contactNo:'',
    alterContactNo:'',
    relation:'',
    address:''

  };

  constructor(public http: HttpClient, private token:TokenService,private router: Router) {

  }

  ngOnInit() {

    this.emergencyForm.fkemployeeId=this.empid;
    // this.emergencyForm.address=this.empid;
    this.getEmergencyData();


  }

  getEmergencyData(){

    this.http.post(Constants.API_URL+'emergency-contact/get',{fkemployeeId:this.empid}).subscribe(data => {
          // console.log(data);
           this.form=data;
          this.emergencyForm.firstName=this.form.firstName;
          this.emergencyForm.middleName=this.form.middleName;
          this.emergencyForm.lastName=this.form.lastName;
          this.emergencyForm.contactNo=this.form.contactNo;
          this.emergencyForm.alterContactNo=this.form.alterContactNo;
          this.emergencyForm.relation=this.form.relation;
          this.emergencyForm.address=this.form.address;
          this.emergencyForm.relation=this.form.relation;


        },
        error => {
          console.log(error);
        }
    );
  }

  submitForm(){

    this.http.post(Constants.API_URL+'emergency-contact/post',this.emergencyForm).subscribe(data => {
          // console.log(data);
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: 'Information Updated Successfully',
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
          const data=error.error.errors;

          for (var p in data) {

            for (var k in data[p]) {
              this.error.push(data[p][k]);
            }
          }

        }
    );
    console.log(this.emergencyForm);
  }

}
