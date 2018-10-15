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
    ShiftComponent
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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
