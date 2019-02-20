import { Injectable } from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  constructor(private token:TokenService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.token.isValid();
    if (this.token.isValid()) {
      // all ok, proceed navigation to routed component
      return true;
    }
    else {
      // start a new navigation to redirect to login page
      this.router.navigate(['/']);
      // abort current navigation
      return false;
    }
  }

}
