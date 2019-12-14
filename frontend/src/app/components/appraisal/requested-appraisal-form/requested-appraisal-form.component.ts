import {Component, OnInit, AfterViewInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

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
    // this.getAppraisorForInfo();
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
    console.log(this.headData);
    console.log(this.groupQues);
    // console.log('Submit Clicked');
    // $event.preventDefault();
    // console.log('formdata');
    // console.log(this.userImage);
  }

}
