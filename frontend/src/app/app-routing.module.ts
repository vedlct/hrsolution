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
import {ShiftAssignComponent} from "./components/configuration/shift-assign/shift-assign.component";
import {LeaveComponent} from "./components/configuration/leave/leave.component";
import {ShowLeaveComponent} from "./components/configuration/show-leave/show-leave.component";
import {AttendanceComponent} from "./components/report/attendance/attendance.component";
import {ShowAttendanceComponent} from "./components/report/show-attendance/show-attendance.component";
import {CreateTeamComponent} from "./components/team/create-team/create-team.component";
import {AssignTeamComponent} from "./components/team/assign-team/assign-team.component";
import {PayEmployeeSalarySetupComponent} from "./components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component";
import {PayHeadComponent} from "./components/payroll/pay-head/pay-head.component";

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
    { path: 'configuration/shift/assign', component: ShiftAssignComponent,canActivate: [AuthService] },
    { path: 'configuration/department/add', component: AddDepartmentComponent },
    { path: 'configuration/leave', component: LeaveComponent },
    { path: 'configuration/leave/show', component: ShowLeaveComponent },
    { path: 'report/attendance', component: AttendanceComponent },
    // { path: 'report/attendance/:id', component: ShowAttendanceComponent },
    { path: 'report/attendance/:id/:fromdate/:todate', component: ShowAttendanceComponent },
    { path: 'team/show', component: CreateTeamComponent },
    { path: 'team/assign', component: AssignTeamComponent },
    { path: 'payroll/setup', component: PayEmployeeSalarySetupComponent },
    { path: 'payroll/payhead', component: PayHeadComponent },

];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule {


}