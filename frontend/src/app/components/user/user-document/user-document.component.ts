import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.css']
})
export class UserDocumentComponent implements OnInit {
  @Input('empid') empid: any;
  formNumber=[];
  userDocumentFormArray:any;
  userDocumentForm:any={
    name:'',
    document:'',

  };

  constructor() { }

  ngOnInit() {
    this.formNumber.push(0);
    this.userDocumentFormArray.push(this.userDocumentForm);
    console.log(this.userDocumentFormArray);
  }
  addMore(){
    this.userDocumentFormArray.push(this.userDocumentForm);
    this.formNumber.push(this.formNumber.length);
    console.log(this.userDocumentFormArray);
  }

  removeField(){
    this.formNumber.pop();
    this.userDocumentFormArray.pop();
  }
  submit(){
    console.log(this.userDocumentFormArray);
  }

}
