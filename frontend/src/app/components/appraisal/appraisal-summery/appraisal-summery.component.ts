import {Component, OnInit, Renderer} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../services/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Constants} from '../../../constants';

@Component({
  selector: 'app-appraisal-summery',
  templateUrl: './appraisal-summery.component.html',
  styleUrls: ['./appraisal-summery.component.css']
})
export class AppraisalSummeryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  result: any;

  constructor(private renderer: Renderer, public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
    this.getAppraisalList();
  }

  getAppraisalList() {

    const token = this.token.get();
    const form = {
      'userId': JSON.parse(localStorage.getItem('user')).id,
    };
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL + 'appraisal/summery' + '?token=' + token,
        type: 'POST',
        data: form
      },
      columns: [
        {data: 'firstName', name: 'employeeinfo.firstName'},
        {data: 'middleName', name: 'employeeinfo.middleName'},
        {data: 'lastName', name: 'employeeinfo.lastName'},
        {data: 'createdTime', name: 'empappraisalsetup.createdTime'},

        {

          'data': function (data: any, type: any, full: any) {
            return ' <button class="btn btn-info" data-appraisal-result-id="' + data.id + '">View</button>'
              ;
          },
          'orderable': false, 'searchable': false, 'name': 'selected_rows'
        }
      ],
      processing: true,
      serverSide: true,
      pagingType: 'full_numbers',
      pageLength: 10
    };

  }


  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.renderer.listenGlobal('document', 'click', (event) => {

      if (event.target.hasAttribute('data-appraisal-result-id')) {
        const url = 'appraisal/summery/' + event.target.getAttribute('data-appraisal-result-id');
        // this.router.navigate([])
        //   .then(result => {  window.open(url, '_blank'); });
        this.router.navigate([url]);

      }


    });
  }
}
