import {Component, OnInit, Input} from '@angular/core';
import {Constants} from "../../../constants";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
declare var $ :any;
@Component({
  selector: 'app-joining-info',
  templateUrl: './joining-info.component.html',
  styleUrls: ['./joining-info.component.css']
})
export class JoiningInfoComponent implements OnInit {
  @Input('empid') empid: any;
  JoiningForm:any;
  shift:any;
  userShitf:any;
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
    attDeviceUserId:'',
    shiftId:'',
    supervisor:'',
    probationPeriod:''
  };

    // DROPDOWN
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
      this.dropdownList = [
          { item_id: 'saturday', item_text: 'Saturday' },
          { item_id:'sunday', item_text: 'Sunday' },
          { item_id: 'monday', item_text: 'Monday' },
          { item_id: 'tuesday', item_text: 'Tuesday' },
          { item_id: 'wednesday', item_text: 'Wednesday' },
          { item_id: 'thursday', item_text: 'Thursday' },
          { item_id:'friday', item_text: 'Friday' }
      ];

      this.dropdownSettings = {
          singleSelection: false,
          idField: 'item_id',
          textField: 'item_text',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
      };


    this.employeeJoiningForm.id=this.empid;

    this.getData();
    this.getShift();
  }

  getData(){
      const token=this.token.get();
      this.http.post(Constants.API_URL+'joinInfo/get'+'?token='+token,{id:this.employeeJoiningForm.id}).subscribe(data => {
              // console.log(data);
              this.JoiningForm=data;
              this.employeeJoiningForm.actualJoinDate=this.JoiningForm.actualJoinDate;
              this.employeeJoiningForm.recentJoinDate=this.JoiningForm.recentJoinDate;
              this.employeeJoiningForm.resignDate=this.JoiningForm.resignDate;
              this.employeeJoiningForm.weekend=this.JoiningForm.weekend;
              this.employeeJoiningForm.accessPin=this.JoiningForm.accessPin;
              // this.employeeJoiningForm.scheduleInTime=this.JoiningForm.scheduleInTime;
              // this.employeeJoiningForm.scheduleOutTime=this.JoiningForm.scheduleOutTime;
              this.employeeJoiningForm.specialAllowance=this.JoiningForm.specialAllowance;
              this.employeeJoiningForm.attDeviceUserId=this.JoiningForm.attDeviceUserId;
              this.employeeJoiningForm.supervisor=this.JoiningForm.supervisor;
              this.employeeJoiningForm.probationPeriod=this.JoiningForm.probationPeriod;

              // console.log(this.employeeJoiningForm.weekend);
          if(this.employeeJoiningForm.weekend!=""){
              let weekArray=this.employeeJoiningForm.weekend.split(',');

              let tempArray=[];
              for (let i=0;i<weekArray.length;i++){
                  tempArray.push({item_id:weekArray[i],item_text:weekArray[i]});

              }

              this.selectedItems=tempArray;

          }




          },
          error => {
              console.log(error);
          }
      );

  }
  getShift(){
    const token=this.token.get();
    this.http.get(Constants.API_URL+'shift/get'+'?token='+token).subscribe(data => {
          this.shift=data;

        },
        error => {
          console.log(error);
        }
    );

    this.http.post(Constants.API_URL+'user/shift/get'+'?token='+token,{'fkemployeeId':this.employeeJoiningForm.id}).subscribe(data => {

          // data.fkshiftId
          this.userShitf=data;
          this.employeeJoiningForm.shiftId=this.userShitf.fkshiftId;
          this.selectShift(this.userShitf.fkshiftId);
        },
        error => {
          console.log(error);
        }
    );
  }
  selectShift(value){
    this.employeeJoiningForm.shiftId=value;
    let i=0;
    for(i;i<this.shift.length;i++){
        if(this.shift[i].shiftId==value){
          this.employeeJoiningForm.scheduleInTime=this.shift[i].inTime;
          this.employeeJoiningForm.scheduleOutTime=this.shift[i].outTime;
          break;
        }
    }
  }

  submit(){
    // console.log(this.employeeJoiningForm);
      this.employeeJoiningForm.weekend=this.selectedItems;


    const token=this.token.get();


    if(this.employeeJoiningForm.actualJoinDate !=null){
        this.employeeJoiningForm.actualJoinDate=new Date(this.employeeJoiningForm.actualJoinDate).toLocaleDateString();

    }
      if(this.employeeJoiningForm.recentJoinDate !=null) {
          this.employeeJoiningForm.recentJoinDate = new Date(this.employeeJoiningForm.recentJoinDate).toLocaleDateString();
      }
      if(this.employeeJoiningForm.resignDate !=null) {
          this.employeeJoiningForm.resignDate=new Date(this.employeeJoiningForm.resignDate).toLocaleDateString();
      }


    this.http.post(Constants.API_URL+'joinInfo/post'+'?token='+token,this.employeeJoiningForm).subscribe(data => {
      // console.log(data);
      // this.result=data;
        this.getData();
          $.alert({
            title: 'Success!',
            content: 'Updated',
          });

        },
        error => {
          console.log(error);
        }
    );

  }

}
