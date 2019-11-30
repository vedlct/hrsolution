import {AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs";
import {Constants} from "../../../constants";
import {DataTableDirective} from "angular-datatables";

declare var $: any;

@Component({
  selector: 'app-create-appraisal-configuration',
  templateUrl: './create-appraisal-configuration.component.html',
  styleUrls: ['./create-appraisal-configuration.component.css']
})
export class CreateAppraisalConfigurationComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  employee: any;
  allEmp: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  id: any;
  configurationModel: any = {};

  constructor(private renderer: Renderer, public http: HttpClient, private token: TokenService, public route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    const token = this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL + 'employee/get' + '?token=' + token,
        type: 'POST'
      },
      columns: [
        {
          "data": function (data: any, type: any, full: any) {
            return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="' + data.empid + '" data-panel-id="' + data.empid + '">';
          },
          "orderable": false, "searchable": false, "name": "selected_rows"
        },
        {data: 'firstName', name: 'employeeinfo.firstName'},
        {data: 'middleName', name: 'employeeinfo.middleName'},
        {data: 'lastName', name: 'employeeinfo.lastName'},
        {data: 'EmployeeId', name: 'employeeinfo.EmployeeId'},
        {data: 'title', name: 'hrmdesignations.title'},
        {data: 'departmentName', name: 'hrmdepartments.departmentName'}
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

      if (event.target.hasAttribute("data-emp-id")) {
        this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
      } else if (event.target.hasAttribute("data-emp-id2")) {

        this.router.navigate([])
          .then(result => {
            window.open("user/user-cv-view/" + event.target.getAttribute("data-emp-id2", '_blank'))
          });
      }

    });
  }


  selectAll() {
    if ($('#selectall2').is(":checked")) {

      let checkboxes = document.getElementsByName('selected_rows[]');

      $('input:checkbox').prop('checked', true);


    } else {

      $(':checkbox:checked').prop('checked', false);
    }

  }

  onSubmit() {
    this.allEmp = [];
    let that = this;
    $(".chk:checked").each(function () {
      that.allEmp.push($(this).val());
    });

    if (this.allEmp.length == 0) {
      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please Select Employee",
        buttons: {
          tryAgain: {
            text: 'Ok',
            btnClass: 'btn-red',
            action: function () {
            }
          }
        }
      });

      return false;
    }


    if (this.configurationModel['appraisalYear'] &&
      this.configurationModel['appraisalStart'] &&
      this.configurationModel['appraisalEnd'] &&
      this.configurationModel['appraisalStatus']) {
      this.configurationModel.allEmp = this.allEmp;
      const token = this.token.get();
      this.http.post(Constants.API_URL + 'appraisal/assign-year-emp' + '?token=' + token, this.configurationModel, this.allEmp).subscribe(data => {
          // console.log(this.configurationModel);
          // console.log(this.allEmp);
          this.allEmp = [];
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

    } else {
      $.alert({
        title: 'Alert!',
        type: 'Red',
        content: "Please Insert All The Field",
        buttons: {
          tryAgain: {
            text: 'Ok',
            btnClass: 'btn-red',
            action: function () {
            }
          }
        }
      });
      return false;
    }
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
}
