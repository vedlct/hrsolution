import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TablesComponent} from "./components/tables/tables.component";
import {LoginComponent} from "./components/login/login.component";
import {AddUserComponent} from "./components/user/add-user/add-user.component";
import {AddEmployeeComponent} from "./components/user/add-employee/add-employee.component";
import {AddCompanyComponent} from "./components/company/add-company/add-company.component";
import {AddDepartmentComponent} from "./components/configuration/department/add-department/add-department.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'datatable', component: TablesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: 'employee/add', component: AddEmployeeComponent },
  { path: 'company/add', component: AddCompanyComponent },
  { path: 'configuration/department/add', component: AddDepartmentComponent },

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule {


}
