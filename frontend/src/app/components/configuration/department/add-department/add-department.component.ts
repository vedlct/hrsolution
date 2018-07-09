import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../../constants";
import {TokenService} from "../../../../services/token.service";

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

  constructor(public http: HttpClient,private token:TokenService) { }

  ngOnInit() {
    const token=this.token.get();
    this.http.get(Constants.API_URL+'company/get/department'+'?token='+token).subscribe(data => {
          this.departments=<any[]>data;
          // console.log(this.departments);
        },
        error => {
          console.log(error);


        }
    );
  }

  editDept(dept){
    // console.log(dept);
    this.departmentField.departmentName=dept.departmentName;
  }

}
