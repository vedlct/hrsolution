import {Component, OnInit, Renderer} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-pay-salary-sheet',
  templateUrl: './pay-salary-sheet.component.html',
  styleUrls: ['./pay-salary-sheet.component.css']
})
export class PaySalarySheetComponent implements OnInit {

  constructor(private modalService: NgbModal,private renderer: Renderer,public http: HttpClient, private token:TokenService ,
              public route:ActivatedRoute, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

}
