import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-create-appraisal-template',
  templateUrl: './create-appraisal-template.component.html',
  styleUrls: ['./create-appraisal-template.component.css']
})
export class CreateAppraisalTemplateComponent implements OnInit {
  headData:any;

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
          // console.log(data);
          this.headData=data;
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
                tempArray.push(this.headData[index])
            }
        }

        console.log(tempArray);
    }
}
