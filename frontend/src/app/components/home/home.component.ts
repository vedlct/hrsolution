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

  constructor(private check:CheckService,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    this.getLiveAttendance();
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
        if(department=='ppdMorning'){console.log(department)}
        if(department=='ppdEvening'){console.log(department)}
        if(department=='software'){console.log(department)}
        if(department=='global'){console.log(department)}
        if(department=='digital'){console.log(department)}

      $('#myModal').modal();
  }

}
