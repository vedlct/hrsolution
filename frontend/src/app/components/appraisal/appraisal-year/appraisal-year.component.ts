import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-year',
  templateUrl: './appraisal-year.component.html',
  styleUrls: ['./appraisal-year.component.css']
})
export class AppraisalYearComponent implements OnInit {
  infoFlag:number=1;
  constructor() { }

  ngOnInit() {
  }
  onInfoClick(value){

      this.infoFlag=value;

  }

}
