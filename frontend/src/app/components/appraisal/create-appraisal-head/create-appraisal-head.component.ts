import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-appraisal-head',
  templateUrl: './create-appraisal-head.component.html',
  styleUrls: ['./create-appraisal-head.component.css']
})
export class CreateAppraisalHeadComponent implements OnInit {
  form:any;
  rule:any;
  submitted = false;
  appraisalHeadModel:any={};
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.rule=true;
    this.form=new FormGroup({
      headName:new FormControl('',[
        Validators.required
      ]),
      headDesc:new FormControl('',[
        Validators.required
      ])
    });
  }

  onSubmit(value){
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }

    value['entryType']=this.rule;
    this.http.post(Constants.API_URL+'appraisal/insert-appraisal-head',value).subscribe(data => {
              console.log(data);

        },
        error => {


          console.log(error.error['error']);


        }
    );
  }

  get f() { return this.form.controls; }

  checkGroupType(value){

    if(value ==true){
      this.form=new FormGroup({
        headName:new FormControl('',[
          Validators.required
        ]),
        headDesc:new FormControl('',[
          Validators.required
        ])
      });
    }



    else {
      this.form=new FormGroup({
        headName:new FormControl('',[
          Validators.required
        ]),
        headDesc:new FormControl('',[
          Validators.required
        ]),
        group:new FormControl('',[
          Validators.required
        ]),
        headType:new FormControl('',[
          Validators.required
        ])


      });
    }



  }

}
