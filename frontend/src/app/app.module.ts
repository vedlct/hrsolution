import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablesComponent } from './components/tables/tables.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddEmployeeComponent } from './components/user/add-employee/add-employee.component';
import { AddCompanyComponent } from './components/company/add-company/add-company.component';
import { AddDepartmentComponent } from './components/configuration/department/add-department/add-department.component';
import { AddDesignatonComponent } from './components/configuration/designation/add-designaton/add-designaton.component';
import { PayEmployeeSalarySetupComponent } from './components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component';
import { AddLeaveComponent } from './components/leave/add-leave/add-leave.component';
import { BasicInfoComponent } from './components/user/basic-info/basic-info.component';
import { PersonalInfoComponent } from './components/user/personal-info/personal-info.component';
import { BankInfoComponent } from './components/user/bank-info/bank-info.component';
import { SalaryInfoComponent } from './components/user/salary-info/salary-info.component';
import { JoiningInfoComponent } from './components/user/joining-info/joining-info.component';
import { CompanyInfoComponent } from './components/company/company-info/company-info.component';
import { OtherComponent } from './components/company/other/other.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EducationComponent } from './components/user/education/education.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './components/user/employee/employee.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ShiftComponent } from './components/configuration/shift/shift.component';
import { ShiftAssignComponent } from './components/configuration/shift-assign/shift-assign.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EmergencyContactComponent } from './components/user/emergency-contact/emergency-contact.component';
import { UserDocumentComponent } from './components/user/user-document/user-document.component';
import { LeaveComponent } from './components/configuration/leave/leave.component';
import { ShowLeaveComponent } from './components/configuration/show-leave/show-leave.component';
import { AttendanceComponent } from './components/report/attendance/attendance.component';
import { ShowAttendanceComponent } from './components/report/show-attendance/show-attendance.component';
import { CreateTeamComponent } from './components/team/create-team/create-team.component';
import { AssignTeamComponent } from './components/team/assign-team/assign-team.component';
import { PayHeadComponent } from './components/payroll/pay-head/pay-head.component';
import { PaySalarySheetComponent } from './components/payroll/pay-salary-sheet/pay-salary-sheet.component';
import { PayAdvanceComponent } from './components/payroll/pay-advance/pay-advance.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PayGradeComponent } from './components/payroll/pay-grade/pay-grade.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LeaveTeamComponent } from './components/team/leave-team/leave-team.component';
import { PastEmployeeComponent } from './components/user/past-employee/past-employee.component';
import { CreateLeaveTeamComponent } from './components/team/create-leave-team/create-leave-team.component';
import { GenerateSalaryComponent } from './components/payroll/generate-salary/generate-salary.component';
import { LeaveSummeryComponent } from './components/leave/leave-summery/leave-summery.component';
import { LeaveSummeryShowComponent } from './components/leave/leave-summery-show/leave-summery-show.component';

import { CreateAppraisalHeadComponent } from './components/appraisal/create-appraisal-head/create-appraisal-head.component';
import { CreateAppraisalScaleComponent } from './components/appraisal/create-appraisal-scale/create-appraisal-scale.component';
import { CreateAppraisalTemplateComponent } from './components/appraisal/create-appraisal-template/create-appraisal-template.component';
import { CreateAppraisalConfigurationComponent } from './components/appraisal/create-appraisal-configuration/create-appraisal-configuration.component';
import { CreateAppraisalEmployeeComponent } from './components/appraisal/create-appraisal-employee/create-appraisal-employee.component';
import { AppraisalHeadComponent } from './components/appraisal/appraisal-head/appraisal-head.component';
import { AppraisalExistingHeadsComponent } from './components/appraisal/appraisal-existing-heads/appraisal-existing-heads.component';
import { ShowovertimeComponent } from './components/overtime/showovertime/showovertime.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TablesComponent,
    LoginComponent,
    AddUserComponent,
    AddEmployeeComponent,
    AddCompanyComponent,
    AddDepartmentComponent,
    AddDesignatonComponent,
    PayEmployeeSalarySetupComponent,
    AddLeaveComponent,
    BasicInfoComponent,
    PersonalInfoComponent,
    BankInfoComponent,
    SalaryInfoComponent,
    JoiningInfoComponent,
    CompanyInfoComponent,
    OtherComponent,
    EducationComponent,
    EmployeeComponent,
    ShiftComponent,
    ShiftAssignComponent,
    EmergencyContactComponent,
    UserDocumentComponent,
    LeaveComponent,
    ShowLeaveComponent,
    AttendanceComponent,
    ShowAttendanceComponent,
    CreateTeamComponent,
    AssignTeamComponent,
    PayHeadComponent,
    PaySalarySheetComponent,
    PayAdvanceComponent,
    PayGradeComponent,
    ProfileComponent,
    LeaveTeamComponent,
    PastEmployeeComponent,
    CreateLeaveTeamComponent,
    GenerateSalaryComponent,
    LeaveSummeryComponent,
    LeaveSummeryShowComponent,
    CreateAppraisalHeadComponent,
    CreateAppraisalScaleComponent,
    CreateAppraisalTemplateComponent,
    CreateAppraisalConfigurationComponent,
    CreateAppraisalEmployeeComponent,
    AppraisalHeadComponent,
    AppraisalExistingHeadsComponent,
    ShowovertimeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
