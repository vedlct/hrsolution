import { Component, OnInit } from '@angular/core';
import {Constants} from '../../constants';
import {HttpClient} from '@angular/common/http';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data:any;
  constructor(public http: HttpClient,private token:TokenService) { }

  ngOnInit() {

      const token=this.token.get();
      this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
              // console.log(data);
              this.token.setUser(data);
              // console.log(this.token.getUser());

          },
          error => {
              console.log(error);
              this.handleError(error);

          }
      );

  }

  whoAmI(e: MouseEvent){
      e.preventDefault();
      const token=this.token.get();
      this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
              console.log(data);

          },
          error => {
              console.log(error);
              this.handleError(error);

          }
      );
  }

  logout(e: MouseEvent) {
    e.preventDefault();
    const token=this.token.get();
    // console.log(token);
    //
    this.http.post(Constants.API_URL+'logout?token='+token,null).subscribe(data => {
          // console.log(data);
          this.data=data;
          if (this.data.flag === 'true') {
            this.token.remove();
          }

        },
        error => {

          if(error.status==401 && error.error.message==='Unauthenticated.'){
            this.token.remove();
          }

        }
    );


  }

  handleError(error){
      if(error.status==401 && error.error.message==='Unauthenticated.'){
          this.token.remove();
      }

  }

}
