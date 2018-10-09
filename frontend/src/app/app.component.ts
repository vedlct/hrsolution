import { Component } from '@angular/core';
import {TokenService} from "./services/token.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  master = 'Master';

  constructor(private token:TokenService) {
    return this.token.isValid();
  }

  isLogIn(){

    return this.token.isValid();
  }

}
