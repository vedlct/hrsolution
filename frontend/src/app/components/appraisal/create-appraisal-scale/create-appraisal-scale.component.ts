import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
declare var $:any;

@Component({
  selector: 'app-create-appraisal-scale',
  templateUrl: './create-appraisal-scale.component.html',
  styleUrls: ['./create-appraisal-scale.component.css']
})
export class CreateAppraisalScaleComponent implements OnInit {
  // For datatable
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  checkTable=0;
  // end datatable
  existingScales:any;
  form:any;
  submitted = false;
  editModel:any={};
  modalRef:any;

  constructor(private http:HttpClient,private token:TokenService,private modalService: NgbModal) { }

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

    this.getData();


  }

  edit(data,content){
    console.log(data);
    this.editModel=data;
    this.modalRef =  this.modalService.open(content, { size: 'lg'});
  }
  getData(){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/show-appraisal-scale'+'?token='+token).subscribe(data => {
      // console.log(data);
          this.existingScales=data;
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
  get f() { return this.form.controls; }

  clearForm(){
    this.form.reset();
  }

  onSubmit(value){



    this.submitted = true;
    if (!this.form.valid) {
      return;
    }


    const token=this.token.get();
    this.http.post(Constants.API_URL+'appraisal/store-appraisal-scale'+'?token='+token,value).subscribe(data => {
      this.submitted = false;
          this.form.reset();
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: data['message'],
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

  update(){

    if(this.editModel.marks ==""){ return false;}
    if(this.editModel.title ==""){ return false;}
    if(this.editModel.marksDesc ==""){ return false;}
    if(this.editModel.versionNo ==""){ return false;}

    const token=this.token.get();
    this.http.post(Constants.API_URL+'appraisal/update-appraisal-scale'+'?token='+token,this.editModel).subscribe(data => {
          // console.log(data);

          $.alert({
            title: 'Success!',
            type: 'Green',
            content: data['message'],
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });
          this.getData();
        },
        error => {
          console.log(error.error['error']);

        }
    );

  }
}
