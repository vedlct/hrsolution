import { Component } from '@angular/core';
import {TokenService} from "./services/token.service";
import {Constants} from "./constants";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  master = 'Master';

  constructor(private token:TokenService,public http: HttpClient) {
   this.token.isValid();

    const tokent=this.token.get();
    this.http.post(Constants.API_URL+'me?token='+tokent,null).subscribe(data => {
          // console.log(data);
        this.token.setUser(data);
        // console.log(this.token.getUser());

        },
        error => {
          console.log(error);


        }
    );
  }

  isLogIn(){

    return this.token.isValid();
  }

}
