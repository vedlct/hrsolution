import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import  { Constants }  from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token:boolean=false;
  constructor(private router:Router) { }

  getToken(){
    return this.token;
  }

  setToken(value:boolean){
    this.token=value;
  }

  getUrl(){
    return this.router.url;
  }

  //JWT Token

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
    // console.log(this.payload(token));
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
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));

  }

}
