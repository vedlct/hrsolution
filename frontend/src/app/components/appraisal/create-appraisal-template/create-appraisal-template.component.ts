import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Constants} from "../../../constants";
import {count} from "rxjs/operators";
declare var $;
@Component({
  selector: 'app-create-appraisal-template',
  templateUrl: './create-appraisal-template.component.html',
  styleUrls: ['./create-appraisal-template.component.css']
})
export class CreateAppraisalTemplateComponent implements OnInit {
  headData:any;
  existingTemplate:any;
    appraisalScalDetails:any;
    appraisalScal:any;
  formateModel:any={};

  constructor(private http:HttpClient,private token:TokenService,private modalService: NgbModal) { }

  ngOnInit() {
      let temp=[{id:"",headName:"",reportingBoss:"",userSelf:"",s:""}];
      this.headData=temp;
    this.getData();

  }

  getData(){
    //
    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/show-appraisal-heads-appraiser'+'?token='+token).subscribe(data => {
           console.log(data);
          this.headData=data;


        },
        error => {
          console.log(error.error['error']);

        }
    );
      this.existingTemplates();
      this.allScalVersion();


  }

    checkData(data,index,event){

      // console.log(this.headData[index]);
      if(event.target.checked){
          this.headData[index].s=true;
      }
      else {
          this.headData[index].s=false;
      }

      // console.log(index);

    }

    innerCheck(){
      console.log(this.headData);
    }

    saveData(){
      let tempArray=[];
        for (let index = 0; index < this.headData.length; ++index) {
            if(this.headData[index].s ==true){

                let appraisorArray=[];
                // tempArray.push(this.headData[index])
                if(this.headData[index].userSelf){
                    appraisorArray.push(1);
                }
                if(this.headData[index].reportingBoss){
                    appraisorArray.push(2);
                }
                if(this.headData[index].subOrdinates){
                    appraisorArray.push(3);
                }
                if(this.headData[index].coWorker){
                    appraisorArray.push(4);
                }
                let tempObj=this.headData[index];
                tempObj['appraisors']=appraisorArray;

                tempArray.push(tempObj)
            }

        }
        this.formateModel['formateDetails']=tempArray;


        console.log(this.formateModel);


        const token=this.token.get();
        this.http.post(Constants.API_URL+'appraisal/store-appraisal-format'+'?token='+token,this.formateModel).subscribe(data => {

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
                this.formateModel={};


            },
            error => {
                console.log(error.error['error']);

            }
        );

    }
    existingTemplates(){
        const token=this.token.get();
        this.http.get(Constants.API_URL+'appraisal/show-appraisal-format'+'?token='+token).subscribe(data => {
                console.log(data);
                this.existingTemplate=data;

            },
            error => {
                console.log(error.error['error']);

            }
        );
    }
    scalVersionDetails(id){

        // var id=this.formateModel.markVersionNo;
       // console.log(id);


        const token=this.token.get();
        this.http.get(Constants.API_URL+'appraisal/show-appraisal-scale-details-byVersion/'+id+'?token='+token).subscribe(data => {

                this.appraisalScalDetails=data;
               // console.log(this.appraisalScalDetails);



                // this.existingScales=data;
                // if(this.checkTable==0){
                //   this.dtTeigger.next();
                //   this.checkTable++;
                // }

            },
            error => {
                console.log(error.error['error']);

            }
        );

    }
    allScalVersion(){

        const token=this.token.get();
        this.http.get(Constants.API_URL+'appraisal/show-appraisal-scale-ByVersionNo'+'?token='+token).subscribe(data => {
                this.appraisalScal=data;
                this.scalVersionDetails(data[0].versionNo);
                this.formateModel['markVersionNo']=data[0].versionNo;

            },
            error => {
                console.log(error.error['error']);

            }
        );



    }
  editTemplate(id) {

    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/get_appraisal_template_for_edit/'+id+'?token='+token).subscribe(data => {
        this.headData=data['headInfo'];
        this.formateModel.appraisal_Format_id = data['formateInfo']['id'];
        this.formateModel.formatName = data['formateInfo']['formatName'];
        this.formateModel.formVersionNo = data['formateInfo']['formVersionNo'];
        this.formateModel.markVersionNo = data['formateInfo']['markVersionNo'];

        //console.log(data);
        console.log(data);

      },
      error => {
        console.log(error.error['error']);

      }
    );

  }
}
