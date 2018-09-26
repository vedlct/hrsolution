import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-joining-info',
  templateUrl: './joining-info.component.html',
  styleUrls: ['./joining-info.component.css']
})
export class JoiningInfoComponent implements OnInit {
  @Input('empid') empid: any;
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

  constructor() { }

  ngOnInit() {
    this.employeeJoiningForm.id=this.empid;
  }

  submit(){
    console.log(this.employeeJoiningForm);
  }

}
