import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userModel:any={};

  constructor(public http: HttpClient,private token:TokenService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
      const token=this.token.get();
      this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
              this.userModel=data;
              this.userModel.currentPassword ="";
              this.userModel.password ="";
              this.userModel.password_again ="";
              console.log(data);

          },
          error => {
              console.log(error);


          }
      );
  }


  changePassword(){
      if(this.userModel.password != this.userModel.password_again){
          $.alert({
              title: 'Alert!',
              type: 'Red',
              content: "Password did not match",
              buttons: {
                  tryAgain: {
                      text: 'Ok',
                      btnClass: 'btn-red',
                      action: function () {
                      }
                  }
              }
          });
          return false;
      }

      if(this.userModel.currentPassword ==""){
          $.alert({
              title: 'Alert!',
              type: 'Red',
              content: "Old password required",
              buttons: {
                  tryAgain: {
                      text: 'Ok',
                      btnClass: 'btn-red',
                      action: function () {
                      }
                  }
              }
          });
          return false;

      }
      if(this.userModel.password ==""){
          $.alert({
              title: 'Alert!',
              type: 'Red',
              content: "New password required",
              buttons: {
                  tryAgain: {
                      text: 'Ok',
                      btnClass: 'btn-red',
                      action: function () {
                      }
                  }
              }
          });
          return false;

      }

      if(this.userModel.password_again ==""){
          $.alert({
              title: 'Alert!',
              type: 'Red',
              content: "Confirm password required",
              buttons: {
                  tryAgain: {
                      text: 'Ok',
                      btnClass: 'btn-red',
                      action: function () {
                      }
                  }
              }
          });
          return false;

      }

      const token = this.token.get();

      this.http.post(Constants.API_URL+'profile/password/change'+'?token='+token,this.userModel).subscribe(data => {

              // console.log(data);
              $.alert({
                  title: 'Success!',
                  type: 'Green',
                  content: data,
                  buttons: {
                      tryAgain: {
                          text: 'Ok',
                          btnClass: 'btn-red',
                          action: function () {
                          }
                      }
                  }
              });
             this.getData();
          },

          error => {
              console.log(error);
          }
      );

  }

}
