import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.css']
})
export class BankInfoComponent implements OnInit {

  @Input('empid') empid: any;
  constructor() { }

  ngOnInit() {
  }

}
