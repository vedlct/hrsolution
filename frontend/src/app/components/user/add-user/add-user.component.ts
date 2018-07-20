import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public userinput = {
    name:null,
    password: null,
    email: null,
    number: null,
    userImage: null,
    type: null
  };
  // userImage:File;


  constructor() { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
  }

  onSubmit(){
    console.log('Submit Clicked');
    // $event.preventDefault();
    console.log(this.userinput);
    // console.log(this.userImage);
  }

}

