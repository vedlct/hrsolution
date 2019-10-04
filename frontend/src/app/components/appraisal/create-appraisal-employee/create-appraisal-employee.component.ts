import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../../services/token.service";
import {Constants} from "../../../constants";
import {IDropdownSettings} from "ng-multiselect-dropdown/multiselect.model";

@Component({
  selector: 'app-create-appraisal-employee',
  templateUrl: './create-appraisal-employee.component.html',
  styleUrls: ['./create-appraisal-employee.component.css']
})
export class CreateAppraisalEmployeeComponent implements OnInit {
    allEmployees:any;
    dropdownList :any= [];
    selectedItems = [];
    dropdownSettings = {};
  constructor(private http:HttpClient,private token:TokenService) { }

  ngOnInit() {


      const token=this.token.get();
      this.http.get(Constants.API_URL+'employee/basicinfo/all'+'?token='+token).subscribe(data => {
               console.log(data);
               this.allEmployees=data;
              this.dropdownList=data;

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


    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }

}
