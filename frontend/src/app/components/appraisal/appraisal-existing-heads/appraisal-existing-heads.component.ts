import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {Subject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
declare var $:any;
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
  modalRef:any;
  rule:any;
  grouoData:any;
  editModel:any={};

  constructor(private http:HttpClient,private token:TokenService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getData();

      this.http.get(Constants.API_URL+'appraisal/group').subscribe(data => {
              this.grouoData=data;
          },
          error => {
              console.log(error.error['error']);

          }
      );
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

  edit(data,content){


      if(data.fk_Appraisalheads == null){
          this.rule=false;
      }
      else {
          this.rule=true;
      }
      this.editModel=data;
      this.modalRef =  this.modalService.open(content, { size: 'lg'});

  }


    update(){
      // console.log(this.editModel);


        this.editModel['entryType']=!this.rule;
        const token=this.token.get();
        this.http.post(Constants.API_URL+'appraisal/insert-appraisal-head'+'?token='+token,this.editModel).subscribe(data => {
                console.log(data);
                this.getData();
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
                console.log(error);

            }
        );
    }

}
