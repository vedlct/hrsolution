import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../../constants";

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

          console.log(data);
          this.religion=data;
        },
        error => {
          console.log(error);
        }
    );
  }

  submit(){
    console.log(this.employeePersonalForm);
  }

}
