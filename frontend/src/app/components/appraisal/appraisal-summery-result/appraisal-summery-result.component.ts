import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Constants} from "../../../constants";

@Component({
  selector: 'app-appraisal-summery-result',
  templateUrl: './appraisal-summery-result.component.html',
  styleUrls: ['./appraisal-summery-result.component.css']
})
export class AppraisalSummeryResultComponent implements OnInit {
  setupId: any;
  theHtmlString: any;

  constructor(public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.setupId = this.route.snapshot.paramMap.get('id');
    this.getResult();
  }

  getResult() {

    const token = this.token.get();
    this.http.get(Constants.API_URL + 'appraisal/result/get/' + this.setupId  + '?token=' + token).subscribe(data => {

        this.theHtmlString = data;
        console.log(data);


      },
      error => {
        console.log(error);

      }
    );

  }

}
