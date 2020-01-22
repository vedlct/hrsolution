import {AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../../services/token.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {Constants} from '../../../constants';
import {DataTableDirective} from 'angular-datatables';
declare var $: any;

@Component({
  selector: 'app-edit-appraisal-year',
  templateUrl: './edit-appraisal-year.component.html',
  styleUrls: ['./edit-appraisal-year.component.css']
})
export class EditAppraisalYearComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  employee: any;
  allEmp: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: any;
  configurationModel: any = {};

  constructor(private renderer: Renderer, public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findConfiguredYear();
  }
  findConfiguredYear() {
    const token = this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL + 'appraisal/findConfiguredYear' + '?token=' + token,
        type: 'POST'
      },
      columns: [

        {data: 'firstName', name: 'employeeinfo.firstName'},
        {data: 'middleName', name: 'employeeinfo.middleName'},
        {data: 'lastName', name: 'employeeinfo.lastName'},
        {data: 'EmployeeId', name: 'employeeinfo.EmployeeId'},
        {data: 'appraisalYear', name: 'appraisalyear.appraisalYear'},
        {
          'data': function (data: any, type: any, full: any) {
           return data.appraisalStart + '<br>' + data.appraisalEnd;
          },
          'orderable': false, 'searchable': false, 'name': 'selected_rows'
        },
        {
          'data': function (data: any, type: any, full: any) {
           if (data.appraisalStatus == 0) {
             return 'Pending';
           }if (data.appraisalStatus == 1) {
             return 'Done';
           }if (data.appraisalStatus == 2) {
             return 'Canceled';
           }
          },
          'orderable': false, 'searchable': false, 'name': 'selected_rows'
        },

        {

          'data': function (data: any, type: any, full: any) {
            return ' <button class="btn btn-info" data-appraisal-year-id="' + data.id + '"> Edit</button>';
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

      if (event.target.hasAttribute('data-appraisal-year-id')) {
       this.getselectedAppraisalYearInfo(event.target.getAttribute('data-appraisal-year-id'));
      }

    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

      dtInstance.destroy();

      this.dtTrigger.next();
    });
  }
  getselectedAppraisalYearInfo(AppraisalYearId) {

    const token = this.token.get();
    this.http.get(Constants.API_URL + 'appraisal/find-appraisal-year-emp/' + AppraisalYearId + '?token=' + token, ).subscribe(data => {

        this.configurationModel = data;

      },

      error => {
        console.log(error);

      }
    );

  }
  onSubmit() {



      const token = this.token.get();
      this.http.post(Constants.API_URL + 'appraisal/update-year-emp' + '?token=' + token, this.configurationModel).subscribe(data => {

          this.configurationModel = {};
          $.alert({
            title: 'Success!',
            type: 'green',
            content: data,
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });
          this.rerender();
        },

        error => {
          console.log(error);
          $.alert({
            title: 'Alert!',
            type: 'Red',
            content: '!Oops Something Went Wrong',
            buttons: {
              tryAgain: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
              }
            }
          });
        }
      );

  }

}
