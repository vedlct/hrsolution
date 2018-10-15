import { Component, OnInit } from '@angular/core';
import { CheckService } from '../../services/check.service';
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private check:CheckService) {

  }
  hellow="hii";

  ngOnInit() {

  }

}
