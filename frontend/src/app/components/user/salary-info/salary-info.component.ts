import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-salary-info',
  templateUrl: './salary-info.component.html',
  styleUrls: ['./salary-info.component.css']
})
export class SalaryInfoComponent implements OnInit {
  @Input('empid') empid: any;
  constructor() { }

  ngOnInit() {
  }

}
