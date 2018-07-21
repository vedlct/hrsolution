import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:any;
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  constructor(public http: HttpClient, private token:TokenService) { }


  ngOnInit() {
      this.dtOptions={
        pagingType:'full_numbers',
          pageLength:10
      };

    this.getAllemployee();
     // $('#example').DataTable();
  }


  getAllemployee(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'employee/get'+'?token='+token).subscribe(data => {
          console.log(data);
          this.employee=data;
          this.dtTeigger.next();
          // console.log(data);
        },
        error => {
          console.log(error);
        }
    );

    // $('#example').DataTable({
    //   rowReorder: {
    //     selector: 'td:nth-child(0)'
    //   },
    //   responsive: true,
    //   processing: true,
    //   serverSide: true,
    //   Filter: true,
    //   stateSave: true,
    //
    //   "ajax":{
    //     "url":Constants.API_URL+'employee/get'+'?token='+token ,
    //     "type": "GET",
    //     data:function (d){
    //       d._token=token
    //
    //     },
    //
    //   },
    //   columns: [
    //     { data: 'EmployeeId', name: 'EmployeeId' },
    //
    //   ]
    // } );

  }


  checkEmployee(){
    return true;
  }
}
