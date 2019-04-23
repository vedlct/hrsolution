import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

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
import {PaySalarySheetComponent} from "./components/payroll/pay-salary-sheet/pay-salary-sheet.component";
import {PayAdvanceComponent} from "./components/payroll/pay-advance/pay-advance.component";
import {AddLeaveComponent} from "./components/leave/add-leave/add-leave.component";
import { NgxPermissionsGuard } from 'ngx-permissions';
import {PayGradeComponent} from "./components/payroll/pay-grade/pay-grade.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {LeaveTeamComponent} from "./components/team/leave-team/leave-team.component";
import {PastEmployeeComponent} from "./components/user/past-employee/past-employee.component";
import {CreateLeaveTeamComponent} from "./components/team/create-leave-team/create-leave-team.component";
import {GenerateSalaryComponent} from "./components/payroll/generate-salary/generate-salary.component";



export function testPermissions(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.params);
    if (route.params['id'] === 42) {
        return ['MANAGER', "UTILS"]
    } else {
        return 'ADMIN'
    }
}
const routes: Routes = [
    {path: '', component: LoginComponent, canActivate: [GuestService] },
    { path: 'login', component: LoginComponent, canActivate: [GuestService] },
    { path: 'home', component: HomeComponent,canActivate: [AuthService] },
    { path: 'profile', component: ProfileComponent,canActivate: [AuthService] },
    { path: 'datatable', component: TablesComponent },
    { path: 'user/add',component: AddUserComponent,canActivate: [AuthService] },
    { path: 'user/add/:id',component: AddUserComponent,canActivate: [AuthService] },
    { path: 'employee/add', component: AddEmployeeComponent,canActivate: [AuthService] },
    { path: 'employee/edit/:id', component: AddEmployeeComponent,canActivate: [AuthService] },
    { path: 'employee', component: EmployeeComponent,canActivate: [AuthService] },
    { path: 'employee/past', component: PastEmployeeComponent,canActivate: [AuthService] },
    { path: 'company/add', component: CompanyInfoComponent,canActivate: [AuthService] },
    { path: 'configuration/shift', component: ShiftComponent,canActivate: [AuthService] },
    { path: 'configuration/shift/assign', component: ShiftAssignComponent,canActivate: [AuthService] },
    { path: 'configuration/department/add', component: AddDepartmentComponent,canActivate: [AuthService]  },
    { path: 'configuration/leave', component: LeaveComponent,canActivate: [AuthService]  },
    { path: 'configuration/leave/show', component: ShowLeaveComponent,canActivate: [AuthService]  },
    { path: 'leave/apply', component: AddLeaveComponent ,canActivate: [AuthService] },
    { path: 'leave/team',
        component: LeaveTeamComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
    { path: 'leave/team/add',
        component: CreateLeaveTeamComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
    { path: 'report/attendance', component: AttendanceComponent,canActivate: [AuthService]  },
    // { path: 'report/attendance/:id', component: ShowAttendanceComponent },
    { path: 'report/attendance/:id/:fromdate/:todate', component: ShowAttendanceComponent },
    { path: 'team/show', component: CreateTeamComponent },
    { path: 'team/assign', component: AssignTeamComponent },
    { path: 'payroll/setup', component: PayEmployeeSalarySetupComponent },
    { path: 'payroll/payhead', component: PayHeadComponent },
    { path: 'payroll/salary-sheet', component: PaySalarySheetComponent },
    { path: 'payroll/pay-advance',
        component: PayAdvanceComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
    { path: 'payroll/pay-grade',
        component: PayGradeComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },

    { path: 'payroll/salary/setup',
        component: PayEmployeeSalarySetupComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
    { path: 'payroll/salary/generate',
        component: GenerateSalaryComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
];



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // CanDeactivateGuard
    ]
})


export class AppRoutingModule {


}