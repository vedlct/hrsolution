import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

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

}
