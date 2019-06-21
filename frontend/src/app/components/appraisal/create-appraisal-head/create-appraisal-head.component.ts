import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
declare var $:any;
@Component({
  selector: 'app-create-appraisal-head',
  templateUrl: './create-appraisal-head.component.html',
  styleUrls: ['./create-appraisal-head.component.css']
})
export class CreateAppraisalHeadComponent implements OnInit {
  form:any;
  rule:any;
  grouoData:any;
  submitted = false;
  appraisalHeadModel:any={};
  constructor(private http:HttpClient,private token:TokenService) { }

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

    this.http.get(Constants.API_URL+'appraisal/group').subscribe(data => {
      this.grouoData=data;
         console.log(data);
        },
        error => {
          console.log(error.error['error']);

        }
    );
  }

  onSubmit(value){


    this.submitted = true;
    if (!this.form.valid) {
      return;
    }

    value['entryType']=this.rule;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'appraisal/insert-appraisal-head'+'?token='+token,value).subscribe(data => {
          this.submitted = false;
          this.form.reset();
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: "Added Successfully",
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });
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
        fk_Appraisalheads:new FormControl('',[
          Validators.required
        ]),
        headType:new FormControl('',[
          Validators.required
        ])


      });
    }



  }

}
