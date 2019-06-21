import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-head',
  templateUrl: './appraisal-head.component.html',
  styleUrls: ['./appraisal-head.component.css']
})
export class AppraisalHeadComponent implements OnInit {
  infoFlag:number=1;
  constructor() { }

  ngOnInit() {
  }

  onInfoClick(value){

      this.infoFlag=value;


  }

}
