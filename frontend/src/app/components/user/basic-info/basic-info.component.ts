import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  department:any;
  designation:any;
  empType:any;
  employeeBasicForm:any={
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
    
  constructor(public http: HttpClient) { }

  ngOnInit() {


    //Getting Departments
    this.http.get(Constants.API_URL+'department/get').subscribe(data => {
          // console.log(data);
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


      this.http.get(Constants.API_URL+'employee/getBasicinfo').subscribe(data => {
              // console.log(data);
              this.empType=data;
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

  onSubmit(){

      let fd = new FormData();
      let value=this.employeeBasicForm;
      for ( let key in value ) {
          fd.append(key, value[key]);
      }

      if (this.selectedFile) {

          fd.append('image', this.selectedFile, this.selectedFile.name);
      }

      this.http.post(Constants.API_URL+'employee/basic',fd).subscribe(data => {
              console.log(data);

          },
          error => {
              console.log(error);
          }
      );
  }

}
