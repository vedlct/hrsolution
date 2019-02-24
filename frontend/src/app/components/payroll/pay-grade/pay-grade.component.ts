import {Component, OnInit, Renderer} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {NgxSpinnerService} from "ngx-spinner";
import {NgxPermissionsService} from "ngx-permissions";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-pay-grade',
  templateUrl: './pay-grade.component.html',
  styleUrls: ['./pay-grade.component.css']
})
export class PayGradeComponent implements OnInit {

  payGradeModel:any={};
  payHeads:any;
    constructor(private modalService: NgbModal,public http: HttpClient, private token:TokenService ,
                public route:ActivatedRoute, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
      this.initModel();
    this.getPayheads();
    }

    initModel(){
        this.payGradeModel.gradeTitle="";
    }

    getPayheads(){
        this.spinner.show();
        this.http.get(Constants.API_URL+'payroll/payhead/get').subscribe(data => {
                this.spinner.hide();

                console.log(data);
                this.payHeads=data;



            },
            error => {
                this.spinner.hide();
                // this.error=error.error.error;
                console.log(error);

            }
        );
    }

}
