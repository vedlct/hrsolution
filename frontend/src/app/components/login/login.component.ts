import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import  { Constants }  from '../../constants';
import {TokenService} from "../../services/token.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form:any;
    error:null;
    submitted = false;


  constructor(private http:HttpClient,
              private router:Router,
              private token:TokenService
  ) {

  }

  ngOnInit() {
      this.form=new FormGroup({
          email:new FormControl('',[
              Validators.required,
              Validators.email
          ]),
          password:new FormControl('',[
              Validators.required,
              Validators.minLength(6)
          ])
      });

  }

  onSubmit(value){
      this.submitted = true;
      if (!this.form.valid) {
          return;
      }
    this.http.post(Constants.API_URL+'login',value).subscribe(data => {

          this.error=null;
          this.handleResponse(data);

        },
        error => {
          this.error=error.error.error;
          // console.log(this.error);

        }
    );
  }

  get f() { return this.form.controls; }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('home');
  }

}
