import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee:any;
  constructor(public http: HttpClient, private token:TokenService) { }


  ngOnInit() {

    this.getAllemployee();
     $('#example').DataTable();
  }


  getAllemployee(){
    const token=this.token.get();

    this.http.get(Constants.API_URL+'employee/get'+'?token='+token).subscribe(data => {
          console.log(data);
          this.employee=data;
          console.log(data);
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
