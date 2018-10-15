import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
import {TokenService} from "../../../services/token.service";
import {Router} from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  department:any;
  designation:any;
  empType:any;
  basicinfo: any;
  result:any;
  error=[];
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
    birthdate:'',
    gender:''


  };

  selectedFile:File;

    @Input('empid') empid: any;
    
  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {


    //Getting Departments
    this.http.get(Constants.API_URL+'department/get').subscribe(data => {

          this.department=data;
        },
        error => {
          console.log(error);
        }
    );

    //Getting Designations
    this.http.get(Constants.API_URL+'designation/get').subscribe(data => {
          // console.log(data);
          this.designation=data;
        },
        error => {
          console.log(error);
        }
    );

    //Getting Employee Types
    this.http.get(Constants.API_URL+'employee_type/get').subscribe(data => {
          // console.log(data);
          this.empType=data;
        },
        error => {
          console.log(error);
        }
    );

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
              }


             //this.empType=data;
          },
          error => {
              console.log(error);
          }
      );


  }

    selectDepartment(value){

      this.employeeBasicForm.department=value;
    }

    selectDesignation(value){

        this.employeeBasicForm.designation=value;
    }


    onFileSelected(event) {

        this.selectedFile =event.target.files[0];
        // console.log(this.selectedFile);
    }
    checkRequiredFields(){
        if(this.employeeBasicForm.EmployeeId == ''){
            return false;
        }
        if(this.employeeBasicForm.firstName== ''){
            return false;
        }
        if(  this.employeeBasicForm.lastName == ''){
            return false;
        }
        if(this.employeeBasicForm.gender == ''){
            return false;
        }
        if(this.employeeBasicForm.birthdate == ''){
            return false;
        }
        if(this.employeeBasicForm.department == ''){
            return false;
        }
        if(this.employeeBasicForm.empType == ''){
            return false;
        }
        if(this.employeeBasicForm.designation == ''){
            return false;
        }
        if(this.employeeBasicForm.contactNo == ''){
            return false;
        }

        return true;
    }

  onSubmit(){
        if(!this.checkRequiredFields()){
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: 'Please Create a user first',
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }


      let fd = new FormData();
      let value=this.employeeBasicForm;
      for ( let key in value ) {
          fd.append(key, value[key]);
      }

      if (this.selectedFile) {

          fd.append('photo', this.selectedFile, this.selectedFile.name);
      }

      const token=this.token.get();

      this.http.post(Constants.API_URL+'employee/basic'+'?token='+token,fd).subscribe(data => {

           this.result=data;
              $.alert({
                  title: 'Success!',
                  type: 'Green',
                  content: "Employee Updated Successfully",
                  buttons: {
                      tryAgain: {
                          text: 'Ok',
                          btnClass: 'btn-red',
                          action: function () {
                          }
                      }
                  }
              });
              this.router.navigate(['employee', 'edit', this.result.id]);

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
