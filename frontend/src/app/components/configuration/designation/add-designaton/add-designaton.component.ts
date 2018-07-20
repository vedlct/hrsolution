import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Constants }  from '../../../../constants';
import {Designation} from "../../../../model/designation.model";


@Component({
  selector: 'app-add-designaton',
  templateUrl: './add-designaton.component.html',
  styleUrls: ['./add-designaton.component.css']
})
export class AddDesignatonComponent implements OnInit {
  id:number;
  designation= {} as Designation;
  designationForm={} as Designation;
  // designation:any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    //Getting Designations
    this.http.get(Constants.API_URL+'designation/get').subscribe(data => {

          this.designation=<Designation>data;
          // console.log(this.designation);
        },
        error => {
          console.log(error);
        }
    );

  }
  checkId(){
    //
    // if(this.designationForm =={}){
    //   return false;
    // }
    return true;
    // else {return true;}
  }

  editDsig(desig){
    this.designationForm=desig;
    console.log(desig);

  }

}