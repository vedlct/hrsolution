import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import  { Constants }  from '../../constants';
import {TokenService} from "../../services/token.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  error:null;


  constructor(private http:HttpClient,
              private router:Router,
              private token:TokenService
  ) {

  }

  ngOnInit() {

  }

  onSubmit(){
    this.http.post(Constants.API_URL+'login',this.form).subscribe(data => {

          this.error=null;
          this.handleResponse(data);

        },
        error => {
          this.error=error.error.error;
          // console.log(this.error);

        }
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('home');
  }

}
