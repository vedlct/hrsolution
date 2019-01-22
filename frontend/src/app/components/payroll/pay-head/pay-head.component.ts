import {Component, OnInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pay-head',
  templateUrl: './pay-head.component.html',
  styleUrls: ['./pay-head.component.css']
})
export class PayHeadComponent implements OnInit {
  dtOptions:DataTables.Settings={};
  dtTeigger:Subject<any>=new Subject();
  checkTable=0;
  modalRef:any;

  payHeadData:any;
  model: any = {};
  editModel: any = {};



  constructor(private modalService: NgbModal,private renderer: Renderer,public http: HttpClient, private token:TokenService ,
              public route:ActivatedRoute, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.model.allowDeducType='';
    this.getData();
  }

  getData(){
    this.spinner.show();
    this.http.get(Constants.API_URL+'payroll/payhead/get').subscribe(data => {
          this.spinner.hide();

          // console.log(data);
          this.payHeadData=data;
          if(this.checkTable==0){
            this.dtTeigger.next();
            this.checkTable++;
          }


        },
        error => {
          this.spinner.hide();
          // this.error=error.error.error;
          console.log(error);

        }
    );
  }

  onSubmit(){


    this.http.post(Constants.API_URL+'payroll/payhead/insert',this.model).subscribe(data => {
          // this.spinner.hide();

        console.log(data);
        this.model=[];

        },
        error => {
          // this.spinner.hide();
          // this.error=error.error.error;
          console.log(error);

        }
    );

  }

  // openLg(content) {
  //
  //   this.modalRef =  this.modalService.open(content, { size: 'lg'});
  //
  // }
  update(){

      this.http.post(Constants.API_URL+'payroll/payhead/update',this.editModel).subscribe(data => {


              console.log(data);
              this.modalRef.close();
              this.getData();


          },
          error => {
              console.log(error);

          }
      );


  }

  edit(data,content){
    // console.log(data);
    this.editModel.id=data.id;
    this.editModel.allowDeducTitle=data.allowDeducTitle;
    this.editModel.allowDeducType=data.allowDeducType;
    this.editModel.description=data.description;
    this.editModel.applicable=data.applicable;


    this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }
}
