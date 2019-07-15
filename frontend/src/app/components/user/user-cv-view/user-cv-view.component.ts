import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {Router, ActivatedRoute} from '@angular/router';
import { NavbarService } from '../../../services/navbar.service';
declare var $ :any;

@Component({
  selector: 'app-user-cv-view',
  templateUrl: './user-cv-view.component.html',
  styleUrls: ['./user-cv-view.component.css'],
  
})
export class UserCvViewComponent implements OnInit {

  id:any;
  empid:any;
  basicinfo: any;
  employeeBasicForm:any={
    id:'',
    EmployeeId:'',
    department:'',
    designation:'',
    empType:'',
    firstName:'',
    middleName:'',
    lastName:'',
    nickName:'',
    email:'',
    contactNo:'',
    alterContactNo:'',
    birthdate:'',
    gender:'',
    photo:''


  };

  constructor(public http: HttpClient, private token:TokenService,public route:ActivatedRoute,
              public nav: NavbarService ) {

   this.nav.hide();

  }

  ngOnInit() {


    this.empid =this.route.snapshot.params.id;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'employee/basicinfo'+'?token='+token,{ empid:this.empid}).subscribe(data => {

          // console.log(data);
          this.basicinfo  = data;
          if(data !=null){
            this.employeeBasicForm.id = this.empid;
            this.employeeBasicForm.EmployeeId = this.basicinfo.EmployeeId;
            this.employeeBasicForm.firstName = this.basicinfo.firstName;
            this.employeeBasicForm.middleName = this.basicinfo.middleName;
            this.employeeBasicForm.lastName = this.basicinfo.lastName;
            this.employeeBasicForm.email = this.basicinfo.email;
            this.employeeBasicForm.gender = this.basicinfo.gender;
            this.employeeBasicForm.birthdate = this.basicinfo.birthdate;
            this.employeeBasicForm.department = this.basicinfo.fkDepartmentId;
            this.employeeBasicForm.empType = this.basicinfo.fkEmployeeType;
            this.employeeBasicForm.designation = this.basicinfo.fkDesignation;
            this.employeeBasicForm.contactNo = this.basicinfo.contactNo;
            this.employeeBasicForm.alterContactNo = this.basicinfo.alterContactNo;
            this.employeeBasicForm.photo = Constants.Image_URL+'images/'+this.basicinfo.photo;
            // console.log(this.employeeBasicForm.photo);
          }


          //this.empType=data;
        },
        error => {
          console.log(error);
        }
    );
  }

}
