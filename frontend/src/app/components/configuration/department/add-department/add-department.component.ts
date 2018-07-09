import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../../constants";

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  @Input('master') data:any;

  departments:any[];
  departmentField={
    departmentName:''
  };

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(Constants.API_URL+'company/get/department').subscribe(data => {
          this.departments=<any[]>data;
          // console.log(this.departments);
        },
        error => {
          console.log(error);


        }
    );
  }

  editDept(dept){
    console.log(dept);
    this.departmentField.departmentName=dept.departmentName;

  }

}
