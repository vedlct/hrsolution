import {Component, OnInit, Input} from '@angular/core';
import {Constants} from "../../../constants";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {fromArray} from "rxjs/internal/observable/fromArray";

@Component({
  selector: 'app-user-document',
  templateUrl: './user-document.component.html',
  styleUrls: ['./user-document.component.css']
})
export class UserDocumentComponent implements OnInit {
  @Input('empid') empid: any;
  formNumber=[];
  userDocumentFormArray=[];

  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    // this.formNumber.push(0);
    let form={name:'',
      document:'',};
    this.userDocumentFormArray.push(form);
    // console.log(this.userDocumentFormArray);
  }
  addMore(){
    let form={name:'',
      document:'',};
    this.userDocumentFormArray.push(form);
    // this.formNumber.push(this.formNumber.length);
    // console.log(this.userDocumentFormArray);
  }

  removeField(){
    this.formNumber.pop();
    this.userDocumentFormArray.pop();
  }
  onFileSelected(index,event) {

    let selectedFile=event.target.files[0];
    this.userDocumentFormArray[index].document =selectedFile;


  }


  submit(){

    let fd = new FormData();
    for(let i=0;i<this.userDocumentFormArray.length;i++){

      fd.append("name[]",  this.userDocumentFormArray[i].name);
      fd.append('document[]', this.userDocumentFormArray[i].document, this.userDocumentFormArray[i].document.name);

    }

    this.http.post(Constants.API_URL+'document/submit',fd).subscribe(data => {
          console.log(data);

        },
        error => {
          console.log(error);
        }
    );
  }

}
