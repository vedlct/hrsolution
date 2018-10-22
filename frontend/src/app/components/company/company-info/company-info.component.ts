import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  infoFlag:number=1;
  master = 'Master';

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {


  }
  onInfoClick(value){
    this.infoFlag=value;
  }

}
