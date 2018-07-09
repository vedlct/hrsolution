import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  private infoFlag:number=1;
  constructor() { }

  ngOnInit() {

  }

  onInfoClick(value){
    this.infoFlag=value;
  }

}
