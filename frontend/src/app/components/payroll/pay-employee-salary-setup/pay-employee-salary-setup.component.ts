import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-employee-salary-setup',
  templateUrl: './pay-employee-salary-setup.component.html',
  styleUrls: ['./pay-employee-salary-setup.component.css']
})
export class PayEmployeeSalarySetupComponent implements OnInit {
  grossPercent:number;

  constructor() { }

  print(){
    console.log(this.grossPercent);
  }

  ngOnInit() {
  }

}
