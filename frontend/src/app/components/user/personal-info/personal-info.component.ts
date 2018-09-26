import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";
declare var $ :any;
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input('empid') empid: any;
  nationality:any;
  religion:any;
  personlInfo:any;
  result:any;
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

  constructor(public http: HttpClient, private token:TokenService,private router: Router) { }

  ngOnInit() {
    this.employeePersonalForm.id=this.empid;

    //Getting PersonalInfo
    const token=this.token.get();
    this.http.post(Constants.API_URL+'personalinfo/get'+'?token='+token,{id:this.empid}).subscribe(data => {
        // console.log(data);
        this.personlInfo=data;
        this.employeePersonalForm.fatherName=this.personlInfo.fatherName;
        this.employeePersonalForm.motherName=this.personlInfo.motherName;
        this.employeePersonalForm.maritalStatus=this.personlInfo.maritalStatus;
        this.employeePersonalForm.spouseName=this.personlInfo.spouseName;
        this.employeePersonalForm.fkReligion=this.personlInfo.fkReligion;
        this.employeePersonalForm.fkNationality=this.personlInfo.fkNationality;
        this.employeePersonalForm.nationalId=this.personlInfo.nationalId;
        this.employeePersonalForm.presentStreet=this.personlInfo.presentStreet;
        this.employeePersonalForm.presentPS=this.personlInfo.presentPS;
        this.employeePersonalForm.presentZipcod=this.personlInfo.presentZipcod;
        this.employeePersonalForm.permanentStreet=this.personlInfo.permanentStreet;
        this.employeePersonalForm.permanentPS=this.personlInfo.permanentPS;
        this.employeePersonalForm.permanentZipcod=this.personlInfo.permanentZipcod;

        },
        error => {
          console.log(error);
        }
    );



    //Getting Nationality
    this.http.get(Constants.API_URL+'nationality/get').subscribe(data => {

          // console.log(data);
          this.nationality=data;
        },
        error => {
          console.log(error);
        }
    );

    //Getting religion
    this.http.get(Constants.API_URL+'religion/get').subscribe(data => {

          // console.log(data);
          this.religion=data;
        },
        error => {
          console.log(error);
        }
    );
  }

  submit(){

    const token=this.token.get();
    this.http.post(Constants.API_URL+'employee/updatePersonalInfo'+'?token='+token,this.employeePersonalForm).subscribe(data => {
             this.result=data;
          $.alert({
            title: 'Success!',
            type: 'Green',
            content: this.result.message,
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
