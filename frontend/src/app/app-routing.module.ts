import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TablesComponent} from "./components/tables/tables.component";
import {LoginComponent} from "./components/login/login.component";
import {AddUserComponent} from "./components/user/add-user/add-user.component";
import {AddEmployeeComponent} from "./components/user/add-employee/add-employee.component";
import {AddDepartmentComponent} from "./components/configuration/department/add-department/add-department.component";
import {GuestService} from "./services/guest.service";
import {AuthService} from "./services/auth.service";
import {CompanyInfoComponent} from "./components/company/company-info/company-info.component";
import {EmployeeComponent} from "./components/user/employee/employee.component";
import {ShiftComponent} from "./components/configuration/shift/shift.component";

const routes: Routes = [
    {path: '', component: LoginComponent, canActivate: [GuestService] },
    { path: 'login', component: LoginComponent, canActivate: [GuestService] },
    { path: 'home', component: HomeComponent,canActivate: [AuthService] },
    { path: 'datatable', component: TablesComponent },
    { path: 'user/add',component: AddUserComponent,canActivate: [AuthService] },
    { path: 'user/add/:id',component: AddUserComponent,canActivate: [AuthService] },
    { path: 'employee/add', component: AddEmployeeComponent,canActivate: [AuthService] },
    { path: 'employee/edit/:id', component: AddEmployeeComponent,canActivate: [AuthService] },
    { path: 'employee', component: EmployeeComponent,canActivate: [AuthService] },
    { path: 'company/add', component: CompanyInfoComponent,canActivate: [AuthService] },
    { path: 'configuration/shift', component: ShiftComponent,canActivate: [AuthService] },
    { path: 'configuration/department/add', component: AddDepartmentComponent },

];
@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule {


}