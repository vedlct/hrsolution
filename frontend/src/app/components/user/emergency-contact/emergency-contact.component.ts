import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  @Input('empid') empid: any;
  error=[];
  emergencyForm:any={
    id:'',
    firstName:'',
    middleName:'',
    lastName:'',
    contactNo:'',
    alterContactNo:'',
    address:''

  };

  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.emergencyForm.id=this.empid;
    // this.emergencyForm.address=this.empid;

  }

  submitForm(){
    // const data=error.error.errors;
    //
    // for (var p in data) {
    //
    //   for (var k in data[p]) {
    //     this.error.push(data[p][k]);
    //   }
    // }
    console.log(this.emergencyForm);
  }

}
