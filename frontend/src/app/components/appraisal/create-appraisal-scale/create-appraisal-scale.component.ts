import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-appraisal-scale',
  templateUrl: './create-appraisal-scale.component.html',
  styleUrls: ['./create-appraisal-scale.component.css']
})
export class CreateAppraisalScaleComponent implements OnInit {
  form:any;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      scalePoint:new FormControl('',[
        Validators.required,
        Validators.max(99)
      ]),
      scaleTitle:new FormControl('',[
        Validators.required
      ]),
      description:new FormControl('',[
        Validators.required
      ]),
      versionNo:new FormControl('',[
        Validators.required
      ]),
    });


  }
  get f() { return this.form.controls; }

  onSubmit(value){

    console.log(value);

    this.submitted = true;
    if (!this.form.valid) {
      return;
    }


    // const token=this.token.get();
    // this.http.post(Constants.API_URL+'appraisal/insert-appraisal-head'+'?token='+token,value).subscribe(data => {
    //       this.submitted = false;
    //       this.form.reset();
    //       $.alert({
    //         title: 'Success!',
    //         type: 'Green',
    //         content: "Added Successfully",
    //         buttons: {
    //           tryAgain: {
    //             text: 'Ok',
    //             btnClass: 'btn-red',
    //             action: function () {
    //             }
    //           }
    //         }
    //       });
    //     },
    //     error => {
    //       console.log(error.error['error']);
    //
    //     }
    // );
  }

}
