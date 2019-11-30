import {Component, OnInit, AfterViewInit, Renderer} from '@angular/core';
import {Constants} from "../../../constants";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-requested-appraisal-form',
  templateUrl: './requested-appraisal-form.component.html',
  styleUrls: ['./requested-appraisal-form.component.css']
})
export class RequestedAppraisalFormComponent implements OnInit {
  setupId:any;
  displayForm:any = {
    formateNumber:'',
    formateName:'',
    formVersionNo:'',
    markVersionNo:'',


  }

  constructor(private renderer: Renderer,public http: HttpClient, private token:TokenService , public route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setupId = this.route.snapshot.paramMap.get("id");

  }

}
