import {AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";
import {Router} from "@angular/router";

import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $ :any;

@Component({
  selector: 'app-edit-appraisal-employee',
  templateUrl: './edit-appraisal-employee.component.html',
  styleUrls: ['./edit-appraisal-employee.component.css']
})
export class EditAppraisalEmployeeComponent implements OnInit {
  id: any;
  headData:any;
  setup: any;
  appraisors: any;
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
  userForm: FormGroup;

  constructor(private fb: FormBuilder,public route: ActivatedRoute, private renderer: Renderer, private http: HttpClient, private token: TokenService, private router: Router) {
  }


  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;

    this.getAllEmp();
    this.getAllDept();
    this.getAllAppraisalTemplate();
    let temp=[{appraisor:"",fk_appraisalRole:"",fk_empAppraisalSetup:"",id:""}];
    this.headData=temp;




  }

  getAppraisalSetup() {
    const token = this.token.get();
    this.http.get(Constants.API_URL + 'appraisal/EmployeeTemplate/edit/' + this.id + '?token=' + token).subscribe(data => {

        this.setup = data['setup'];
        this.appraisors = data['appraisors'];
        this.headData = data['appraisors'];
        console.log(this.headData );


        for (let item of this.allEmployees) {
          if (item.empid == this.setup.appraisalfor) {
            this.selectedItems = [{empid: item.empid, ConcatenatedString: item.ConcatenatedString}];
            break;
          }
        }

        for (let item of this.allTemplate) {

          if (item.id == this.setup.fk_AppraisalFormatMaster) {
            this.selectedTemplate = [{id: item.id, formatName: item.formatName}];
            // console.log(this.selectedTemplate );
            break;
          }
        }


      },
      error => {
        console.log(error.error['error']);

      }
    );

  }
  setData(appraisers,index) {

    this.userForm = this.fb.group({
      technologies: [appraisers[index]['appraisor']]
    });


  }


  getAllEmp() {
    const token = this.token.get();
    this.http.get(Constants.API_URL + 'employee/basicinfo/all' + '?token=' + token).subscribe(data => {
        // console.log(data);
        this.getAppraisalSetup();
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
        // console.log(data);
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

      // this.appraisers.push(1); fk_empAppraisalSetup
    this.headData.push({appraisor:"",fk_appraisalRole:"",fk_empAppraisalSetup:this.headData[0].fk_empAppraisalSetup,id:""});


  }

  subRole() {

    this.headData.pop();

    // this.appraisers.pop();
    // this.appEmp.pop();
    // this.appEmpRole.pop();

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


    if (this.selectedTemplate.length == 0) {
      alert('please select a Template');
    }
    if (this.selectedItems.length == 0) {
      alert('please select Employee');
    }


    let form = {
      'empList': this.selectedItems,
      'template': this.selectedTemplate,
      'appraisorEmp': this.headData,
    }
    console.log(form);
    // return false;
    //
    // const token = this.token.get();
    //
    // this.http.post(Constants.API_URL + 'appraisal/setEmployeeTemplate' + '?token=' + token, form).subscribe(data => {
    //
    //     // console.log(data);
    //
    //   },
    //   error => {
    //     console.log(error);
    //
    //   }
    // );


  }


}
