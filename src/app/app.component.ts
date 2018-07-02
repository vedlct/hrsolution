import { Component } from '@angular/core';
import {TokenService} from "./services/token.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private token:TokenService) {
  }

  isLogIn(){
    var url=this.token.getUrl();
    if(url=='/login'){
      return false;
    }
    else {
      return true;
    }

  }

}
