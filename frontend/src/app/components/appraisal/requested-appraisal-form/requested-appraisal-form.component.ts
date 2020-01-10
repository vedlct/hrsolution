import {Component, OnInit, AfterViewInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-requested-appraisal-form',
  templateUrl: './requested-appraisal-form.component.html',
  styleUrls: ['./requested-appraisal-form.component.css']
})
export class RequestedAppraisalFormComponent implements OnInit {
  headData:any;
  setupId:any;
  formInfo:any;
  groupQues:any;
  displayForm:any = {
    formateNumber:'',
    formateName:'',
    formVersionNo:'',
    markVersionNo:'',
  };
  questions:any;

  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setupId = this.route.snapshot.paramMap.get("id");
    this.getAppraisorForm();
    let temp=[{id:"",question:"",ans:""}];
    this.headData=temp;
    this.groupQues=temp;

  }
  getAppraisorForm() {

    const token=this.token.get();
    this.http.get(Constants.API_URL+'appraisal/getRequestedAppraisalform/'+this.setupId+'?token='+token).subscribe(data => {
        this.questions=data['ques'];
        this.headData=data['ques'];
        this.formInfo=data['formInfo'];
        this.groupQues=data['groupQues'];


      console.log(data);
      },
      error => {
        console.log(error);

      }
    );
  }
  counter(i: number) {
    return new Array(i);
  }
  onSubmit(){

    if (this.groupQues.length >0){

      for (let i=0;i<this.groupQues[0]['child'].length;i++){

        if (this.groupQues[0]['child'][i]['ans']=== undefined){

          $.alert({
            title: 'Alert!',
            type: 'Red',
            content: "Please Answer Question"+(i+1),
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {

                }
              }
            }
          });
          return false;

        }

      }

    }


    let form={
      'data': this.groupQues,
      'setupId' :this.setupId,
      'headData' :this.headData,
    };

    console.log(form);
    // return false;

    const token=this.token.get();

    this.http.post(Constants.API_URL+'appraisal/insertAppraisalResult'+'?token='+token,form).subscribe(data => {

    //  console.log(data);

      let that =this;
        $.alert({
          title: 'Success',
          type: 'Green',
          content: "Successfully Appraised",
          buttons: {
            tryAgain: {
              text: 'Ok',
              btnClass: 'btn-red',
              action: function () {
                that.router.navigateByUrl('appraisal/appraisalList/requested');
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
