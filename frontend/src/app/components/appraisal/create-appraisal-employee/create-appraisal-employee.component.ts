import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';

@Component({
    selector: 'app-create-appraisal-employee',
    templateUrl: './create-appraisal-employee.component.html',
    styleUrls: ['./create-appraisal-employee.component.css']
})
export class CreateAppraisalEmployeeComponent implements OnInit {
    allEmployees: any;
    allTemplate: any;
    allDept: any;
    dropdownList: any = [];
    selectedItems = [];
    selectedTemplate = [];
    dropdownSettings = {};
    dropdownTemplateSettings = {};
    appraisers:any=[];
    appEmp: any = [];
    appEmpRole: any = [];

    constructor(private http: HttpClient, private token: TokenService) {
    }

    ngOnInit() {
        this.getAllEmp();
        this.getAllDept();
        this.getAllAppraisalTemplate();


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

    getAllDept(){
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

    onDeptChange(val){
        console.log(val);
    }

    addRole()
    {
      if (this.appraisers.length > 0 ){

        if ($('#selectEmp' + (this.appraisers.length-1)).val() == '' || $('#role' + (this.appraisers.length-1)).val() == '')
        {
          alert('Please Select Previous Fields First');
        }else {
          this.appraisers.push(this.appraisers.length);
         // console.log($('#selectEmp' + (this.appraisers.length-1)).val());
         // console.log(this.appraisers.length);
        }

      }else {

          this.appraisers.push(this.appraisers.length);
          //console.log(this.appraisers.length);

      }



    }

    subRole()
    {


        this.appraisers.pop();
        this.appEmp.pop();
        this.appEmpRole.pop();

    }
  getAllAppraisalTemplate()
  {

    const token = this.token.get();

    this.http.get(Constants.API_URL + 'appraisal/show-appraisal-format' + '?token=' + token).subscribe(data => {
       // console.log(data);

      this.allTemplate=data;


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
  appraiserEmp(index)
  {

    let newV = this.appEmp.indexOf($('#selectEmp' + index).val());


    if(newV !== -1)
    {
      alert("Value exists!");
      // $("#selectEmp"+ index)[0].selectedIndex = 0;
      $('#selectEmp' + index).prop("selectedIndex", 0);

    }else
    {

      if (this.appEmp.length < index)
      {
        this.appEmp.push($('#selectEmp' + index).val());
      }else {
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
  appraiserEmpRole(index){

    if (this.appEmpRole.length < index ){
      this.appEmpRole.push($('#role' + index).val());
    }else {

      this.appEmpRole.splice(index, 1);
      this.appEmpRole.push($('#role' + index).val());

    }
    console.log(this.appEmpRole);


  }
  assignTemplateToEmp(){

      if (this.selectedTemplate.length==0){
        alert('please select a Template');
      }
      if (this.selectedItems.length ==0){
        alert('please select Employee');
      }
      if (this.appraisers.length ==0){
        alert('please select appraisor with role');
      }
      if (this.appraisers.length >0 && this.appEmp.length ==
        0 ){
        alert('please select appraisor with role');
      }
      if (this.appraisers.length >0 && this.appEmpRole.length == 0 ){
        alert('please select appraisor with role');
      }

      let form={
        'empList':this.selectedItems,
        'template':this.selectedTemplate,
        'appraisorEmp':this.appEmp,
        'appraisorRole':this.appEmpRole,
      }

    const token = this.token.get();

    this.http.post(Constants.API_URL + 'appraisal/setEmployeeTemplate' + '?token=' + token , form).subscribe(data => {

      console.log(data);

      },
      error => {
        console.log(error.error['error']);

      }
    );







  }
}
