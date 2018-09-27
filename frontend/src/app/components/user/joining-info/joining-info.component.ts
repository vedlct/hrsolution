import {Component, OnInit, Input} from '@angular/core';
import {Constants} from "../../../constants";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-joining-info',
  templateUrl: './joining-info.component.html',
  styleUrls: ['./joining-info.component.css']
})
export class JoiningInfoComponent implements OnInit {
  @Input('empid') empid: any;
  JoiningForm:any;
  employeeJoiningForm:any={
    id:'',
    actualJoinDate:'',
    recentJoinDate:'',
    resignDate:'',
    weekend:'',
    accessPin:'',
    scheduleInTime:'',
    scheduleOutTime:'',
    specialAllowance:'',
  };

  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.employeeJoiningForm.id=this.empid;
    const token=this.token.get();
    this.http.post(Constants.API_URL+'joinInfo/get'+'?token='+token,{id:this.employeeJoiningForm.id}).subscribe(data => {
          // console.log(data);
      this.JoiningForm=data;
      this.employeeJoiningForm.actualJoinDate=this.JoiningForm.actualJoinDate;
      this.employeeJoiningForm.recentJoinDate=this.JoiningForm.recentJoinDate;
      this.employeeJoiningForm.resignDate=this.JoiningForm.resignDate;
      this.employeeJoiningForm.weekend=this.JoiningForm.weekend;
      this.employeeJoiningForm.accessPin=this.JoiningForm.accessPin;
      this.employeeJoiningForm.scheduleInTime=this.JoiningForm.scheduleInTime;
      this.employeeJoiningForm.scheduleOutTime=this.JoiningForm.scheduleOutTime;
      this.employeeJoiningForm.specialAllowance=this.JoiningForm.specialAllowance;


        },
        error => {
          console.log(error);
        }
    );
  }

  submit(){
    // console.log(this.employeeJoiningForm);
    const token=this.token.get();
    this.http.post(Constants.API_URL+'joinInfo/post'+'?token='+token,this.employeeJoiningForm).subscribe(data => {
      console.log(data);
      // this.result=data;
          // $.alert({
          //   title: 'Success!',
          //   content: this.result.message,
          // });

        },
        error => {
          console.log(error);
        }
    );

  }

}
