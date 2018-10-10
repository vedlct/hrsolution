import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Constants }  from '../../../../constants';
import {Designation} from "../../../../model/designation.model";
import {TokenService} from "../../../../services/token.service";


@Component({
  selector: 'app-add-designaton',
  templateUrl: './add-designaton.component.html',
  styleUrls: ['./add-designaton.component.css']
})
export class AddDesignatonComponent implements OnInit {
  id:number;
  // designation= {} as Designation;
  designationForm={} as Designation;
  designation:any;
  constructor(public http: HttpClient,private token:TokenService) { }

  ngOnInit() {
    //Getting Designations
    this.getAllDesignations();


  }

  getAllDesignations(){
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
    if(Object.keys(this.designationForm).length === 0){
      return true;
    }
    return false;
    // else {return true;}
  }

  editDsig(desig){
    this.designationForm=desig;
    // console.log(desig);

  }

  reset(){
    this.designationForm={} as Designation;
  }

  onSubmit(){
    console.log(this.designationForm);
    const token=this.token.get();
    this.http.post(Constants.API_URL+'designationinfo/post'+'?token='+token,this.designationForm).subscribe(data => {
          console.log(data);
          this.getAllDesignations();
        },
        error => {
          console.log(error);
        }
    );

  }

}