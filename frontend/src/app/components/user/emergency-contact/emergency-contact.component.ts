import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  @Input('empid') empid: any;
  error=[];
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
          const form=data;
          this.emergencyForm.firstName=form.firstName;
          this.emergencyForm.middleName=form.middleName;
          this.emergencyForm.lastName=form.lastName;
          this.emergencyForm.contactNo=form.contactNo;
          this.emergencyForm.alterContactNo=form.alterContactNo;
          this.emergencyForm.relation=form.relation;
          this.emergencyForm.address=form.address;
          this.emergencyForm.relation=form.relation;


        },
        error => {
          console.log(error);
        }
    );
  }

  submitForm(){

    this.http.post(Constants.API_URL+'emergency-contact/post',this.emergencyForm).subscribe(data => {
          console.log(data);
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
