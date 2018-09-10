import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  private infoFlag:number=1;
  id:any;
  empid:any;
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
     this.empid =this.route.snapshot.params.id;
  }

  onInfoClick(value){
    this.infoFlag=value;


  }

}
