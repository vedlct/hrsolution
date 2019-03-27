import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../services/check.service';
import {TokenService} from "../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../constants";
declare var $ :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  attendanceModel:any={};
  absentModel:any;


  constructor(private check:CheckService,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    this.getLiveAttendance();
      // setInterval(() => { this.testData(); }, 5000);
  }

    testData(){
      console.log(1);
    }

  getLiveAttendance(){
    const token=this.token.get();
    this.http.post(Constants.API_URL+'report/attendance/live'+'?token='+token,{}).subscribe(data => {

              console.log(data);
              this.attendanceModel=data;
        },
        error => {
          console.log(error);
        }
    );

  }


  showAbsent(department){
      /*
      * ppdMorning
      * ppdEvening
      * software
      * global
      * digital
      *
      * */
      // absentList_software
        if(department=='ppdMorning'){
            this.absentModel=this.attendanceModel.morningAbsentList_ppd;
        }
        if(department=='ppdEvening'){

            this.absentModel=this.attendanceModel.eveningAbsentList_ppd;
        }
        if(department=='software'){
            this.absentModel=this.attendanceModel.absentList_software;
        }
        if(department=='global'){

            this.absentModel=this.attendanceModel.absentList_global;
        }
        if(department=='digital'){
            this.absentModel=this.attendanceModel.absentList_digital;
        }

      $('#myModal').modal();
  }

}
