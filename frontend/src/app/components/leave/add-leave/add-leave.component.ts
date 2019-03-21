import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
declare var $ :any;
@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  employee:any= {};
  leaveCategories:any;
  myLeaves:any;

  constructor(public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.getCategory();
      this.getMyLeaves();
  }

  getCategory(){
        this.employee.fkLeaveCategory="";

        const token=this.token.get();
        this.http.get(Constants.API_URL+'leave/getLeaveCategory'+'?token='+token).subscribe(data => {
                this.leaveCategories=data;
            },
            error => {
                console.log(error);
            }
        );
  }

  getMyLeaves(){
      const token=this.token.get();
      // leave/get/individual
      this.http.post(Constants.API_URL+'leave/get/myleave'+'?token='+token,{}).subscribe(data => {
              // console.log(data);
              this.myLeaves=data;
          },
          error => {
              console.log(error);
          }
      );
  }

  assignLeave(){
      let form={
          // allEmp:this.allEmp,
          startDate:new Date(this.employee.startDate).toLocaleDateString(),
          endDate:new Date(this.employee.endDate).toLocaleDateString(),
          noOfDays:this.employee.noOfDays,
          remark:this.employee.remark,
          fkLeaveCategory:this.employee.fkLeaveCategory,

      };
      // leave/assignLeavePersonal

      const token=this.token.get();

      this.http.post(Constants.API_URL+'leave/assignLeavePersonal'+'?token='+token,form).subscribe(data => {
              console.log(data);
              this.getMyLeaves();


              $.alert({
                  title: 'Success!',
                  type: 'Green',
                  content: 'Leave Assigned',
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
