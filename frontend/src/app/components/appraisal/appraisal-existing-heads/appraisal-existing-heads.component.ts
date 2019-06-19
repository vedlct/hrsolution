import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {Subject} from "rxjs";

@Component({
  selector: 'app-appraisal-existing-heads',
  templateUrl: './appraisal-existing-heads.component.html',
  styleUrls: ['./appraisal-existing-heads.component.css']
})
export class AppraisalExistingHeadsComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  checkTable=0;
  existingAppraisals:any;
  constructor(private http:HttpClient,private token:TokenService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/show-appraisal-head'+'?token='+token).subscribe(data => {
          this.existingAppraisals=data;
          if(this.checkTable==0){
            this.dtTeigger.next();
            this.checkTable++;
          }

        },
        error => {
          console.log(error.error['error']);

        }
    );
  }

  edit(data){
      console.log(data);

  }

}
