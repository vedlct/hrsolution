import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input('empid') empid: any;
  employeePersonalForm:any={
    id:'',
    fatherName:'',
    motherName:'',
    maritalStatus:'',
    spouseName:'',
    fkReligion:'',
    fkNationality:'',
    nationalId:'',
    presentStreet:'',
    presentPS:'',
    presentZipcod:'',
    permanentStreet:'',
    permanentPS:'',
    permanentZipcod:'',

  };

  constructor() { }

  ngOnInit() {
    this.employeePersonalForm.id=this.empid;
    // console.log(this.empid);
  }

  submit(){
    console.log(this.employeePersonalForm);
  }

}
