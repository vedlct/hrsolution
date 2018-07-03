import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Constants }  from '../../../../constants';

@Component({
  selector: 'app-add-designaton',
  templateUrl: './add-designaton.component.html',
  styleUrls: ['./add-designaton.component.css']
})
export class AddDesignatonComponent implements OnInit {
  id:number=null;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(Constants.API_URL).subscribe(data => {
          console.log(data);

        },
        error => {
          console.log(error);

        }
    );

    this.id=10;

  }
  checkId(){

    if(this.id===null){
      return true;
    }
    else {return false;}
  }

}
