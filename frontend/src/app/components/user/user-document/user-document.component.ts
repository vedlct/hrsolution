import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.css']
})
export class UserDocumentComponent implements OnInit {
  @Input('empid') empid: any;

  constructor() { }

  ngOnInit() {
  }

}
