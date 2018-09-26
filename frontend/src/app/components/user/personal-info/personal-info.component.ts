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
        console.log(data);
        this.employeePersonalForm.fatherName=data.fatherName;
        this.employeePersonalForm.motherName=data.motherName;
        this.employeePersonalForm.maritalStatus=data.maritalStatus;
        this.employeePersonalForm.spouseName=data.spouseName;
        this.employeePersonalForm.fkReligion=data.fkReligion;
        this.employeePersonalForm.fkNationality=data.fkNationality;
        this.employeePersonalForm.nationalId=data.nationalId;
        this.employeePersonalForm.presentStreet=data.presentStreet;
        this.employeePersonalForm.presentPS=data.presentPS;
        this.employeePersonalForm.presentZipcod=data.presentZipcod;
        this.employeePersonalForm.permanentStreet=data.permanentStreet;
        this.employeePersonalForm.permanentPS=data.permanentPS;
        this.employeePersonalForm.permanentZipcod=data.permanentZipcod;

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

          $.alert({
            title: 'Success!',
            type: 'Green',
            content: data.message,
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
