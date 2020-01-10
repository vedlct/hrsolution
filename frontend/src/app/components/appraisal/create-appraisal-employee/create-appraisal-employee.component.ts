import {AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";
import {Router} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-create-appraisal-employee',
  templateUrl: './create-appraisal-employee.component.html',
  styleUrls: ['./create-appraisal-employee.component.css']
})
export class CreateAppraisalEmployeeComponent implements  AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  allEmployees: any;
  allTemplate: any;
  allDept: any;
  dropdownList: any = [];
  selectedItems = [];
  selectedTemplate = [];
  dropdownSettings = {};
  dropdownTemplateSettings = {};
  appraisers: any = [];
  appEmp: any = [];
  appEmpRole: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  configurationModel: any = {};

  constructor(private renderer: Renderer, private http: HttpClient, private token: TokenService, private router: Router) {
  }

  ngOnInit() {
    this.getAllEmp();
    this.getAllDept();
    this.getAllAppraisalTemplate();


    const token = this.token.get();
    this.dtOptions = {
      ajax: {
        url: Constants.API_URL + 'appraisal/EmployeeTemplate/get' + '?token=' + token,
        type: 'POST'
      },
      columns: [
        {data: 'firstName', name: 'employeeinfo.firstName'},
        {data: 'middleName', name: 'employeeinfo.middleName'},
        {data: 'lastName', name: 'employeeinfo.lastName'},
        {data: 'EmployeeId', name: 'employeeinfo.EmployeeId'},
        {data: 'formatName', name: 'appraisalformatmaster.formatName'},
        {data: 'departmentName', name: 'hrmdepartments.departmentName'},
        {
          "data": function (data: any, type: any, full: any) {
            return '<button class="btn btn-info btn-sm" name="crteate-app-emp-btn"  data-appemp-id="' + data.id + '">Edit</button>';
          },
          "orderable": false, "searchable": false, "name": "selected_rows"
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

      if (event.target.hasAttribute("data-appemp-id")) {
        this.router.navigate(["appraisal/assign/employee/edit/" + event.target.getAttribute("data-appemp-id")]);
      }
      // else if (event.target.hasAttribute("data-emp-id2")) {
      //
      //   this.router.navigate([])
      //     .then(result => {
      //       window.open("user/user-cv-view/" + event.target.getAttribute("data-emp-id2", '_blank'))
      //     });
      // }

    });
  }


  getAllEmp() {
    const token = this.token.get();
    this.http.get(Constants.API_URL + 'employee/basicinfo/all' + '?token=' + token).subscribe(data => {
        console.log(data);
        this.allEmployees = data;
        this.dropdownList = data;

        this.dropdownSettings = {
          singleSelection: false,
          idField: 'empid',
          textField: 'ConcatenatedString',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };

      },
      error => {
        console.log(error.error['error']);

      }
    );
  }

  getAllDept() {
    // department/get
    const token = this.token.get();
    this.http.get(Constants.API_URL + 'department/get' + '?token=' + token).subscribe(data => {
        console.log(data);
        this.allDept = data;


      },
      error => {
        console.log(error.error['error']);

      }
    );
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeptChange(val) {
    console.log(val);
  }

  addRole() {
    if (this.appraisers.length > 0) {

      if ($('#selectEmp' + (this.appraisers.length - 1)).val() == '' || $('#role' + (this.appraisers.length - 1)).val() == '') {
        alert('Please Select Previous Fields First');
      } else {
        this.appraisers.push(this.appraisers.length);
        // console.log($('#selectEmp' + (this.appraisers.length-1)).val());
        // console.log(this.appraisers.length);
      }

    } else {

      this.appraisers.push(this.appraisers.length);
      //console.log(this.appraisers.length);

    }


  }

  subRole() {


    this.appraisers.pop();
    this.appEmp.pop();
    this.appEmpRole.pop();

  }

  getAllAppraisalTemplate() {

    const token = this.token.get();

    this.http.get(Constants.API_URL + 'appraisal/show-appraisal-format' + '?token=' + token).subscribe(data => {
        // console.log(data);

        this.allTemplate = data;


        this.dropdownTemplateSettings = {
          singleSelection: true,
          idField: 'id',
          textField: 'formatName',
          // selectAllText: 'Select All',
          // unSelectAllText: 'UnSelect All',
          // itemsShowLimit: 3,
          allowSearchFilter: true
        };

      },
      error => {
        console.log(error.error['error']);

      }
    );

  }

  appraiserEmp(index) {

    let newV = this.appEmp.indexOf($('#selectEmp' + index).val());


    if (newV !== -1) {
      alert("Value exists!");
      // $("#selectEmp"+ index)[0].selectedIndex = 0;
      $('#selectEmp' + index).prop("selectedIndex", 0);

    } else {

      if (this.appEmp.length < index) {
        this.appEmp.push($('#selectEmp' + index).val());
      } else {
        this.appEmp.splice(index, 1);
        this.appEmp.push($('#selectEmp' + index).val());
      }


      // for(var i=0; i < this.allEmployees.length; i++) {
      //
      //   if(this.allEmployees[i]['empid'] == $('#selectEmp' + index).val())
      //   {
      //     this.allEmployees.splice(i, 1);
      //   }
      // }


    }


  }

  appraiserEmpRole(index) {

    if (this.appEmpRole.length < index) {
      this.appEmpRole.push($('#role' + index).val());
    } else {

      this.appEmpRole.splice(index, 1);
      this.appEmpRole.push($('#role' + index).val());

    }
    console.log(this.appEmpRole);


  }

  assignTemplateToEmp() {
    // this.rerender();
    // return false;

    if (this.selectedTemplate.length == 0) {
      alert('please select a Template');
    }
    if (this.selectedItems.length == 0) {
      alert('please select Employee');
    }
    if (this.appraisers.length == 0) {
      alert('please select appraisor with role');
    }
    if (this.appraisers.length > 0 && this.appEmp.length ==
      0) {
      alert('please select appraisor with role');
    }
    if (this.appraisers.length > 0 && this.appEmpRole.length == 0) {
      alert('please select appraisor with role');
    }




    // if (this.configurationModel['appraisalYear'] &&
    //   this.configurationModel['appraisalStart'] &&
    //   this.configurationModel['appraisalEnd'] &&
    //   this.configurationModel['appraisalStatus'])
    // {


      let form = {
        'empList': this.selectedItems,
        'template': this.selectedTemplate,
        'appraisorEmp': this.appEmp,
        'appraisorRole': this.appEmpRole,
        // 'configurationModel': this.configurationModel,
      }



      const token = this.token.get();

      this.http.post(Constants.API_URL + 'appraisal/setEmployeeTemplate' + '?token=' + token, form).subscribe(data => {

          console.log(data);
          console.log('success');
          this.rerender();

        },
        error => {
          console.log(error);

        }
      );

    // }
    // else {
    //   $.alert({
    //     title: 'Alert!',
    //     type: 'Red',
    //     content: "Please Insert All The Field",
    //     buttons: {
    //       tryAgain: {
    //         text: 'Ok',
    //         btnClass: 'btn-red',
    //         action: function () {
    //         }
    //       }
    //     }
    //   });
    //   return false;
    // }


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
