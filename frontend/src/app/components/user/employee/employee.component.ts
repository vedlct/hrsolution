import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:any;
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  id:any;
  constructor(public http: HttpClient, private token:TokenService , public route:ActivatedRoute) { }

  ngOnInit() {
    let coldef={ "targets": 4,
        "sortable"  : false
    };
      this.dtOptions={
        pagingType:'full_numbers',
          pageLength:10,

          columnDefs : [ coldef ]
      };

    this.getAllemployee();

     // console.log(this.route.snapshot.params.id)

  }


  getAllemployee(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'employee/get'+'?token='+token).subscribe(data => {
          // console.log(data);
          this.employee=data;
          this.dtTeigger.next();
          // console.log(data);
        },
        error => {
          console.log(error);
        }
    );



  }


}
