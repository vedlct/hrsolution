import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import  { Constants }  from '../constants';
import { AuthService } from './auth.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:boolean=false;
  user:any;
  constructor(private router:Router,public http: HttpClient) {
    // setInterval(() => {
    //   this.isTokenExpired();
    // }, 4000);
  }

  setUser(user){
    this.user=user;
  }

  getUser(){
    return this.user;
  }


  //JWT Token


  isTokenExpired(){
    const token = this.get();
    if (token) {
      const payload = token.split('.')[1];
      // if(Math.floor(this.decode(payload).exp) < Math.floor(new Date().getTime()/1000)){
      //   this.remove();
      //   console.log("Expired");
      // }

      // console.log("Exp :"+Math.floor(this.decode(payload).exp)+" Current :"+ Math.floor(new Date().getTime()/1000));
    }

  }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
    // console.log(this.payload(token));

    // this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
    //       this.setUser(data);
    //
    //     },
    //     error => {
    //       console.log(error);
    //       // this.handleError(error);
    //
    //     }
    // );
  }

  get() {

    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {

        return payload.iss === Constants.API_URL+'login' ? true : false;

      }
    }
    return false;
  }


  payload(token) {

    const payload = token.split('.')[1];
    //If Token Expires Logout Autometically
    this.isTokenExpired();

    return this.decode(payload);
  }



  decode(payload) {
    return JSON.parse(atob(payload));

  }

}
