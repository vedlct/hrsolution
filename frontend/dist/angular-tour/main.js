(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/add-user/add-user.component */ "./src/app/components/user/add-user/add-user.component.ts");
/* harmony import */ var _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/add-employee/add-employee.component */ "./src/app/components/user/add-employee/add-employee.component.ts");
/* harmony import */ var _components_configuration_department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/configuration/department/add-department/add-department.component */ "./src/app/components/configuration/department/add-department/add-department.component.ts");
/* harmony import */ var _services_guest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/guest.service */ "./src/app/services/guest.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/company/company-info/company-info.component */ "./src/app/components/company/company-info/company-info.component.ts");
/* harmony import */ var _components_user_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/employee/employee.component */ "./src/app/components/user/employee/employee.component.ts");
/* harmony import */ var _components_configuration_shift_shift_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/configuration/shift/shift.component */ "./src/app/components/configuration/shift/shift.component.ts");
/* harmony import */ var _components_configuration_shift_assign_shift_assign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/configuration/shift-assign/shift-assign.component */ "./src/app/components/configuration/shift-assign/shift-assign.component.ts");
/* harmony import */ var _components_configuration_leave_leave_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/configuration/leave/leave.component */ "./src/app/components/configuration/leave/leave.component.ts");
/* harmony import */ var _components_configuration_show_leave_show_leave_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/configuration/show-leave/show-leave.component */ "./src/app/components/configuration/show-leave/show-leave.component.ts");
/* harmony import */ var _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/report/attendance/attendance.component */ "./src/app/components/report/attendance/attendance.component.ts");
/* harmony import */ var _components_report_show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/report/show-attendance/show-attendance.component */ "./src/app/components/report/show-attendance/show-attendance.component.ts");
/* harmony import */ var _components_team_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/team/create-team/create-team.component */ "./src/app/components/team/create-team/create-team.component.ts");
/* harmony import */ var _components_team_assign_team_assign_team_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/team/assign-team/assign-team.component */ "./src/app/components/team/assign-team/assign-team.component.ts");
/* harmony import */ var _components_payroll_pay_employee_salary_setup_pay_employee_salary_setup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component */ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.ts");
/* harmony import */ var _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/payroll/pay-head/pay-head.component */ "./src/app/components/payroll/pay-head/pay-head.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_services_guest_service__WEBPACK_IMPORTED_MODULE_8__["GuestService"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_services_guest_service__WEBPACK_IMPORTED_MODULE_8__["GuestService"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'datatable', component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"] },
    { path: 'user/add', component: _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'user/add/:id', component: _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'employee/add', component: _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'employee/edit/:id', component: _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'employee', component: _components_user_employee_employee_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'company/add', component: _components_company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_10__["CompanyInfoComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'configuration/shift', component: _components_configuration_shift_shift_component__WEBPACK_IMPORTED_MODULE_12__["ShiftComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'configuration/shift/assign', component: _components_configuration_shift_assign_shift_assign_component__WEBPACK_IMPORTED_MODULE_13__["ShiftAssignComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]] },
    { path: 'configuration/department/add', component: _components_configuration_department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_7__["AddDepartmentComponent"] },
    { path: 'configuration/leave', component: _components_configuration_leave_leave_component__WEBPACK_IMPORTED_MODULE_14__["LeaveComponent"] },
    { path: 'configuration/leave/show', component: _components_configuration_show_leave_show_leave_component__WEBPACK_IMPORTED_MODULE_15__["ShowLeaveComponent"] },
    { path: 'report/attendance', component: _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_16__["AttendanceComponent"] },
    // { path: 'report/attendance/:id', component: ShowAttendanceComponent },
    { path: 'report/attendance/:id/:fromdate/:todate', component: _components_report_show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_17__["ShowAttendanceComponent"] },
    { path: 'team/show', component: _components_team_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_18__["CreateTeamComponent"] },
    { path: 'team/assign', component: _components_team_assign_team_assign_team_component__WEBPACK_IMPORTED_MODULE_19__["AssignTeamComponent"] },
    { path: 'payroll/setup', component: _components_payroll_pay_employee_salary_setup_pay_employee_salary_setup_component__WEBPACK_IMPORTED_MODULE_20__["PayEmployeeSalarySetupComponent"] },
    { path: 'payroll/payhead', component: _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_21__["PayHeadComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar *ngIf=\"isLogIn()\"></app-navbar>\n\n<ngx-spinner></ngx-spinner>\n<div class=\"wrapper\">\n  <div class=\"col-md-4\">\n    <!-- <app-add-department [master]=\"master\"></app-add-department> -->\n    <!-- <app-add-designaton></app-add-designaton> -->\n    <!--<app-pay-employee-salary-setup></app-pay-employee-salary-setup>-->\n    <!--<app-add-leave></app-add-leave>-->\n  </div>\n\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(token) {
        this.token = token;
        this.title = 'app';
        this.master = 'Master';
        this.token.isValid();
    }
    AppComponent.prototype.isLogIn = function () {
        return this.token.isValid();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/add-user/add-user.component */ "./src/app/components/user/add-user/add-user.component.ts");
/* harmony import */ var _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/add-employee/add-employee.component */ "./src/app/components/user/add-employee/add-employee.component.ts");
/* harmony import */ var _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/company/add-company/add-company.component */ "./src/app/components/company/add-company/add-company.component.ts");
/* harmony import */ var _components_configuration_department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/configuration/department/add-department/add-department.component */ "./src/app/components/configuration/department/add-department/add-department.component.ts");
/* harmony import */ var _components_configuration_designation_add_designaton_add_designaton_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/configuration/designation/add-designaton/add-designaton.component */ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.ts");
/* harmony import */ var _components_payroll_pay_employee_salary_setup_pay_employee_salary_setup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component */ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.ts");
/* harmony import */ var _components_leave_add_leave_add_leave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/leave/add-leave/add-leave.component */ "./src/app/components/leave/add-leave/add-leave.component.ts");
/* harmony import */ var _components_user_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/basic-info/basic-info.component */ "./src/app/components/user/basic-info/basic-info.component.ts");
/* harmony import */ var _components_user_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/personal-info/personal-info.component */ "./src/app/components/user/personal-info/personal-info.component.ts");
/* harmony import */ var _components_user_bank_info_bank_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user/bank-info/bank-info.component */ "./src/app/components/user/bank-info/bank-info.component.ts");
/* harmony import */ var _components_user_salary_info_salary_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user/salary-info/salary-info.component */ "./src/app/components/user/salary-info/salary-info.component.ts");
/* harmony import */ var _components_user_joining_info_joining_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/user/joining-info/joining-info.component */ "./src/app/components/user/joining-info/joining-info.component.ts");
/* harmony import */ var _components_company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/company/company-info/company-info.component */ "./src/app/components/company/company-info/company-info.component.ts");
/* harmony import */ var _components_company_other_other_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/company/other/other.component */ "./src/app/components/company/other/other.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_user_education_education_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user/education/education.component */ "./src/app/components/user/education/education.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_user_employee_employee_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user/employee/employee.component */ "./src/app/components/user/employee/employee.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _components_configuration_shift_shift_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/configuration/shift/shift.component */ "./src/app/components/configuration/shift/shift.component.ts");
/* harmony import */ var _components_configuration_shift_assign_shift_assign_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/configuration/shift-assign/shift-assign.component */ "./src/app/components/configuration/shift-assign/shift-assign.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _components_user_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/user/emergency-contact/emergency-contact.component */ "./src/app/components/user/emergency-contact/emergency-contact.component.ts");
/* harmony import */ var _components_user_user_document_user_document_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/user/user-document/user-document.component */ "./src/app/components/user/user-document/user-document.component.ts");
/* harmony import */ var _components_configuration_leave_leave_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/configuration/leave/leave.component */ "./src/app/components/configuration/leave/leave.component.ts");
/* harmony import */ var _components_configuration_show_leave_show_leave_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/configuration/show-leave/show-leave.component */ "./src/app/components/configuration/show-leave/show-leave.component.ts");
/* harmony import */ var _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/report/attendance/attendance.component */ "./src/app/components/report/attendance/attendance.component.ts");
/* harmony import */ var _components_report_show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/report/show-attendance/show-attendance.component */ "./src/app/components/report/show-attendance/show-attendance.component.ts");
/* harmony import */ var _components_team_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/team/create-team/create-team.component */ "./src/app/components/team/create-team/create-team.component.ts");
/* harmony import */ var _components_team_assign_team_assign_team_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/team/assign-team/assign-team.component */ "./src/app/components/team/assign-team/assign-team.component.ts");
/* harmony import */ var _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/payroll/pay-head/pay-head.component */ "./src/app/components/payroll/pay-head/pay-head.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__["AddUserComponent"],
                _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_12__["AddEmployeeComponent"],
                _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_13__["AddCompanyComponent"],
                _components_configuration_department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_14__["AddDepartmentComponent"],
                _components_configuration_designation_add_designaton_add_designaton_component__WEBPACK_IMPORTED_MODULE_15__["AddDesignatonComponent"],
                _components_payroll_pay_employee_salary_setup_pay_employee_salary_setup_component__WEBPACK_IMPORTED_MODULE_16__["PayEmployeeSalarySetupComponent"],
                _components_leave_add_leave_add_leave_component__WEBPACK_IMPORTED_MODULE_17__["AddLeaveComponent"],
                _components_user_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_18__["BasicInfoComponent"],
                _components_user_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__["PersonalInfoComponent"],
                _components_user_bank_info_bank_info_component__WEBPACK_IMPORTED_MODULE_20__["BankInfoComponent"],
                _components_user_salary_info_salary_info_component__WEBPACK_IMPORTED_MODULE_21__["SalaryInfoComponent"],
                _components_user_joining_info_joining_info_component__WEBPACK_IMPORTED_MODULE_22__["JoiningInfoComponent"],
                _components_company_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_23__["CompanyInfoComponent"],
                _components_company_other_other_component__WEBPACK_IMPORTED_MODULE_24__["OtherComponent"],
                _components_user_education_education_component__WEBPACK_IMPORTED_MODULE_26__["EducationComponent"],
                _components_user_employee_employee_component__WEBPACK_IMPORTED_MODULE_28__["EmployeeComponent"],
                _components_configuration_shift_shift_component__WEBPACK_IMPORTED_MODULE_30__["ShiftComponent"],
                _components_configuration_shift_assign_shift_assign_component__WEBPACK_IMPORTED_MODULE_31__["ShiftAssignComponent"],
                _components_user_emergency_contact_emergency_contact_component__WEBPACK_IMPORTED_MODULE_33__["EmergencyContactComponent"],
                _components_user_user_document_user_document_component__WEBPACK_IMPORTED_MODULE_34__["UserDocumentComponent"],
                _components_configuration_leave_leave_component__WEBPACK_IMPORTED_MODULE_35__["LeaveComponent"],
                _components_configuration_show_leave_show_leave_component__WEBPACK_IMPORTED_MODULE_36__["ShowLeaveComponent"],
                _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_37__["AttendanceComponent"],
                _components_report_show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_38__["ShowAttendanceComponent"],
                _components_team_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_39__["CreateTeamComponent"],
                _components_team_assign_team_assign_team_component__WEBPACK_IMPORTED_MODULE_40__["AssignTeamComponent"],
                _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_41__["PayHeadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_25__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_29__["BsDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_32__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/company/add-company/add-company.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/company/add-company/add-company.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company/add-company/add-company.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/company/add-company/add-company.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header-pills\">  <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Company</h3></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>Company Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"companyName\" [(ngModel)]=\"companyInfo.companyName\" placeholder=\"name\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Company Address</label>\n          <textarea class=\"form-control\" name=\"companyAddress\" [(ngModel)]=\"companyInfo.companyAddress\" placeholder=\"address\"></textarea>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"companyInfo.phone\" placeholder=\"+8801.....\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Fax</label>\n          <input type=\"text\" class=\"form-control\" name=\"fax\" [(ngModel)]=\"companyInfo.fax\" placeholder=\"fax\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"companyInfo.email\" placeholder=\"abc@abc.com\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>WebSite</label>\n          <input type=\"text\" class=\"form-control\" name=\"webSite\" [(ngModel)]=\"companyInfo.webSite\" placeholder=\"www\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Logo</label>\n          <input type=\"file\" class=\"form-control\"  name=\"logo\" (change)=\"onFileSelected($event)\" multiple>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Logo Url</label>\n          <input type=\"text\" class=\"form-control\" name=\"logoUrl\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Status</label>\n          <select class=\"form-control\" name=\"fkActivationStatus\">\n            <option>Active</option>\n            <option>Inactive</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-6\" style=\"margin-top: 30px\">\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\n        </div>\n\n\n\n\n      </div>\n\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/company/add-company/add-company.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/company/add-company/add-company.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(http, spinner, token) {
        this.http = http;
        this.spinner = spinner;
        this.token = token;
        this.companyInfo = {};
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        //Getting Company Info
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'company/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            if (data != null) {
                _this.companyInfo = data;
            }
            _this.spinner.hide();
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    AddCompanyComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files;
        // console.log(this.selectedFile);
    };
    AddCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        var value = this.companyInfo;
        var fd = new FormData();
        for (var key in value) {
            fd.append(key, value[key]);
        }
        if (this.selectedFile) {
            var i;
            for (i = 0; i < this.selectedFile.length; i++) {
                fd.append('image[]', this.selectedFile[i], this.selectedFile[i].name);
            }
        }
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'company/post/updateInfo' + '?token=' + token, fd).subscribe(function (data) {
            console.log(data);
            _this.spinner.hide();
        }, function (error) {
            console.log(error.message);
            _this.spinner.hide();
        });
    };
    AddCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! ./add-company.component.html */ "./src/app/components/company/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/company/add-company/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company-info/company-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/company/company-info/company-info.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company/company-info/company-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/company/company-info/company-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-md-2\">\n\n      <ul class=\"list-group \">\n        <li class=\"list-group-item\" ><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(1)\">Company Info </button></li>\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(2)\">Designation Info</button> </li>\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(3)\">Department Info</button> </li>\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(4)\">Other</button> </li>\n      </ul>\n    </div>\n\n    <div class=\"col-md-10\">\n      <app-add-company *ngIf=\"infoFlag ==1\"></app-add-company>\n      <app-add-designaton *ngIf=\"infoFlag ==2\"></app-add-designaton>\n      <app-add-department [master]=\"master\" *ngIf=\"infoFlag ==3\"></app-add-department>\n      <app-company-other *ngIf=\"infoFlag ==4\"></app-company-other>\n    </div>\n\n\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/company/company-info/company-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/company/company-info/company-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfoComponent", function() { return CompanyInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyInfoComponent = /** @class */ (function () {
    function CompanyInfoComponent(route) {
        this.route = route;
        this.infoFlag = 1;
        this.master = 'Master';
    }
    CompanyInfoComponent.prototype.ngOnInit = function () {
    };
    CompanyInfoComponent.prototype.onInfoClick = function (value) {
        this.infoFlag = value;
    };
    CompanyInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-info',
            template: __webpack_require__(/*! ./company-info.component.html */ "./src/app/components/company/company-info/company-info.component.html"),
            styles: [__webpack_require__(/*! ./company-info.component.css */ "./src/app/components/company/company-info/company-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CompanyInfoComponent);
    return CompanyInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/company/other/other.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/company/other/other.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/company/other/other.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/company/other/other.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-4\">\n  <div class=\"card\">\n    <div class=\"card-header-pills\">\n      <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Country</h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"form-group\">\n\n        <label>Country Name</label>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/company/other/other.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/company/other/other.component.ts ***!
  \*************************************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherComponent = /** @class */ (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-other',
            template: __webpack_require__(/*! ./other.component.html */ "./src/app/components/company/other/other.component.html"),
            styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/components/company/other/other.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherComponent);
    return OtherComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/department/add-department/add-department.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/configuration/department/add-department/add-department.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/configuration/department/add-department/add-department.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/configuration/department/add-department/add-department.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container\">\n  <div class=\"card-header-pills\">\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Department</h3>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Department Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"dept name\" name=\"departmentName\" [(ngModel)]=\"departmentField.departmentName\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Department Level</label>\n        <input type=\"number\" class=\"form-control\" placeholder=\"level\" name=\"deptLevel\">\n      </div>\n\n      <div class=\"form-group col-md-2\" *ngIf=\"checkId();else other_content\">\n        <button class=\"btn btn-success\" (click)=\"onSubmit()\">Insert</button>\n      </div>\n\n      <ng-template #other_content>\n        <div class=\"form-group col-md-2\">\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Update</button>\n        </div>\n      </ng-template>\n      <div class=\"form-group col-md-2\">\n        <button class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\n      </div>\n\n    </div>\n\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Department Name</th>\n        <th>Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let dept of departments\">\n        <td>{{dept.departmentName}}</td>\n        <td>\n          <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\n          <button class=\"btn btn-danger\" (click)=\"editDept(dept)\" style=\"margin-left: 20px;\"> Edit</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/configuration/department/add-department/add-department.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/configuration/department/add-department/add-department.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddDepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepartmentComponent", function() { return AddDepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDepartmentComponent = /** @class */ (function () {
    function AddDepartmentComponent(http, token) {
        this.http = http;
        this.token = token;
        this.departmentField = {};
    }
    AddDepartmentComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    AddDepartmentComponent.prototype.getDepartments = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'company/get/department' + '?token=' + token).subscribe(function (data) {
            _this.departments = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddDepartmentComponent.prototype.editDept = function (dept) {
        // console.log(dept);
        this.departmentField = dept;
    };
    AddDepartmentComponent.prototype.checkId = function () {
        if (Object.keys(this.departmentField).length === 0) {
            return true;
        }
        else {
            if (this.departmentField.id == null) {
                return true;
            }
            return false;
        }
    };
    AddDepartmentComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.departmentField);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'department/post' + '?token=' + token, this.departmentField).subscribe(function (data) {
            console.log(data);
            _this.getDepartments();
        }, function (error) {
            console.log(error);
        });
    };
    AddDepartmentComponent.prototype.reset = function () {
        this.departmentField = {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('master'),
        __metadata("design:type", Object)
    ], AddDepartmentComponent.prototype, "data", void 0);
    AddDepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-department',
            template: __webpack_require__(/*! ./add-department.component.html */ "./src/app/components/configuration/department/add-department/add-department.component.html"),
            styles: [__webpack_require__(/*! ./add-department.component.css */ "./src/app/components/configuration/department/add-department/add-department.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AddDepartmentComponent);
    return AddDepartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/configuration/designation/add-designaton/add-designaton.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/configuration/designation/add-designaton/add-designaton.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header-pills\"> <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Designation</h3></div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"designationForm.title\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Short Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"shortName\" [(ngModel)]=\"designationForm.shortName\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Salary Grade</label>\n        <input type=\"text\" class=\"form-control\" name=\"salaryGrade\" [(ngModel)]=\"designationForm.salaryGrade\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>desigLevel</label>\n        <!--<select name=\"desigLevel\" class=\"form-control\">-->\n          <!--<option>level 1</option>-->\n          <!--<option>level 2</option>-->\n          <!--<option>level 3</option>-->\n        <!--</select>-->\n        <input type=\"number\" class=\"form-control\" name=\"desigLevel\" [(ngModel)]=\"designationForm.desigLevel\">\n\n      </div>\n\n      <div class=\"form-group col-md-2\" *ngIf=\"checkId();else other_content\">\n        <button class=\"btn btn-success\" (click)=\"onSubmit()\">Insert</button>\n      </div>\n\n      <ng-template #other_content>\n        <div class=\"form-group col-md-2\">\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Update</button>\n        </div>\n      </ng-template>\n      <div class=\"form-group col-md-2\">\n        <button class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\n      </div>\n\n\n\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Designation Name</th>\n          <th>shortName</th>\n          <th>salaryGrade</th>\n          <th>desigLevel</th>\n          <th>Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let desig of designation\">\n          <td>{{desig.title}}</td>\n          <td>{{desig.shortName}}</td>\n          <td>{{desig.salaryGrade}}</td>\n          <td>{{desig.desigLevel}}</td>\n          <td>\n            <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\n            <button class=\"btn btn-danger\" style=\"margin-left: 20px;\" (click)=\"editDsig(desig)\">Edit</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n\n\n\n\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/configuration/designation/add-designaton/add-designaton.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddDesignatonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDesignatonComponent", function() { return AddDesignatonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDesignatonComponent = /** @class */ (function () {
    function AddDesignatonComponent(http, token) {
        this.http = http;
        this.token = token;
        // designation= {} as Designation;
        this.designationForm = {};
    }
    AddDesignatonComponent.prototype.ngOnInit = function () {
        //Getting Designations
        this.getAllDesignations();
    };
    AddDesignatonComponent.prototype.getAllDesignations = function () {
        var _this = this;
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'designation/get').subscribe(function (data) {
            _this.designation = data;
            // console.log(this.designation);
        }, function (error) {
            console.log(error);
        });
    };
    AddDesignatonComponent.prototype.checkId = function () {
        //
        if (Object.keys(this.designationForm).length === 0) {
            return true;
        }
        return false;
        // else {return true;}
    };
    AddDesignatonComponent.prototype.editDsig = function (desig) {
        this.designationForm = desig;
        // console.log(desig);
    };
    AddDesignatonComponent.prototype.reset = function () {
        this.designationForm = {};
    };
    AddDesignatonComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.designationForm);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'designationinfo/post' + '?token=' + token, this.designationForm).subscribe(function (data) {
            console.log(data);
            _this.getAllDesignations();
        }, function (error) {
            console.log(error);
        });
    };
    AddDesignatonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-designaton',
            template: __webpack_require__(/*! ./add-designaton.component.html */ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.html"),
            styles: [__webpack_require__(/*! ./add-designaton.component.css */ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], AddDesignatonComponent);
    return AddDesignatonComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/leave/leave.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/configuration/leave/leave.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/configuration/leave/leave.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/configuration/leave/leave.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">Leave Assign</div>\n\n    <div class=\"card-body\">\n\n      <div class=\"row\">\n        <div class=\"form-group col-md-3\">\n          <label>Start Date</label>\n          <input bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"startDate\" class=\"form-control input\">\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <label>End Date</label>\n          <input bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"endDate\" class=\"form-control input\">\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <label>No Of Days</label>\n          <input type=\"number\" class=\"form-control input\" [(ngModel)]=\"noOfDays\" placeholder=\"number of days\">\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <label>Leave Category</label>\n          <select class=\"form-control input\" name=\"fkLeaveCategory\" [(ngModel)]=\"fkLeaveCategory\"  (change)=\"selectCategory($event.target.value)\">\n            <option value=\"\" selected>Select Category</option>\n            <option *ngFor=\"let lc of leaveCategories\" [value]=\"lc.id\">\n              {{lc.categoryName}}\n            </option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <label>Team</label>\n          <select class=\"form-control\" name=\"shift\" id=\"team\"  (change)=\"selectTeam($event.target.value)\">\n            <option value=\"\">Select Team</option>\n            <option *ngFor=\"let tm of team\" [value]=\"tm.teamId\">\n              {{tm.teamName}}\n            </option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <label>Remark</label>\n          <textarea class=\"form-control input\" [(ngModel)]=\"remark\" placeholder=\"remark\"></textarea>\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignLeave()\">Assign</button>\n        </div>\n\n\n\n      </div>\n\n\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n        <thead>\n        <tr>\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\n          <th>Name</th>\n          <th>Employee ID</th>\n          <th>Shift Name</th>\n          <th>Weekend</th>\n          <th>Shift Start</th>\n          <th>Team</th>\n\n        </tr>\n        </thead>\n\n        <tbody>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/configuration/leave/leave.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/configuration/leave/leave.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveComponent", function() { return LeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaveComponent = /** @class */ (function () {
    function LeaveComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allEmp = [];
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    LeaveComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id: 'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id: 'friday', item_text: 'Friday' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.getData();
        this.getCategory();
        this.getTeam();
        this.fkLeaveCategory = '';
        this.startDate = '';
        this.endDate = '';
        this.noOfDays = '';
        this.remark = '';
        this.allEmp = [];
    };
    LeaveComponent.prototype.getTeam = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.team = data;
        }, function (error) {
            console.log(error);
        });
    };
    LeaveComponent.prototype.getCategory = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/getLeaveCategory' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.leaveCategories = data;
        }, function (error) {
            console.log(error);
        });
    };
    LeaveComponent.prototype.onItemSelect = function (value) {
        // console.log(value);
    };
    LeaveComponent.prototype.onSelectAll = function (value) {
        // console.log(value);
    };
    LeaveComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/shift/get' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                    d.teamId = $("#team").val();
                },
            },
            columns: [
                {
                    "data": function (data, type, full) {
                        return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="' + data.empid + '" data-emp-id="' + data.empid + '">';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                },
                { data: 'firstName', name: 'employeeinfo.firstName' },
                { data: 'EmployeeId', name: 'employeeinfo.EmployeeId' },
                { data: 'shiftName', name: 'shift.shiftName' },
                { data: 'weekend', name: 'shiftlog.weekend' },
                { data: 'startDate', name: 'shiftlog.startDate' },
                { data: 'teamName', name: 'team.teamName' },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    LeaveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                var id = event.target.getAttribute("data-emp-id");
                console.log(id);
                var index = _this.allEmp.indexOf(id.toString());
                if (index == -1) {
                    _this.allEmp.push(id);
                }
                else {
                    _this.allEmp.splice(index, 1);
                }
                // console.log(this.allEmp);
            }
        });
    };
    LeaveComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    LeaveComponent.prototype.selectTeam = function () {
        this.rerender();
    };
    LeaveComponent.prototype.selectAll = function () {
        this.allEmp = [];
        if ($('#selectall2').is(":checked")) {
            var checkboxes = document.getElementsByName('selected_rows[]');
            $('input:checkbox').prop('checked', true);
            var that_1 = this;
            $(".chk:checked").each(function () {
                that_1.allEmp.push($(this).val());
            });
            // console.log(this.allEmp);
        }
        else {
            $(':checkbox:checked').prop('checked', false);
        }
    };
    LeaveComponent.prototype.selectCategory = function (value) {
        this.fkLeaveCategory = value;
    };
    LeaveComponent.prototype.assignLeave = function () {
        var _this = this;
        if (!this.checkForm()) {
            return false;
        }
        var form = {
            allEmp: this.allEmp,
            startDate: new Date(this.startDate).toLocaleDateString(),
            endDate: new Date(this.endDate).toLocaleDateString(),
            noOfDays: this.noOfDays,
            remark: this.remark,
            fkLeaveCategory: this.fkLeaveCategory,
        };
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/assignLeave' + '?token=' + token, form).subscribe(function (data) {
            // console.log(data);
            _this.ngOnInit();
            _this.rerender();
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: 'Leave Assigned',
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    LeaveComponent.prototype.checkForm = function () {
        var message = "";
        var condition = true;
        if (this.startDate == '') {
            condition = false;
            message = "Please Insert Start Date";
        }
        if (this.endDate == '') {
            condition = false;
            message = "Please Insert End Date";
        }
        if (this.noOfDays == '') {
            condition = false;
            message = "Please Insert No Of Days";
        }
        if (this.fkLeaveCategory == '') {
            condition = false;
            message = "Please Select Leave Category";
        }
        if (this.allEmp.length == 0) {
            condition = false;
            message = "Please Select Employee";
        }
        if (condition == false) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: message,
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        return true;
    };
    LeaveComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], LeaveComponent.prototype, "dtElement", void 0);
    LeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave',
            template: __webpack_require__(/*! ./leave.component.html */ "./src/app/components/configuration/leave/leave.component.html"),
            styles: [__webpack_require__(/*! ./leave.component.css */ "./src/app/components/configuration/leave/leave.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LeaveComponent);
    return LeaveComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/shift-assign/shift-assign.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/configuration/shift-assign/shift-assign.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/configuration/shift-assign/shift-assign.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/configuration/shift-assign/shift-assign.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">Employee Details</div>\n\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n          <label>Shift</label>\n          <select class=\"form-control\" name=\"shift\"  (change)=\"selectShift($event.target.value)\">\n            <option value=\"\">Select Shift</option>\n            <option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\">\n              {{sh.shiftName}}\n            </option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label>Start Date</label>\n          <input bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"startDate\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label>Weekend</label>\n          <ng-multiselect-dropdown\n                  [placeholder]=\"'Select Weekend'\"\n                  [data]=\"dropdownList\"\n                  [(ngModel)]=\"selectedItems\"\n                  [settings]=\"dropdownSettings\"\n                  (onSelect)=\"onItemSelect($event)\"\n                  (onSelectAll)=\"onSelectAll($event)\"\n          >\n          </ng-multiselect-dropdown>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignShift()\">Assign</button>\n        </div>\n\n      </div>\n\n\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n        <thead>\n        <tr>\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\n          <th>First Name</th>\n          <th>Middle Name</th>\n          <th>Last Name</th>\n          <th>Employee ID</th>\n          <th>Shift Name</th>\n          <th>Weekend</th>\n          <th>Shift Start</th>\n\n        </tr>\n        </thead>\n\n        <tbody>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/configuration/shift-assign/shift-assign.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/configuration/shift-assign/shift-assign.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ShiftAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftAssignComponent", function() { return ShiftAssignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShiftAssignComponent = /** @class */ (function () {
    function ShiftAssignComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allEmp = [];
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    ShiftAssignComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id: 'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id: 'friday', item_text: 'Friday' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.getData();
        this.getShift();
    };
    ShiftAssignComponent.prototype.onItemSelect = function (value) {
        // console.log(value);
    };
    ShiftAssignComponent.prototype.onSelectAll = function (value) {
        // console.log(value);
    };
    ShiftAssignComponent.prototype.getShift = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'shift/get' + '?token=' + token).subscribe(function (data) {
            _this.shift = data;
            // console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ShiftAssignComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/shift/get' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                },
            },
            columns: [
                {
                    "data": function (data, type, full) {
                        return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="' + data.empid + '" data-emp-id="' + data.empid + '">';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                },
                { data: 'firstName', name: 'employeeinfo.firstName' },
                { data: 'middleName', name: 'employeeinfo.middleName' },
                { data: 'lastName', name: 'employeeinfo.lastName' },
                { data: 'EmployeeId', name: 'employeeinfo.EmployeeId' },
                { data: 'shiftName', name: 'shift.shiftName' },
                { data: 'weekend', name: 'shiftlog.weekend' },
                { data: 'startDate', name: 'shiftlog.startDate' },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    ShiftAssignComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                var id = event.target.getAttribute("data-emp-id");
                console.log(id);
                var index = _this.allEmp.indexOf(id.toString());
                if (index == -1) {
                    _this.allEmp.push(id);
                }
                else {
                    _this.allEmp.splice(index, 1);
                }
                // console.log(this.allEmp);
            }
        });
    };
    ShiftAssignComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ShiftAssignComponent.prototype.selectAll = function () {
        this.allEmp = [];
        if ($('#selectall2').is(":checked")) {
            var checkboxes = document.getElementsByName('selected_rows[]');
            $('input:checkbox').prop('checked', true);
            var that_1 = this;
            $(".chk:checked").each(function () {
                that_1.allEmp.push($(this).val());
            });
            // console.log(this.allEmp);
        }
        else {
            $(':checkbox:checked').prop('checked', false);
        }
    };
    ShiftAssignComponent.prototype.selectShift = function (value) {
        // this.getData();
        this.shiftId = value;
        console.log(this.shiftId);
    };
    ShiftAssignComponent.prototype.assignShift = function () {
        // console.log(this.selectedItems);
        // return false;
        var _this = this;
        if (this.shiftId == null || this.startDate == null || this.allEmp.length == 0 || this.selectedItems.length == 0) {
            alert("Empty");
        }
        else {
            // new Date(this.employeeJoiningForm.actualJoinDate).toLocaleDateString();
            var form = {
                allEmp: this.allEmp,
                shiftId: this.shiftId,
                startDate: new Date(this.startDate).toLocaleDateString(),
                weekends: this.selectedItems
            };
            var token = this.token.get();
            this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'shift/assign' + '?token=' + token, form).subscribe(function (data) {
                console.log(data);
                _this.rerender();
            }, function (error) {
                console.log(error);
            });
        }
    };
    ShiftAssignComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ShiftAssignComponent.prototype, "dtElement", void 0);
    ShiftAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift-assign',
            template: __webpack_require__(/*! ./shift-assign.component.html */ "./src/app/components/configuration/shift-assign/shift-assign.component.html"),
            styles: [__webpack_require__(/*! ./shift-assign.component.css */ "./src/app/components/configuration/shift-assign/shift-assign.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShiftAssignComponent);
    return ShiftAssignComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/shift/shift.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/configuration/shift/shift.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n    max-width: 60%;\n}"

/***/ }),

/***/ "./src/app/components/configuration/shift/shift.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/configuration/shift/shift.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--modal-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Shift</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\">\n        <label>Shift Name</label>\n        <input type=\"text\" [(ngModel)]=\"shiftObj.shiftName\" placeholder=\"shift\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>In Time</label>\n        <input type=\"time\" [(ngModel)]=\"shiftObj.inTime\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Out Time</label>\n        <input type=\"time\" [(ngModel)]=\"shiftObj.outTime\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-12\">\n\n        <button class=\"btn btn-success pull-right\" (click)=\"onSubmit()\">Submit</button>\n      </div>\n\n\n    </div>\n\n  </div>\n</ng-template>\n\n<!--modal end-->\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">Shift Details</div>\n\n    <div class=\"card-body\">\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\" >Add New</a>  <br><br>\n      <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\n        <thead>\n        <tr>\n          <th>Shift Name</th>\n          <th>In Time</th>\n          <th>Out Time</th>\n          <th>Action</th>\n        </tr>\n\n        </thead>\n        <tbody >\n\n        <tr  *ngFor=\"let shift of shifts\" >\n          <td>{{shift.shiftName}}</td>\n          <td>{{shift.inTime}}</td>\n          <td>{{shift.outTime}}</td>\n          <td>  <button class=\"btn btn-info\" (click)=\"edit(shift.shiftId,content)\"> Edit</button></td>\n\n        </tr>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/configuration/shift/shift.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/configuration/shift/shift.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftComponent", function() { return ShiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShiftComponent = /** @class */ (function () {
    function ShiftComponent(modalService, http, token) {
        this.modalService = modalService;
        this.http = http;
        this.token = token;
        this.shiftObj = {
            shiftId: "",
            shiftName: "",
            inTime: "",
            outTime: ""
        };
        this.checkTable = 0;
        this.dtOptions = {};
        this.dtTeigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ShiftComponent.prototype.ngOnInit = function () {
        this.getShift();
    };
    ShiftComponent.prototype.getShift = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'shift/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.shifts = data;
            if (_this.checkTable == 0) {
                _this.dtTeigger.next();
                _this.checkTable++;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ShiftComponent.prototype.openLg = function (content) {
        this.shiftObj = {};
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    ShiftComponent.prototype.onSubmit = function () {
        var _this = this;
        // shift/post
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'shift/post' + '?token=' + token, this.shiftObj).subscribe(function (data) {
            // console.log(data);
            _this.getShift();
        }, function (error) {
            console.log(error);
        });
        this.modalRef.close();
    };
    ShiftComponent.prototype.edit = function (id, content) {
        var i = 0;
        for (i; i < this.shifts.length; i++) {
            if (this.shifts[i].shiftId == id) {
                this.shiftObj.inTime = this.shifts[i].inTime;
                this.shiftObj.outTime = this.shifts[i].outTime;
                this.shiftObj.shiftName = this.shifts[i].shiftName;
                this.shiftObj.shiftId = this.shifts[i].shiftId;
                break;
            }
        }
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    ShiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shift',
            template: __webpack_require__(/*! ./shift.component.html */ "./src/app/components/configuration/shift/shift.component.html"),
            styles: [__webpack_require__(/*! ./shift.component.css */ "./src/app/components/configuration/shift/shift.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], ShiftComponent);
    return ShiftComponent;
}());



/***/ }),

/***/ "./src/app/components/configuration/show-leave/show-leave.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/configuration/show-leave/show-leave.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/configuration/show-leave/show-leave.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/configuration/show-leave/show-leave.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Showing Leave Requests\n  </div>\n\n  <div class=\"card-body\">\n\n    <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n      <thead>\n      <tr>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Start</th>\n        <th>End</th>\n        <th>Days</th>\n        <th>Status</th>\n\n      </tr>\n      </thead>\n\n      <tbody>\n\n      </tbody>\n\n    </table>\n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/configuration/show-leave/show-leave.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/configuration/show-leave/show-leave.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLeaveComponent", function() { return ShowLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowLeaveComponent = /** @class */ (function () {
    function ShowLeaveComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allEmp = [];
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    ShowLeaveComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ShowLeaveComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/getLeaveRequests' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                },
            },
            columns: [
                { data: 'firstName', name: 'employeeinfo.firstName' },
                { data: 'lastName', name: 'employeeinfo.lastName' },
                { data: 'startDate', name: 'hrmleaves.startDate' },
                { data: 'endDate', name: 'hrmleaves.endDate' },
                { data: 'noOfDays', name: 'hrmleaves.noOfDays' },
                { data: 'applicationStatus', name: 'hrmleaves.applicationStatus' },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    ShowLeaveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                var id = event.target.getAttribute("data-emp-id");
                console.log(id);
                var index = _this.allEmp.indexOf(id.toString());
                if (index == -1) {
                    _this.allEmp.push(id);
                }
                else {
                    _this.allEmp.splice(index, 1);
                }
                // console.log(this.allEmp);
            }
        });
    };
    ShowLeaveComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ShowLeaveComponent.prototype, "dtElement", void 0);
    ShowLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-leave',
            template: __webpack_require__(/*! ./show-leave.component.html */ "./src/app/components/configuration/show-leave/show-leave.component.html"),
            styles: [__webpack_require__(/*! ./show-leave.component.css */ "./src/app/components/configuration/show-leave/show-leave.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShowLeaveComponent);
    return ShowLeaveComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_check_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/check.service */ "./src/app/services/check.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(check) {
        this.check = check;
        this.hellow = "hii";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_check_service__WEBPACK_IMPORTED_MODULE_1__["CheckService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leave/add-leave/add-leave.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/leave/add-leave/add-leave.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leave/add-leave/add-leave.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/leave/add-leave/add-leave.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header-pills\">\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Leave</h3>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Start Date</label>\n        <input type=\"date\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>End Date</label>\n        <input type=\"date\" class=\"form-control\">\n      </div>\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Leave Category</label>\n        <select class=\"form-control\" name=\"fkLeaveCategory\">\n          <option>Category 1</option>\n          <option>Category 2</option>\n          <option>Category 3</option>\n        </select>\n      </div>\n\n\n\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/leave/add-leave/add-leave.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/leave/add-leave/add-leave.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLeaveComponent", function() { return AddLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddLeaveComponent = /** @class */ (function () {
    function AddLeaveComponent() {
    }
    AddLeaveComponent.prototype.ngOnInit = function () {
    };
    AddLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-leave',
            template: __webpack_require__(/*! ./add-leave.component.html */ "./src/app/components/leave/add-leave/add-leave.component.html"),
            styles: [__webpack_require__(/*! ./add-leave.component.css */ "./src/app/components/leave/add-leave/add-leave.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddLeaveComponent);
    return AddLeaveComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accountbg\"></div>\n<div class=\"wrapper-page\">\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"text-center\">\n        <b class=\"waves-effect waves-light\">HR Solution</b>\n      </h3>\n\n    </div>\n    <div class=\"card-body\">\n\n      <div class=\"alert alert-danger\" [hidden]=\"!error\">\n        {{error}}\n      </div>\n\n      <div align=\"center\">\n        <img src=\"assets/logo/TCL_logo.png\" height=\"150\" width=\"200\">\n      </div>\n\n      <div class=\"p-3\">\n        <form #loginForm=ngForm (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\" class=\"form-horizontal m-t-20\">\n\n\n          <div class=\"form-group row\">\n            <div class=\"col-12\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"email\" name=\"email\" formControlName=\"email\" required autofocus>\n              <div *ngIf=\"submitted && f.email.errors\">\n                <div *ngIf=\"f.email.errors.required\" class=\"badge badge-danger\">Email required</div>\n                <div *ngIf=\"f.email.errors.email\" class=\"badge badge-danger\">must be a valid email</div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-12\">\n              <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n\n              <div *ngIf=\"submitted && f.password.errors\">\n                <div *ngIf=\"f.password.errors.required\" class=\"badge badge-danger\">password required</div>\n                <div *ngIf=\"f.password.errors.minlength\" class=\"badge badge-danger\">at least 6 characters </div>\n              </div>\n\n            </div>\n          </div>\n\n\n          <div class=\"form-group text-center row m-t-20\">\n            <div class=\"col-12\">\n              <!--<button class=\"btn btn-block btn-info\">Log In</button>-->\n              <button type=\"submit\" class=\"btn btn-block btn-info\" style=\"text-align: center\" >Sign in</button>\n\n\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, token, spinner) {
        this.http = http;
        this.router = router;
        this.token = token;
        this.spinner = spinner;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)
            ])
        });
    };
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.submitted = true;
        if (!this.form.valid) {
            return;
        }
        this.spinner.show();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'login', value).subscribe(function (data) {
            _this.spinner.hide();
            _this.error = null;
            _this.handleResponse(data);
        }, function (error) {
            _this.spinner.hide();
            // this.error=error.error.error;
            console.log(error);
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.access_token);
        this.router.navigateByUrl('home');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation Bar-->\n<header id=\"topnav\">\n  <div class=\"topbar-main\">\n    <div class=\"container-fluid\">\n\n      <div class=\"logo\">\n\n        <a routerLink=\"/home\" class=\"logo\">\n          <h3>HR</h3>\n        </a>\n\n      </div>\n\n      <div class=\"menu-extras topbar-custom\">\n        <!-- Search input -->\n        <div class=\"search-wrap\" id=\"search-wrap\">\n          <div class=\"search-bar\">\n            <input class=\"search-input\" type=\"search\" placeholder=\"Search\" />\n            <a href=\"#\" class=\"close-search toggle-search\" data-target=\"#search-wrap\">\n              <i class=\"mdi mdi-close-circle\"></i>\n            </a>\n          </div>\n        </div>\n\n        <ul class=\"list-inline float-right mb-0\">\n          <!-- Search -->\n          <li class=\"list-inline-item dropdown notification-list\">\n            <a class=\"nav-link waves-effect toggle-search\" href=\"#\"  data-target=\"#search-wrap\">\n              <i class=\"mdi mdi-magnify noti-icon\"></i>\n            </a>\n          </li>\n          <!-- Messages-->\n          <li class=\"list-inline-item dropdown notification-list\">\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n               aria-haspopup=\"false\" aria-expanded=\"false\">\n              <i class=\"mdi mdi-email-outline noti-icon\"></i>\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\n              <!-- item-->\n              <div class=\"dropdown-item noti-title\">\n                <h5><span class=\"badge badge-danger float-right\">745</span>Messages</h5>\n              </div>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-2.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\n                <p class=\"notify-details\"><b>Charles M. Jones</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\n              </a>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-3.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\n                <p class=\"notify-details\"><b>Thomas J. Mimms</b><small class=\"text-muted\">You have 87 unread messages</small></p>\n              </a>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-4.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\n                <p class=\"notify-details\"><b>Luis M. Konrad</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\n              </a>\n\n              <!-- All-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                View All\n              </a>\n\n            </div>\n          </li>\n          <!-- notification-->\n          <li class=\"list-inline-item dropdown notification-list\">\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n               aria-haspopup=\"false\" aria-expanded=\"false\">\n              <i class=\"mdi mdi-bell-outline noti-icon\"></i>\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\n              <!-- item-->\n              <div class=\"dropdown-item noti-title\">\n                <h5>Notification (3)</h5>\n              </div>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\n                <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-cart-outline\"></i></div>\n                <p class=\"notify-details\"><b>Your order is placed</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\n              </a>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-message\"></i></div>\n                <p class=\"notify-details\"><b>New Message received</b><small class=\"text-muted\">You have 87 unread messages</small></p>\n              </a>\n\n              <!-- item-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-martini\"></i></div>\n                <p class=\"notify-details\"><b>Your item is shipped</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\n              </a>\n\n              <!-- All-->\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\n                View All\n              </a>\n\n            </div>\n          </li>\n          <!-- User-->\n          <li class=\"list-inline-item dropdown notification-list\">\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\n               aria-haspopup=\"false\" aria-expanded=\"false\">\n              <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\">\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-user text-muted\"></i> Profile</a>\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-wallet text-muted\"></i> My Wallet</a>\n              <a class=\"dropdown-item\" href=\"#\"><span class=\"badge badge-success pull-right m-t-5\">5</span><i class=\"dripicons-gear text-muted\"></i> Settings</a>\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"whoAmI($event)\"><i class=\"dripicons-lock text-muted\"></i> Who Am I</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\"><i class=\"dripicons-exit text-muted\"></i> Logout</a>\n            </div>\n          </li>\n          <li class=\"menu-item list-inline-item\">\n            <!-- Mobile menu toggle-->\n            <a class=\"navbar-toggle nav-link\">\n              <div class=\"lines\">\n                <span></span>\n                <span></span>\n                <span></span>\n              </div>\n            </a>\n            <!-- End mobile menu toggle-->\n          </li>\n\n        </ul>\n      </div>\n      <!-- end menu-extras -->\n\n      <div class=\"clearfix\"></div>\n\n    </div> <!-- end container -->\n  </div>\n  <!-- end topbar-main -->\n\n  <!-- MENU Start -->\n  <div class=\"navbar-custom\">\n    <div class=\"container-fluid\">\n      <div id=\"navigation\">\n        <!-- Navigation Menu-->\n        <ul class=\"navigation-menu\">\n\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\n            <a routerLink=\"/home\" ><i class=\"ti-home\"></i>Dashboard</a>\n          </li>\n\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\n            <a href=\"#\"><i class=\"ti-bookmark-alt\"></i>Components</a>\n            <ul class=\"submenu\">\n              <li class=\"has-submenu\">\n                <a href=\"#\">Shift</a>\n                <ul class=\"submenu\">\n                  <li><a routerLink=\"configuration/shift\">All Shift</a></li>\n                  <li><a routerLink=\"configuration/shift/assign\">Shift Assign</a></li>\n                </ul>\n              </li>\n\n              <li class=\"has-submenu\">\n                <a href=\"#\">Leave</a>\n                <ul class=\"submenu\">\n                  <li><a routerLink=\"configuration/leave\">Apply Lave</a></li>\n                  <li><a routerLink=\"configuration/leave/show\">Show Lave</a></li>\n                </ul>\n              </li>\n\n\n              <li class=\"has-submenu\">\n                <a href=\"#\">User</a>\n                <ul class=\"submenu\">\n                  <li><a routerLink=\"user/add\">Add User</a></li>\n                </ul>\n              </li>\n              <li class=\"has-submenu\">\n                <a href=\"#\">Employee</a>\n                <ul class=\"submenu\">\n                  <li><a routerLink=\"employee\">Employee</a></li>\n                  <li><a routerLink=\"employee/add\">Add Employee</a></li>\n                </ul>\n              </li>\n\n              <li class=\"has-submenu\" *ngIf=\"isAdmin()\">\n                <a href=\"#\">Company</a>\n                <ul class=\"submenu\">\n                  <li><a routerLink=\"company/add\">Company Info</a></li>\n                </ul>\n              </li>\n\n            </ul>\n          </li>\n\n\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Report</a>\n            <ul class=\"submenu\">\n              <li class=\"\">\n                <a routerLink=\"report/attendance\">Attendance</a>\n\n              </li>\n            </ul>\n          </li>\n\n\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Team</a>\n            <ul class=\"submenu\">\n              <li class=\"\">\n                <a routerLink=\"team/show\">Show Team</a>\n                <a routerLink=\"team/assign\">Assign Team</a>\n\n              </li>\n            </ul>\n          </li>\n\n\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Payroll</a>\n            <ul class=\"submenu\">\n              <li class=\"\">\n                <a routerLink=\"payroll/payhead\">Pay Head</a>\n                <!--<a routerLink=\"team/assign\">Assign Team</a>-->\n\n              </li>\n            </ul>\n          </li>\n\n          <!--<li class=\"has-submenu\">-->\n            <!--<a href=\"#\"><i class=\"ti-files\"></i>Pages</a>-->\n            <!--<ul class=\"submenu megamenu\">-->\n              <!--<li>-->\n                <!--<ul>-->\n                  <!--<li><a routerLink=\"/login\">Login</a></li>-->\n                <!--</ul>-->\n              <!--</li>-->\n            <!--</ul>-->\n          <!--</li>-->\n\n        </ul>\n        <!-- End navigation menu -->\n      </div> <!-- end #navigation -->\n    </div> <!-- end container -->\n  </div> <!-- end navbar-custom -->\n\n\n\n\n</header>\n<!-- End Navigation Bar-->\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(http, token) {
        this.http = http;
        this.token = token;
        // user={} as User;
        this.user = {
            contactNo: "",
            email: "",
            fkActivationStatus: "",
            fkCompany: "",
            fkUserType: "",
            id: "",
            picture: "",
            registrationdate: "",
            rememberToken: "",
            userName: ""
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'me?token=' + token, null).subscribe(function (data) {
            // console.log(data);
            _this.token.setUser(data);
            _this.user = _this.token.getUser();
        }, function (error) {
            console.log(error);
            _this.handleError(error);
        });
    };
    NavbarComponent.prototype.isAdmin = function () {
        if (this.user.fkUserType == 'admin') {
            return true;
        }
        //   console.log(this.user.fkUserType);
        return false;
    };
    NavbarComponent.prototype.whoAmI = function (e) {
        var _this = this;
        e.preventDefault();
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'me?token=' + token, null).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.handleError(error);
        });
    };
    NavbarComponent.prototype.logout = function (e) {
        var _this = this;
        e.preventDefault();
        var token = this.token.get();
        // console.log(token);
        //
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'logout?token=' + token, null).subscribe(function (data) {
            // console.log(data);
            _this.data = data;
            if (_this.data.flag === 'true') {
                _this.token.remove();
            }
        }, function (error) {
            if (error.status == 401 && error.error.message === 'Unauthenticated.') {
                _this.token.remove();
            }
        });
    };
    NavbarComponent.prototype.handleError = function (error) {
        if (error.status == 401 && error.error.message === 'Unauthenticated.') {
            this.token.remove();
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header-pills\">\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Employee Salary</h3>\n  </div>\n  <div class=\"card-body\">\n    <pre>{{myForm.value | json}}</pre>\n    <form #myForm=\"ngForm\">\n      <div class=\"row\">\n\n\n        <div class=\"form-group col-md-6\">\n          <label>Select Employee</label>\n\n          <select class=\"form-control\" name=\"fkEmployeeId\">\n            <option>Select Employee</option>\n            <option>Emp 1</option>\n            <option>Emp 2</option>\n            <option>Emp 3</option>\n          </select>\n\n        </div>\n\n\n        <div class=\"form-group col-md-6\">\n          <label>Amount</label>\n          <input type=\"number\" placeholder=\"tk\" name=\"amount\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Description</label>\n          <input type=\"text\" placeholder=\"description\" name=\"description\" class=\"form-control\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Gross Percent</label>\n          <input type=\"number\" placeholder=\"grossPercent\"  name=\"grossPercent\" class=\"form-control\" [(ngModel)]=\"grossPercent\" required >\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <button class=\"btn btn-success\" [disabled]=\"!myForm.valid\">Submit</button>\n        </div>\n\n\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PayEmployeeSalarySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayEmployeeSalarySetupComponent", function() { return PayEmployeeSalarySetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PayEmployeeSalarySetupComponent = /** @class */ (function () {
    function PayEmployeeSalarySetupComponent() {
    }
    PayEmployeeSalarySetupComponent.prototype.print = function () {
        console.log(this.grossPercent);
    };
    PayEmployeeSalarySetupComponent.prototype.ngOnInit = function () {
    };
    PayEmployeeSalarySetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-employee-salary-setup',
            template: __webpack_require__(/*! ./pay-employee-salary-setup.component.html */ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.html"),
            styles: [__webpack_require__(/*! ./pay-employee-salary-setup.component.css */ "./src/app/components/payroll/pay-employee-salary-setup/pay-employee-salary-setup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PayEmployeeSalarySetupComponent);
    return PayEmployeeSalarySetupComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/pay-head/pay-head.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/payroll/pay-head/pay-head.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/pay-head/pay-head.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/payroll/pay-head/pay-head.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--modal-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Pay Head</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n\n        <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <label>Allow Deduc Title</label>\n                <input type=\"text\" [(ngModel)]=\"editModel.allowDeducTitle\" placeholder=\"allowDeducTitle\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-md-6\">\n                <label>description</label>\n                <input type=\"text\" [(ngModel)]=\"editModel.description\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label>Allow Deduction Type</label>\n\n                <select class=\"form-control\" name=\"allowDeducType\" [(ngModel)]=\"editModel.allowDeducType\"  required>\n                    <option selected value=\"\">Select type</option>\n                    <option>Allowance</option>\n                    <option>Deduction</option>\n                </select>\n                <!--<div *ngIf=\"myForm.submitted && allowDeducType.invalid\" class=\"alert alert-danger\">-->\n                    <!--<div *ngIf=\"allowDeducType.errors.required\">allowDeducType required</div>-->\n                <!--</div>-->\n\n            </div>\n            <!--<div class=\"form-group col-md-12\">-->\n\n                <!--<button class=\"btn btn-success pull-right\" (click)=\"onSubmit()\">Submit</button>-->\n            <!--</div>-->\n\n\n        </div>\n\n    </div>\n</ng-template>\n\n\n\n\n<div class=\"card\">\n    <div class=\"card-header-pills\">\n        <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Pay Head</h3>\n    </div>\n    <div class=\"card-body\">\n        <!--<pre>{{myForm.value | json}}</pre>-->\n        <form #myForm=\"ngForm\" (ngSubmit)=\"myForm.form.valid && onSubmit()\" novalidate>\n            <div class=\"row\">\n\n\n                <div class=\"form-group col-md-6\">\n                    <label>Allow Deduction Title</label>\n                    <input class=\"form-control\" placeholder=\"title\" required [(ngModel)]=\"model.allowDeducTitle\" #allowDeducTitle=\"ngModel\" name=\"allowDeducTitle\">\n\n                    <div *ngIf=\"myForm.submitted && allowDeducTitle.invalid\" class=\"alert alert-danger\">\n                        <div *ngIf=\"allowDeducTitle.errors.required\">Allow Deduction required</div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"form-group col-md-6\">\n                    <label>Description</label>\n                    <input type=\"text\" placeholder=\"description\" required [(ngModel)]=\"model.description\"  #description=\"ngModel\" class=\"form-control\" name=\"description\">\n                    <div *ngIf=\"myForm.submitted && description.invalid\" class=\"alert alert-danger\">\n                        <div *ngIf=\"description.errors.required\">Description required</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label>Allow Deduction Type</label>\n\n                    <select class=\"form-control\" name=\"allowDeducType\" [(ngModel)]=\"model.allowDeducType\"  #allowDeducType=\"ngModel\" required>\n                        <option selected value=\"\">Select type</option>\n                        <option>Allowance</option>\n                        <option>Deduction</option>\n                    </select>\n                    <div *ngIf=\"myForm.submitted && allowDeducType.invalid\" class=\"alert alert-danger\">\n                        <div *ngIf=\"allowDeducType.errors.required\">allowDeducType required</div>\n                    </div>\n\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <label>Applicable</label>\n                    <input type=\"checkbox\"  name=\"applicable\" class=\"form-control\" [(ngModel)]=\"model.applicable\"  #applicable=\"ngModel\"   >\n                </div>\n\n                <div class=\"form-group col-md-6\">\n                    <button class=\"btn btn-success\">Submit</button>\n                </div>\n\n\n            </div>\n        </form>\n\n\n        <br>\n        <hr>\n        <h3 align=\"center\">All Pay Heads</h3>\n        <br>\n\n        <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\n            <thead>\n            <tr>\n                <th>Allow Deduc Title</th>\n                <th>Allow Deduc Type</th>\n                <th>Description</th>\n                <th>Applicable</th>\n                <th>Action</th>\n            </tr>\n\n            </thead>\n            <tbody >\n\n            <tr  *ngFor=\"let data of payHeadData\" >\n                <td>{{data.allowDeducTitle}}</td>\n                <td>{{data.allowDeducType}}</td>\n                <td>{{data.description}}</td>\n                <td>{{data.applicable}}</td>\n                <td>  <button class=\"btn btn-info btn-sm\" (click)=\"edit(data,content)\"> Edit</button></td>\n                <!--<td>  <button class=\"btn btn-info\" (click)=\"edit(shift.shiftId,content)\"> Edit</button></td>-->\n\n            </tr>\n\n            </tbody>\n\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/pay-head/pay-head.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/payroll/pay-head/pay-head.component.ts ***!
  \*******************************************************************/
/*! exports provided: PayHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayHeadComponent", function() { return PayHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PayHeadComponent = /** @class */ (function () {
    function PayHeadComponent(modalService, renderer, http, token, route, router, spinner) {
        this.modalService = modalService;
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.dtOptions = {};
        this.dtTeigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.checkTable = 0;
        this.model = {};
        this.editModel = {};
    }
    PayHeadComponent.prototype.ngOnInit = function () {
        this.model.allowDeducType = '';
        this.getData();
    };
    PayHeadComponent.prototype.getData = function () {
        var _this = this;
        this.spinner.show();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'payroll/payhead/get').subscribe(function (data) {
            _this.spinner.hide();
            // console.log(data);
            _this.payHeadData = data;
            if (_this.checkTable == 0) {
                _this.dtTeigger.next();
                _this.checkTable++;
            }
        }, function (error) {
            _this.spinner.hide();
            // this.error=error.error.error;
            console.log(error);
        });
    };
    PayHeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'payroll/payhead/insert', this.model).subscribe(function (data) {
            // this.spinner.hide();
            console.log(data);
            _this.model = [];
        }, function (error) {
            // this.spinner.hide();
            // this.error=error.error.error;
            console.log(error);
        });
    };
    // openLg(content) {
    //
    //   this.modalRef =  this.modalService.open(content, { size: 'lg'});
    //
    // }
    PayHeadComponent.prototype.update = function () {
        this.modalRef.close();
    };
    PayHeadComponent.prototype.edit = function (data, content) {
        // console.log(data);
        this.editModel.id = data.id;
        this.editModel.allowDeducTitle = data.allowDeducTitle;
        this.editModel.allowDeducType = data.allowDeducType;
        this.editModel.description = data.description;
        this.editModel.applicable = data.applicable;
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    PayHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-head',
            template: __webpack_require__(/*! ./pay-head.component.html */ "./src/app/components/payroll/pay-head/pay-head.component.html"),
            styles: [__webpack_require__(/*! ./pay-head.component.css */ "./src/app/components/payroll/pay-head/pay-head.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PayHeadComponent);
    return PayHeadComponent;
}());



/***/ }),

/***/ "./src/app/components/report/attendance/attendance.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/report/attendance/attendance.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/report/attendance/attendance.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/report/attendance/attendance.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\"></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-3\">\n          <label>From</label>\n          <input class=\"form-control\"\n                 bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\" id=\"startDate\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label>To</label>\n          <input class=\"form-control\"\n                 bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\"\n                 id=\"endDate\"\n          >\n        </div>\n\n\n\n        <div class=\"form-group col-md-3\">\n          <br>\n\n          <button class=\"btn btn-success\" (click)=\"search()\">Search</button>\n        </div>\n\n\n        <div class=\"form-group col-md-3\">\n          <br>\n\n          <button class=\"btn btn-info pull-right\" (click)=\"generateExcel()\">Generate Report</button>\n        </div>\n\n      </div>\n      <hr>\n\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n        <thead>\n        <tr>\n          <th>Name</th>\n          <!--<th>Middle Name</th>-->\n          <!--<th>Last Name</th>-->\n          <th>Department</th>\n          <th>Total Attendance</th>\n          <th>Total Late</th>\n          <th>Average Working hour</th>\n          <th>Total Leave</th>\n          <th>Weekend Count</th>\n          <th>Weekend</th>\n          <th>Action</th>\n        </tr>\n\n        </thead>\n      </table>\n\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report/attendance/attendance.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/report/attendance/attendance.component.ts ***!
  \**********************************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(renderer, http, token, route, router, spinner) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allEmp = [];
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.getData();
        // console.log(new Date.today().clearTime().moveToFirstDayOfMonth());
        var nowdate = new Date();
        var monthStartDay = this.dateToYMD(new Date(nowdate.getFullYear(), nowdate.getMonth(), 1));
        var monthEndDay = this.dateToYMD(new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0));
        $('#startDate').val(monthStartDay);
        $('#endDate').val(monthEndDay);
        // console.log(monthEndDay);
        // console.log(monthStartDay);
    };
    AttendanceComponent.prototype.dateToYMD = function (date) {
        var strArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var d = date.getDate();
        var m = strArray[date.getMonth()];
        var y = date.getFullYear();
        // return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
        return '' + y + '-' + m + '-' + (d <= 9 ? '0' + d : d);
    };
    AttendanceComponent.prototype.dateToYMD2 = function (date) {
        var strArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var d = date.getDate();
        var m = strArray[date.getMonth()];
        var y = date.getFullYear();
        return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
    };
    AttendanceComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'report/attendance' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                    d.startDate = $('#startDate').val();
                    d.endDate = $('#endDate').val();
                },
            },
            columns: [
                { data: 'empname', name: 'empname' },
                // { data: 'middleName' ,name:'middleName'},
                // { data: 'lastName' ,name:'lastName'},
                { data: 'departmentName', name: 'departmentName' },
                { data: 'totAttendance', name: 'totAttendance' },
                { data: 'totalLate', name: 'totalLate' },
                { data: 'averageWorkingHour', name: 'averageWorkingHour' },
                // { data: 'totalLeave', name: 'totalLeave'},
                {
                    "data": function (data, type, full) {
                        return '<button class="btn btn-sm btn-info" data-leaveemp-id="' + data.employeeId + '">' + data.totalLeave + '</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                },
                { data: 'weekends', name: 'weekends' },
                { data: 'totalWeekend', name: 'totalWeekend' },
                {
                    "data": function (data, type, full) {
                        return '<button class="btn btn-sm btn-info" data-emp-id="' + data.employeeId + '">View</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'Bfrtip',
        };
    };
    AttendanceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                var id = event.target.getAttribute("data-emp-id");
                var start = $('#startDate').val();
                var end = $('#endDate').val();
                _this.router.navigate(["report/attendance/" + id + '/' + start + '/' + end]);
                // this.router.navigate(["report/attendance/" +id]);
            }
            if (event.target.hasAttribute("data-leaveemp-id")) {
                var id = event.target.getAttribute("data-leaveemp-id");
                // this.router.navigate(["report/attendance/" +id]);
                console.log(id);
            }
        });
    };
    AttendanceComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    AttendanceComponent.prototype.search = function () {
        this.rerender();
    };
    AttendanceComponent.prototype.generateExcel = function () {
        var _this = this;
        this.spinner.show();
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'excel/generate' + '?token=' + token, { start: $('#startDate').val() }).subscribe(function (data) {
            // console.log(data);
            console.log(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].Image_URL + 'exportedExcel/' + data + '.xls');
            _this.spinner.hide();
            // newWindow.location = 'http://' + window.location.hostname + '/customers/export';
            var fileName = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].Image_URL + 'exportedExcel/' + data;
            var link = document.createElement("a");
            link.download = data + ".xls";
            var uri = fileName + ".xls";
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // delete link;
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
        // this.spinner.hide();
    };
    AttendanceComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], AttendanceComponent.prototype, "dtElement", void 0);
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/components/report/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/components/report/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/components/report/show-attendance/show-attendance.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/report/show-attendance/show-attendance.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/report/show-attendance/show-attendance.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/report/show-attendance/show-attendance.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Comment</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\">\n        <label>Comment</label>\n        <textarea placeholder=\"remark\" class=\"form-control\" [(ngModel)]=\"comment\"></textarea>\n      </div>\n\n      <div class=\"form-group col-md-12\">\n\n        <button class=\"btn btn-success pull-right\" (click)=\"insertComment()\">Submit</button>\n      </div>\n\n\n    </div>\n\n  </div>\n</ng-template>\n\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-3\">\n          <label>From</label>\n          <input class=\"form-control\"\n                 bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\" id=\"startDate\">\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label>To</label>\n          <input class=\"form-control\"\n                 bsDatepicker\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\"\n                 id=\"endDate\"\n          >\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <br>\n\n          <button class=\"btn btn-success \" (click)=\"search()\">Search</button>\n        </div>\n\n        <div class=\"form-group col-md-3\">\n          <br>\n\n          <button class=\"btn btn-info pull-right\" (click)=\"commentModal(content)\">Add Comment</button>\n        </div>\n\n      </div>\n\n\n    </div>\n    <div class=\"card-body\">\n\n\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n      <!--<table datatable class=\"table\" >-->\n        <thead>\n        <tr>\n          <th>attDeviceUserId</th>\n          <th>firstName</th>\n          <th>attendanceDate</th>\n          <th>checkInFull</th>\n          <th>checkoutFull</th>\n          <th>late</th>\n          <th>lateTime</th>\n          <th>scheduleIn</th>\n          <th>scheduleOut</th>\n          <th>workingTime</th>\n        </tr>\n\n        </thead>\n      </table>\n\n<br>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <hr>\n          <h4 align=\"center\"><b>Leave</b></h4>\n          <hr>\n\n          <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions2\" [dtTrigger]=\"dtTrigger2\">\n            <thead>\n            <tr>\n\n              <th>Start Date</th>\n              <th>End Date</th>\n              <th>Days</th>\n              <th>Cause</th>\n              <th>Category</th>\n\n            </tr>\n\n            </thead>\n            <tbody >\n\n            <tr  *ngFor=\"let leave of leaves\" >\n              <td>{{leave.startDate}}</td>\n              <td>{{leave.endDate}}</td>\n              <td>{{leave.noOfDays}}</td>\n              <td>{{leave.remarks}}</td>\n              <td>{{leave.categoryName}}</td>\n\n            </tr>\n\n            </tbody>\n\n          </table>\n\n\n\n        </div>\n\n        <div class=\"col-md-4\">\n          <hr>\n          <h4 align=\"center\"><b>Comments</b></h4>\n          <hr>\n\n          <table class=\"table\">\n\n            <tr  *ngFor=\"let comment of allComments\" >\n              <td style=\"text-align: center\">{{comment.comment}}</td>\n\n\n            </tr>\n          </table>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/report/show-attendance/show-attendance.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/report/show-attendance/show-attendance.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShowAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAttendanceComponent", function() { return ShowAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShowAttendanceComponent = /** @class */ (function () {
    function ShowAttendanceComponent(modalService, renderer, http, token, route, router) {
        this.modalService = modalService;
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtOptions2 = {};
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.checkTable = 0;
    }
    ShowAttendanceComponent.prototype.ngOnInit = function () {
        this.empid = this.route.snapshot.params.id;
        this.startDate = this.route.snapshot.params.fromdate;
        this.endDate = this.route.snapshot.params.todate;
        $('#startDate').val(this.startDate);
        $('#endDate').val(this.endDate);
        this.getData();
        this.getLeave();
        this.getComments();
    };
    ShowAttendanceComponent.prototype.getLeave = function () {
        var _this = this;
        var token = this.token.get();
        var id = this.empid;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/getLeaveRequests/' + id + '?token=' + token, { startDate: this.startDate, endDate: this.endDate }).subscribe(function (data) {
            // console.log(data);
            _this.leaves = data;
            // this.dtTrigger2.next();
            if (_this.checkTable == 0) {
                _this.dtTrigger2.next();
                _this.checkTable++;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ShowAttendanceComponent.prototype.getData = function () {
        var token = this.token.get();
        var id = this.empid;
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'report/getEmployeeAttendance' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                    d.id = id;
                    d.startDate = $('#startDate').val();
                    d.endDate = $('#endDate').val();
                },
            },
            columns: [
                { data: 'attDeviceUserId', name: 'attDeviceUserId' },
                { data: 'firstName', name: 'firstName' },
                { data: 'attendanceDate', name: 'attendanceDate' },
                { data: 'checkInFull', name: 'checkInFull' },
                { data: 'checkoutFull', name: 'checkoutFull' },
                { data: 'late', name: 'late' },
                { data: 'lateTime', name: 'lateTime' },
                { data: 'scheduleIn', name: 'scheduleIn' },
                { data: 'scheduleOut', name: 'scheduleOut' },
                { data: 'workingTime', name: 'workingTime' },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    ShowAttendanceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ShowAttendanceComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ShowAttendanceComponent.prototype.search = function () {
        this.rerender();
        this.getComments();
        this.getLeave();
    };
    ShowAttendanceComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    ShowAttendanceComponent.prototype.commentModal = function (content) {
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    ShowAttendanceComponent.prototype.getComments = function () {
        var _this = this;
        var token = this.token.get();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var id = this.empid;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'comment/get' + '?token=' + token, { id: id, startDate: startDate, endDate: endDate }).subscribe(function (data) {
            // console.log(data);
            _this.allComments = data;
        }, function (error) {
            console.log(error);
        });
    };
    ShowAttendanceComponent.prototype.insertComment = function () {
        var _this = this;
        // alert(this.comment);
        var token = this.token.get();
        var id = this.empid;
        if (this.comment) {
            this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'comment/add' + '?token=' + token, { id: id, comment: this.comment }).subscribe(function (data) {
                // console.log(data);
                _this.modalRef.close();
                _this.getComments();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alert('Comment Field is Empty');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], ShowAttendanceComponent.prototype, "dtElement", void 0);
    ShowAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-attendance',
            template: __webpack_require__(/*! ./show-attendance.component.html */ "./src/app/components/report/show-attendance/show-attendance.component.html"),
            styles: [__webpack_require__(/*! ./show-attendance.component.css */ "./src/app/components/report/show-attendance/show-attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShowAttendanceComponent);
    return ShowAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/components/tables/tables.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/tables/tables.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tables/tables.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tables/tables.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div style=\"width: 60%;\" >\n  <table id=\"example\" class=\"table\" >\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th>Position</th>\n      <th>Office</th>\n      <th>Age</th>\n      <th>Start date</th>\n      <th>Salary</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>Tiger Nixon</td>\n      <td>System Architect</td>\n      <td>Edinburgh</td>\n      <td>61</td>\n      <td>2011/04/25</td>\n      <td>$320,800</td>\n    </tr>\n    <tr>\n      <td>Garrett Winters</td>\n      <td>Accountant</td>\n      <td>Tokyo</td>\n      <td>63</td>\n      <td>2011/07/25</td>\n      <td>$170,750</td>\n    </tr>\n    <tr>\n      <td>Ashton Cox</td>\n      <td>Junior Technical Author</td>\n      <td>San Francisco</td>\n      <td>66</td>\n      <td>2009/01/12</td>\n      <td>$86,000</td>\n    </tr>\n    <tr>\n      <td>Cedric Kelly</td>\n      <td>Senior Javascript Developer</td>\n      <td>Edinburgh</td>\n      <td>22</td>\n      <td>2012/03/29</td>\n      <td>$433,060</td>\n    </tr>\n    <tr>\n      <td>Airi Satou</td>\n      <td>Accountant</td>\n      <td>Tokyo</td>\n      <td>33</td>\n      <td>2008/11/28</td>\n      <td>$162,700</td>\n    </tr>\n    <tr>\n      <td>Brielle Williamson</td>\n      <td>Integration Specialist</td>\n      <td>New York</td>\n      <td>61</td>\n      <td>2012/12/02</td>\n      <td>$372,000</td>\n    </tr>\n    <tr>\n      <td>Herrod Chandler</td>\n      <td>Sales Assistant</td>\n      <td>San Francisco</td>\n      <td>59</td>\n      <td>2012/08/06</td>\n      <td>$137,500</td>\n    </tr>\n    <tr>\n      <td>Rhona Davidson</td>\n      <td>Integration Specialist</td>\n      <td>Tokyo</td>\n      <td>55</td>\n      <td>2010/10/14</td>\n      <td>$327,900</td>\n    </tr>\n    <tr>\n      <td>Colleen Hurst</td>\n      <td>Javascript Developer</td>\n      <td>San Francisco</td>\n      <td>39</td>\n      <td>2009/09/15</td>\n      <td>$205,500</td>\n    </tr>\n    <tr>\n      <td>Sonya Frost</td>\n      <td>Software Engineer</td>\n      <td>Edinburgh</td>\n      <td>23</td>\n      <td>2008/12/13</td>\n      <td>$103,600</td>\n    </tr>\n    <tr>\n      <td>Jena Gaines</td>\n      <td>Office Manager</td>\n      <td>London</td>\n      <td>30</td>\n      <td>2008/12/19</td>\n      <td>$90,560</td>\n    </tr>\n    <tr>\n      <td>Quinn Flynn</td>\n      <td>Support Lead</td>\n      <td>Edinburgh</td>\n      <td>22</td>\n      <td>2013/03/03</td>\n      <td>$342,000</td>\n    </tr>\n    <tr>\n      <td>Charde Marshall</td>\n      <td>Regional Director</td>\n      <td>San Francisco</td>\n      <td>36</td>\n      <td>2008/10/16</td>\n      <td>$470,600</td>\n    </tr>\n    <tr>\n      <td>Haley Kennedy</td>\n      <td>Senior Marketing Designer</td>\n      <td>London</td>\n      <td>43</td>\n      <td>2012/12/18</td>\n      <td>$313,500</td>\n    </tr>\n    <tr>\n      <td>Tatyana Fitzpatrick</td>\n      <td>Regional Director</td>\n      <td>London</td>\n      <td>19</td>\n      <td>2010/03/17</td>\n      <td>$385,750</td>\n    </tr>\n    <tr>\n      <td>Michael Silva</td>\n      <td>Marketing Designer</td>\n      <td>London</td>\n      <td>66</td>\n      <td>2012/11/27</td>\n      <td>$198,500</td>\n    </tr>\n    <tr>\n      <td>Paul Byrd</td>\n      <td>Chief Financial Officer (CFO)</td>\n      <td>New York</td>\n      <td>64</td>\n      <td>2010/06/09</td>\n      <td>$725,000</td>\n    </tr>\n    <tr>\n      <td>Gloria Little</td>\n      <td>Systems Administrator</td>\n      <td>New York</td>\n      <td>59</td>\n      <td>2009/04/10</td>\n      <td>$237,500</td>\n    </tr>\n    <tr>\n      <td>Bradley Greer</td>\n      <td>Software Engineer</td>\n      <td>London</td>\n      <td>41</td>\n      <td>2012/10/13</td>\n      <td>$132,000</td>\n    </tr>\n    <tr>\n      <td>Dai Rios</td>\n      <td>Personnel Lead</td>\n      <td>Edinburgh</td>\n      <td>35</td>\n      <td>2012/09/26</td>\n      <td>$217,500</td>\n    </tr>\n    <tr>\n      <td>Jenette Caldwell</td>\n      <td>Development Lead</td>\n      <td>New York</td>\n      <td>30</td>\n      <td>2011/09/03</td>\n      <td>$345,000</td>\n    </tr>\n    <tr>\n      <td>Yuri Berry</td>\n      <td>Chief Marketing Officer (CMO)</td>\n      <td>New York</td>\n      <td>40</td>\n      <td>2009/06/25</td>\n      <td>$675,000</td>\n    </tr>\n    <tr>\n      <td>Caesar Vance</td>\n      <td>Pre-Sales Support</td>\n      <td>New York</td>\n      <td>21</td>\n      <td>2011/12/12</td>\n      <td>$106,450</td>\n    </tr>\n\n    </tbody>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/tables/tables.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tables/tables.component.ts ***!
  \*******************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
        $('#example').DataTable();
    };
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/components/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.css */ "./src/app/components/tables/tables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/components/team/assign-team/assign-team.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/team/assign-team/assign-team.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/team/assign-team/assign-team.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/team/assign-team/assign-team.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">Employee Details</div>\n\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n          <label>Team</label>\n          <select class=\"form-control\" name=\"shift\"  (change)=\"selectShift($event.target.value)\">\n            <option value=\"\">Select Team</option>\n            <option *ngFor=\"let tm of team\" [value]=\"tm.teamId\">\n              {{tm.teamName}}\n            </option>\n          </select>\n        </div>\n\n\n        <div class=\"form-group col-md-4\">\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignTeam()\">Assign</button>\n        </div>\n\n      </div>\n\n\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n        <thead>\n        <tr>\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\n          <th>First Name</th>\n          <th>Middle Name</th>\n          <th>Last Name</th>\n          <th>Employee ID</th>\n          <th>Shift Name</th>\n          <th>Weekend</th>\n          <th>Team Name</th>\n\n        </tr>\n        </thead>\n\n        <tbody>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/team/assign-team/assign-team.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/team/assign-team/assign-team.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignTeamComponent", function() { return AssignTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AssignTeamComponent = /** @class */ (function () {
    function AssignTeamComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.allEmp = [];
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    AssignTeamComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id: 'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id: 'friday', item_text: 'Friday' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.getData();
        // this.getShift();
        this.getTeam();
    };
    AssignTeamComponent.prototype.onItemSelect = function (value) {
        // console.log(value);
    };
    AssignTeamComponent.prototype.onSelectAll = function (value) {
        // console.log(value);
    };
    AssignTeamComponent.prototype.getTeam = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.team = data;
        }, function (error) {
            console.log(error);
        });
    };
    AssignTeamComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/shift/get' + '?token=' + token,
                type: 'POST',
                data: function (d) {
                },
            },
            columns: [
                {
                    "data": function (data, type, full) {
                        return '<input type="checkbox" class="chk form-control" name="selected_rows[]" value="' + data.empid + '" data-emp-id="' + data.empid + '">';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                },
                { data: 'firstName', name: 'employeeinfo.firstName' },
                { data: 'middleName', name: 'employeeinfo.middleName' },
                { data: 'lastName', name: 'employeeinfo.lastName' },
                { data: 'EmployeeId', name: 'employeeinfo.EmployeeId' },
                { data: 'shiftName', name: 'shift.shiftName' },
                { data: 'weekend', name: 'shiftlog.weekend' },
                { data: 'teamName', name: 'team.teamName' },
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    AssignTeamComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                var id = event.target.getAttribute("data-emp-id");
                console.log(id);
                var index = _this.allEmp.indexOf(id.toString());
                if (index == -1) {
                    _this.allEmp.push(id);
                }
                else {
                    _this.allEmp.splice(index, 1);
                }
                // console.log(this.allEmp);
            }
        });
    };
    AssignTeamComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    AssignTeamComponent.prototype.selectAll = function () {
        this.allEmp = [];
        if ($('#selectall2').is(":checked")) {
            var checkboxes = document.getElementsByName('selected_rows[]');
            $('input:checkbox').prop('checked', true);
            var that_1 = this;
            $(".chk:checked").each(function () {
                that_1.allEmp.push($(this).val());
            });
            // console.log(this.allEmp);
        }
        else {
            $(':checkbox:checked').prop('checked', false);
        }
    };
    AssignTeamComponent.prototype.selectShift = function (value) {
        // this.getData();
        this.teamId = value;
        console.log(this.teamId);
    };
    AssignTeamComponent.prototype.assignTeam = function () {
        var _this = this;
        if (this.teamId == null || this.allEmp.length == 0) {
            alert("Please Select All");
        }
        else {
            var form = {
                allEmp: this.allEmp,
                teamId: this.teamId,
            };
            var token = this.token.get();
            // console.log(form);
            this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/assign' + '?token=' + token, form).subscribe(function (data) {
                console.log(data);
                _this.rerender();
            }, function (error) {
                console.log(error);
            });
        }
    };
    AssignTeamComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], AssignTeamComponent.prototype, "dtElement", void 0);
    AssignTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-team',
            template: __webpack_require__(/*! ./assign-team.component.html */ "./src/app/components/team/assign-team/assign-team.component.html"),
            styles: [__webpack_require__(/*! ./assign-team.component.css */ "./src/app/components/team/assign-team/assign-team.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AssignTeamComponent);
    return AssignTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/team/create-team/create-team.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/team/create-team/create-team.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/team/create-team/create-team.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/team/create-team/create-team.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--modal-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Shift</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\">\n        <label>Team Name</label>\n        <input type=\"text\" [(ngModel)]=\"teamObj.teamName\" placeholder=\"shift\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-12\">\n\n        <button class=\"btn btn-success pull-right\" (click)=\"onSubmit()\">Submit</button>\n      </div>\n\n\n    </div>\n\n  </div>\n</ng-template>\n\n<!--modal end-->\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">Team Details</div>\n\n    <div class=\"card-body\">\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\" >Add New</a>  <br><br>\n      <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\n        <thead>\n        <tr>\n          <th>Shift Name</th>\n          <th>Action</th>\n        </tr>\n\n        </thead>\n        <tbody >\n\n        <tr  *ngFor=\"let shift of teams\" >\n          <td>{{shift.teamName}}</td>\n          <!--<td>{{shift.inTime}}</td>-->\n          <!--<td>{{shift.outTime}}</td>-->\n          <td>  <button class=\"btn btn-info\" (click)=\"edit(shift.teamId,content)\"> Edit</button></td>\n\n        </tr>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/team/create-team/create-team.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/team/create-team/create-team.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamComponent", function() { return CreateTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(modalService, http, token) {
        this.modalService = modalService;
        this.http = http;
        this.token = token;
        this.teamObj = {
            teamId: "",
            teamName: ""
        };
        this.checkTable = 0;
        this.dtOptions = {};
        this.dtTeigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
        this.getShift();
    };
    CreateTeamComponent.prototype.getShift = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.teams = data;
            if (_this.checkTable == 0) {
                _this.dtTeigger.next();
                _this.checkTable++;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateTeamComponent.prototype.openLg = function (content) {
        this.teamObj = {};
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    CreateTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        // shift/post
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/post' + '?token=' + token, this.teamObj).subscribe(function (data) {
            // console.log(data);
            _this.getShift();
        }, function (error) {
            console.log(error);
        });
        this.modalRef.close();
    };
    CreateTeamComponent.prototype.edit = function (id, content) {
        var i = 0;
        for (i; i < this.teams.length; i++) {
            if (this.teams[i].teamId == id) {
                this.teamObj.teamName = this.teams[i].teamName;
                this.teamObj.teamId = this.teams[i].teamId;
                break;
            }
        }
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    CreateTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-team',
            template: __webpack_require__(/*! ./create-team.component.html */ "./src/app/components/team/create-team/create-team.component.html"),
            styles: [__webpack_require__(/*! ./create-team.component.css */ "./src/app/components/team/create-team/create-team.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/user/add-employee/add-employee.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/add-employee/add-employee.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/add-employee/add-employee.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/add-employee/add-employee.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div style=\"background: black;padding: 0; min-height: 860px; margin-left: -20px; margin-top:-33px;\" class=\"col-md-2\">\n\n      <ul style=\"margin-top: 25px; margin-left: 20px;\" class=\"list-group\">\n        <li class=\"list-group-item \" [class.active]=\"infoFlag == 1\"  (click)=\"onInfoClick(1)\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \">Basic Info </button></li>\n        <li class=\"list-group-item\"  [class.active]=\"infoFlag == 2\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(2)\">Personal Info</button> </li>\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 3\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(3)\">Education</button> </li>\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 4\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block\" (click)=\"onInfoClick(4)\">Joining Info</button> </li>\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 5\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(5)\">Bank Info </button></li>\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 6\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(6)\">Salary Info </button></li>\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 7\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(7)\">Documents </button></li>\n\n      </ul>\n    </div>\n\n\n    <div class=\"col-md-10\">\n      <app-basic-info *ngIf=\"infoFlag ==1\" [empid]=\"empid\"></app-basic-info>\n      <app-personal-info *ngIf=\"infoFlag ==2\" [empid]=\"empid\"></app-personal-info>\n      <app-education *ngIf=\"infoFlag ==3\" [empid]=\"empid\"></app-education>\n      <app-joining-info *ngIf=\"infoFlag ==4\" [empid]=\"empid\"></app-joining-info>\n      <app-bank-info *ngIf=\"infoFlag ==5\" [empid]=\"empid\"></app-bank-info>\n      <app-salary-info *ngIf=\"infoFlag ==6\" [empid]=\"empid\"></app-salary-info>\n      <app-user-document *ngIf=\"infoFlag ==7\" [empid]=\"empid\"></app-user-document>\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/user/add-employee/add-employee.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/add-employee/add-employee.component.ts ***!
  \************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(route) {
        this.route = route;
        this.infoFlag = 1;
        this.error = [];
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.empid = this.route.snapshot.params.id;
    };
    AddEmployeeComponent.prototype.onInfoClick = function (value) {
        if (value == 1) {
            this.infoFlag = value;
        }
        else if (this.empid) {
            this.infoFlag = value;
        }
        else {
            // alert('Please Create a user first');
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: 'Please Create a user first',
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
        }
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/components/user/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.css */ "./src/app/components/user/add-employee/add-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/user/add-user/add-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/add-user/add-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<pre>{{closeResult}}</pre>-->\n\n\n<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">Personal Details</div>\n    <div class=\"card-body\">\n      <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" >\n      <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n          <label>Name</label>\n          <input class=\"form-control\" type=\"text\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"userinput.name\" required>\n        </div>\n\n\n        <div class=\"form-group col-md-4\">\n          <label>Email</label>\n          <input class=\"form-control\" type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"userinput.email\">\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label>User Type</label>\n          <select class=\"form-control\" [(ngModel)]=\"userinput.type\" name=\"type\" required>\n            <option value=\"1\" selected>type 1</option>\n            <option value=\"2\">type 2</option>\n            <option value=\"3\">type 3</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label>Contact Number</label>\n          <input class=\"form-control\" type=\"text\" placeholder=\"number\" name=\"number\" [(ngModel)]=\"userinput.number\">\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label>Image</label>\n          <input type=\"file\" name=\"image\" class=\"form-control\" [(ngModel)]=\"userinput.userImage\">\n        </div>\n\n        <div class=\"form-group col-md-12\">\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success \">insert</button>\n        </div>\n\n\n      </div>\n      </form>\n\n    </div>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/user/add-user/add-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/add-user/add-user.component.ts ***!
  \****************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddUserComponent = /** @class */ (function () {
    // userImage:File;
    function AddUserComponent(route) {
        this.route = route;
        this.userinput = {
            name: null,
            password: null,
            email: null,
            number: null,
            userImage: null,
            type: null
        };
    }
    AddUserComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.params.id);
    };
    AddUserComponent.prototype.onSubmit = function () {
        console.log('Submit Clicked');
        // $event.preventDefault();
        console.log(this.userinput);
        // console.log(this.userImage);
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/components/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/components/user/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/bank-info/bank-info.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/bank-info/bank-info.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/bank-info/bank-info.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/bank-info/bank-info.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Bank Info\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <label>Pf Acount</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.pfAccountNo\" name=\"pfAccountNo\">\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label>Bank Acount</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.bankAccountNo\" name=\"bankAccountNo\">\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label>Tin Id</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.tinId\" name=\"tinId\">\n            </div>\n\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\n            </div>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/bank-info/bank-info.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/bank-info/bank-info.component.ts ***!
  \******************************************************************/
/*! exports provided: BankInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInfoComponent", function() { return BankInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BankInfoComponent = /** @class */ (function () {
    function BankInfoComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.employeeBankForm = {
            id: '',
            pfAccountNo: '',
            bankAccountNo: '',
            tinId: ''
        };
        this.error = [];
    }
    BankInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeBankForm.id = this.empid;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'bankinfo/get' + '?token=' + token, { id: this.employeeBankForm.id }).subscribe(function (data) {
            // console.log(data);
            _this.bankFrom = data;
            _this.employeeBankForm.pfAccountNo = _this.bankFrom.pfAccountNo;
            _this.employeeBankForm.bankAccountNo = _this.bankFrom.bankAccountNo;
            _this.employeeBankForm.tinId = _this.bankFrom.tinId;
        }, function (error) {
            console.log(error);
        });
    };
    BankInfoComponent.prototype.submit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'bankinfo/post' + '?token=' + token, this.employeeBankForm).subscribe(function (data) {
            _this.result = data;
            $.alert({
                title: 'Success!',
                content: _this.result.message,
            });
        }, function (error) {
            var data = error.error.errors;
            for (var p in data) {
                for (var k in data[p]) {
                    _this.error.push(data[p][k]);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], BankInfoComponent.prototype, "empid", void 0);
    BankInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-info',
            template: __webpack_require__(/*! ./bank-info.component.html */ "./src/app/components/user/bank-info/bank-info.component.html"),
            styles: [__webpack_require__(/*! ./bank-info.component.css */ "./src/app/components/user/bank-info/bank-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BankInfoComponent);
    return BankInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/basic-info/basic-info.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/basic-info/basic-info.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/basic-info/basic-info.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/basic-info/basic-info.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n    <div class=\"card-header\">\n        <h5>Basic Information</h5>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n\n\n\n            <div class=\"form-group col-md-4\">\n\n                <label >First Name <span style=\"color: red\">*</span></label>\n\n                <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"employeeBasicForm.firstName\" required>\n\n            </div>\n            <br>\n            <!--<div class=\"col-md-12\"><hr></div>-->\n            <div class=\" form-group col-md-4\">\n\n                <label >Middle Name</label>\n\n                <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\" [(ngModel)]=\"employeeBasicForm.middleName\" required>\n\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label >Last Name <span style=\"color: red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"employeeBasicForm.lastName\" required>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label >Nick Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nick name\" [(ngModel)]=\"employeeBasicForm.nickName\" required>\n\n            </div>\n\n            <div class=\" form-group col-md-4\">\n\n                <label >Employee Id <span style=\"color: red\">*</span></label>\n\n                <input type=\"text\" class=\"form-control\" placeholder=\"employee id\" [(ngModel)]=\"employeeBasicForm.EmployeeId\" required>\n\n            </div>\n\n            <!--<div class=\"col-md-12\"><hr></div>-->\n\n            <div class=\"form-group col-md-4\">\n                <label>Department <span style=\"color: red\">*</span></label>\n                <select class=\"form-control\" (change)=\"selectDepartment($event.target.value)\" [(ngModel)]=\"employeeBasicForm.department\" required>\n                    <option value=\"\">Select Department</option>\n                    <option *ngFor=\"let dept of department\" [value]=\"dept.id\">\n                        {{dept.departmentName}}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label>Designation <span style=\"color: red\">*</span></label>\n                <select class=\"form-control\" (change)=\"selectDesignation($event.target.value)\" [(ngModel)]=\"employeeBasicForm.designation\" required>\n                    <option value=\"\">Select Designation</option>\n                    <option *ngFor=\"let desg of designation\" [value]=\"desg.id\">\n                        {{desg.title}}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label>Employee Type <span style=\"color: red\">*</span></label>\n                <select class=\"form-control\" name=\"fkEmployeeType\" [(ngModel)]=\"employeeBasicForm.empType\" required>\n                    <option value=\"\">Select Employee Type</option>\n                    <option *ngFor=\"let type of empType\" [value]=\"type.id\">\n                        {{type.typeTitle}}\n                    </option>\n                </select>\n            </div>\n\n\n\n\n\n            <!--<div class=\"col-md-12\"><hr></div>-->\n\n            <div class=\"form-group col-md-4\">\n                <label>Email</label>\n                <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"employeeBasicForm.email\" required>\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label>Contact Number <span style=\"color: red\">*</span></label>\n                <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"phone\" [(ngModel)]=\"employeeBasicForm.contactNo\" required>\n            </div>\n            <div class=\"form-group col-md-4\">\n                <label>Alternative Number</label>\n                <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"alternative phone\" [(ngModel)]=\"employeeBasicForm.alterContactNo\" required>\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label>Date Of Birth <span style=\"color: red\">*</span></label>\n                <input type=\"date\" class=\"form-control\" name=\"birthdate\" [(ngModel)]=\"employeeBasicForm.birthdate\" required>\n            </div>\n\n\n            <!--<div class=\"col-md-12\"><hr></div>-->\n\n            <div class=\"form-group col-md-4\">\n                <label>Gender <span style=\"color: red\">*</span></label>\n\n                &nbsp;&nbsp;<p style=\"margin-left: 20px\">\n                <input  type=\"radio\" class=\"form-check-input\" value=\"M\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Male\n\n                &nbsp;&nbsp;&nbsp;\n                <input type=\"radio\" class=\"form-check-input\" value=\"F\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Female\n\n                &nbsp;&nbsp;&nbsp;\n                <input type=\"radio\" class=\"form-check-input\" value=\"O\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Other\n            </p>\n            </div>\n\n            <div class=\"form-group col-md-8\">\n                <label>Image</label>\n                <input type=\"file\" class=\"form-control\" name=\"photo\" placeholder=\"image\" (change)=\"onFileSelected($event)\">\n            </div>\n\n\n             <img  *ngIf=\"employeeBasicForm.photo\" [src]=\"employeeBasicForm.photo\" height=\"200\" width=\"200\">\n\n\n\n\n            <div class=\"form-group col-md-12\" align=\"right\" style=\"margin-top: 20px\" >\n                <button  class=\"btn btn-lg btn-success \" (click)=\"onSubmit()\">Save Data</button>\n            </div>\n\n\n\n        </div>\n    </div>\n\n</div>\n<div class=\"col-md-12\">\n    <hr>\n</div>\n<div>\n    <app-emergency-contact [empid]=\"empid\"></app-emergency-contact>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/basic-info/basic-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/basic-info/basic-info.component.ts ***!
  \********************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.error = [];
        this.employeeBasicForm = {
            id: '',
            EmployeeId: '',
            department: '',
            designation: '',
            empType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            nickName: '',
            email: '',
            contactNo: '',
            alterContactNo: '',
            birthdate: '',
            gender: '',
            photo: ''
        };
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Getting Departments
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'department/get').subscribe(function (data) {
            _this.department = data;
        }, function (error) {
            console.log(error);
        });
        //Getting Designations
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'designation/get').subscribe(function (data) {
            // console.log(data);
            _this.designation = data;
        }, function (error) {
            console.log(error);
        });
        //Getting Employee Types
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'employee_type/get').subscribe(function (data) {
            // console.log(data);
            _this.empType = data;
        }, function (error) {
            console.log(error);
        });
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'employee/basicinfo' + '?token=' + token, { empid: this.empid }).subscribe(function (data) {
            // console.log(data);
            _this.basicinfo = data;
            if (data != null) {
                _this.employeeBasicForm.id = _this.empid;
                _this.employeeBasicForm.EmployeeId = _this.basicinfo.EmployeeId;
                _this.employeeBasicForm.firstName = _this.basicinfo.firstName;
                _this.employeeBasicForm.middleName = _this.basicinfo.middleName;
                _this.employeeBasicForm.lastName = _this.basicinfo.lastName;
                _this.employeeBasicForm.email = _this.basicinfo.email;
                _this.employeeBasicForm.gender = _this.basicinfo.gender;
                _this.employeeBasicForm.birthdate = _this.basicinfo.birthdate;
                _this.employeeBasicForm.department = _this.basicinfo.fkDepartmentId;
                _this.employeeBasicForm.empType = _this.basicinfo.fkEmployeeType;
                _this.employeeBasicForm.designation = _this.basicinfo.fkDesignation;
                _this.employeeBasicForm.contactNo = _this.basicinfo.contactNo;
                _this.employeeBasicForm.alterContactNo = _this.basicinfo.alterContactNo;
                _this.employeeBasicForm.photo = _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].Image_URL + 'images/' + _this.basicinfo.photo;
                // console.log(this.employeeBasicForm.photo);
            }
            //this.empType=data;
        }, function (error) {
            console.log(error);
        });
    };
    BasicInfoComponent.prototype.selectDepartment = function (value) {
        this.employeeBasicForm.department = value;
    };
    BasicInfoComponent.prototype.selectDesignation = function (value) {
        this.employeeBasicForm.designation = value;
    };
    BasicInfoComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        // console.log(this.selectedFile);
    };
    BasicInfoComponent.prototype.checkRequiredFields = function () {
        if (this.employeeBasicForm.EmployeeId == '') {
            return false;
        }
        if (this.employeeBasicForm.firstName == '') {
            return false;
        }
        if (this.employeeBasicForm.lastName == '') {
            return false;
        }
        if (this.employeeBasicForm.gender == '') {
            return false;
        }
        if (this.employeeBasicForm.birthdate == '') {
            return false;
        }
        if (this.employeeBasicForm.department == '') {
            return false;
        }
        if (this.employeeBasicForm.empType == '') {
            return false;
        }
        if (this.employeeBasicForm.designation == '') {
            return false;
        }
        if (this.employeeBasicForm.contactNo == '') {
            return false;
        }
        return true;
    };
    BasicInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.checkRequiredFields()) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: 'Please Insert Mandatory Fields',
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        var fd = new FormData();
        var value = this.employeeBasicForm;
        for (var key in value) {
            fd.append(key, value[key]);
        }
        if (this.selectedFile) {
            fd.append('photo', this.selectedFile, this.selectedFile.name);
        }
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'employee/basic' + '?token=' + token, fd).subscribe(function (data) {
            // console.log(data);
            _this.result = data;
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: "Employee Updated Successfully",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            _this.router.navigate(['employee', 'edit', _this.result.id]);
        }, function (error) {
            var data = error.error.errors;
            for (var p in data) {
                for (var k in data[p]) {
                    _this.error.push(data[p][k]);
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], BasicInfoComponent.prototype, "empid", void 0);
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-info',
            template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/components/user/basic-info/basic-info.component.html"),
            styles: [__webpack_require__(/*! ./basic-info.component.css */ "./src/app/components/user/basic-info/basic-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/education/education.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/education/education.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/education/education.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/education/education.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Education\n  </div>\n\n  <div class=\"card-body\">\n\n\n    <!--<li *ngFor=\"let p of error\">-->\n      <!--{{p}}-->\n    <!--</li>-->\n    <div *ngFor=\"let p of error\" class=\"alert alert-danger\" role=\"alert\">\n      {{p}}\n    </div>\n\n\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-12\">\n        <label>Institution</label>\n        <input type=\"text\" name=\"institution\" [(ngModel)]=\"educationForm.institution\"  class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-5\">\n        <label>Degree</label>\n        <select class=\"form-control\" name=\"degree\"   (change)=\"selectDegree($event.target.value)\">\n          <option value=\"\">Select Degree</option>\n          <option *ngFor=\"let deg of degree\" [value]=\"deg.id\" [selected]=\"deg.id==educationForm.degreeId\">\n            {{deg.degreeName}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group col-md-1\">\n\n        <button style=\"margin-top: 30px\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Add New</button>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Passing Year</label>\n        <input type=\"text\" name=\"passingyear\" [(ngModel)]=\"educationForm.passingyear\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Board</label>\n        <input type=\"text\" name=\"board\"  [(ngModel)]=\"educationForm.board\" class=\"form-control\">\n      </div>\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Country</label>\n        <select class=\"form-control\" name=\"country\"   (change)=\"selectCountry($event.target.value)\">\n          <option value=\"\">Select Country</option>\n          <option *ngFor=\"let coun of country\" [value]=\"coun.code\" [selected]=\"coun.code == educationForm.country\">\n            {{coun.Name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Result </label>\n        <input type=\"text\" name=\"result\" [(ngModel)]=\"educationForm.result\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Result Out of</label>\n        <input type=\"text\" name=\"resultoutof\"  [(ngModel)]=\"educationForm.resultoutof\" class=\"form-control\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-12\" align=\"right \" >\n\n        <button style=\"margin-top: 32px\" class=\"btn btn-success\" (click)=\"saveEducation()\">Save Data</button>\n      </div>\n\n\n    </div>\n    <br>\n    <!--tabel for managment -->\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Institution</th>\n        <th>Degree Name</th>\n        <th>Result </th>\n        <th>Passing Year</th>\n        <th>Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr >\n      <tr *ngFor=\"let edu of educations\">\n        <td>{{edu.institution}}</td>\n        <td>{{edu.degreeName}}</td>\n        <td>{{edu.result}}</td>\n        <td>{{edu.passingYear}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"editEducation(edu)\" style=\"margin-left: 20px;\">Edit</button>\n          <button class=\"btn btn-danger\" (click)=\"deleteEducation(edu.id)\" style=\"margin-left: 20px;\">Delete</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<!--modal-->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add Degree</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n<form #education=\"ngForm\" (ngSubmit)=\"onSubmit(content)\">\n    <div class=\"form-group col-md-12\">\n      <label>Degree</label>\n      <input type=\"text\" name=\"degree\" [(ngModel)]=\"newdegree\" class=\"form-control\" required>\n      <button style=\"margin-top: 32px\" class=\"btn btn-success\"  [disabled]=\"!education.valid\"  >Submit</button>\n    </div>\n</form>\n\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n\n<hr>\n\n<pre>{{closeResult}}</pre>"

/***/ }),

/***/ "./src/app/components/user/education/education.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/education/education.component.ts ***!
  \******************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EducationComponent = /** @class */ (function () {
    function EducationComponent(modalService, http, token) {
        this.modalService = modalService;
        this.http = http;
        this.token = token;
        this.error = [];
        this.educationForm = {
            id: '',
            institution: '',
            degreeId: '',
            result: '',
            resultoutof: '',
            board: '',
            passingyear: '',
            country: '',
        };
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id: 'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id: 'friday', item_text: 'Friday' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        //Getting Deegree
        this.getAllDegree();
        this.getAlleducation();
        this.getAllCountry();
    };
    EducationComponent.prototype.getAllDegree = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'degree/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.degree = data;
        }, function (error) {
            console.log(error);
        });
    };
    EducationComponent.prototype.getAllCountry = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'country/basic' + '?token=' + token).subscribe(function (data) {
            console.log(data);
            _this.country = data;
        }, function (error) {
            console.log(error);
        });
    };
    EducationComponent.prototype.getAlleducation = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'education/get/' + this.empid + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.educations = data;
        }, function (error) {
            console.log(error);
        });
    };
    EducationComponent.prototype.selectCountry = function (value) {
        this.educationForm.country = value;
    };
    EducationComponent.prototype.editEducation = function (edu) {
        // console.log(edu);
        //this.educationForm.degree = edu.degree;
        this.educationForm.result = edu.result;
        this.educationForm.institution = edu.institution;
        this.educationForm.degreeId = edu.fkDegreeId;
        this.educationForm.board = edu.boardUnivarsity;
        this.educationForm.passingyear = edu.passingYear;
        this.educationForm.resultoutof = edu.resultOutOf;
        this.educationForm.country = edu.fkCountry;
        this.educationForm.id = edu.id;
        // console.log(edu.result);
    };
    EducationComponent.prototype.deleteEducation = function (id) {
        var _this = this;
        // console.log(id);
        if (!confirm("Are You Sure?")) {
            return false;
        }
        var token = this.token.get();
        // delete-education
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'delete-education' + '?token=' + token, { id: id }).subscribe(function (data) {
            // console.log(data);
            // this.result=data;
            _this.getAlleducation();
            $.alert({
                title: 'Success!',
                content: "Delete",
            });
        }, function (error) {
            console.log(error.message);
        });
    };
    EducationComponent.prototype.selectDegree = function (value) {
        this.educationForm.degreeId = value;
    };
    EducationComponent.prototype.openLg = function (content) {
        this.modalRef = this.modalService.open(content, {});
    };
    EducationComponent.prototype.saveEducation = function () {
        var _this = this;
        // education/post/{empId}
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'education/post/' + this.empid + '?token=' + token, this.educationForm).subscribe(function (data) {
            // console.log(data);
            _this.result = data;
            $.alert({
                title: 'Success!',
                content: _this.result.message,
            });
            _this.getAlleducation();
            _this.educationForm = {
                id: '',
                institution: '',
                degreeId: '',
                result: '',
                resultoutof: '',
                board: '',
                passingyear: '',
                country: '',
            };
        }, function (error) {
            var data = error.error.errors;
            for (var p in data) {
                for (var k in data[p]) {
                    _this.error.push(data[p][k]);
                }
            }
        });
        // console.log(this.educationForm);
    };
    EducationComponent.prototype.onSubmit = function (content) {
        var _this = this;
        var fd = new FormData();
        fd.append('degree', this.newdegree);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'degree/insert' + '?token=' + token, fd).subscribe(function (data) {
            // console.log(data);
            // this.result=data;
            $.alert({
                title: 'Success!',
                content: "added",
            });
            _this.getAllDegree();
        }, function (error) {
            console.log(error.message);
        });
        this.modalRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], EducationComponent.prototype, "empid", void 0);
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/user/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/user/education/education.component.css")],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/user/emergency-contact/emergency-contact.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/user/emergency-contact/emergency-contact.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/emergency-contact/emergency-contact.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/user/emergency-contact/emergency-contact.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h4 align=\"center\">\n      Emergency Contact\n    </h4>\n  </div>\n  <div class=\"card-body\">\n    <div *ngFor=\"let p of error\" class=\"alert alert-secondary\" role=\"alert\">\n      {{p}}\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group col-md-4\">\n\n          <label >First Name</label>\n\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"emergencyForm.firstName\" required>\n\n        </div>\n        <br>\n        <!--<div class=\"col-md-12\"><hr></div>-->\n        <div class=\" form-group col-md-4\">\n\n          <label >Middle Name</label>\n\n          <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\" [(ngModel)]=\"emergencyForm.middleName\" required>\n\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label >Last Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"emergencyForm.lastName\" required>\n        </div>\n\n\n        <div class=\"form-group col-md-4\">\n          <label>Contact Number</label>\n          <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"phone\" [(ngModel)]=\"emergencyForm.contactNo\" required>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label>Alternative Number</label>\n          <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"alternative phone\" [(ngModel)]=\"emergencyForm.alterContactNo\" required>\n        </div>\n      <div class=\"form-group col-md-4\">\n        <label>Relation</label>\n        <input type=\"text\" class=\"form-control\" name=\"relation\" placeholder=\"relation\" [(ngModel)]=\"emergencyForm.relation\" required>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n          <label>Address</label>\n          <textarea class=\"form-control\" [(ngModel)]=\"emergencyForm.address\"></textarea>\n      </div>\n\n        <div class=\"form-group col-md-12\">\n          <button class=\"btn btn-success pull-right\" (click)=\"submitForm()\">Submit</button>\n        </div>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/emergency-contact/emergency-contact.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user/emergency-contact/emergency-contact.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmergencyContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyContactComponent", function() { return EmergencyContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmergencyContactComponent = /** @class */ (function () {
    function EmergencyContactComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.error = [];
        this.emergencyForm = {
            fkemployeeId: '',
            firstName: '',
            middleName: '',
            lastName: '',
            contactNo: '',
            alterContactNo: '',
            relation: '',
            address: ''
        };
    }
    EmergencyContactComponent.prototype.ngOnInit = function () {
        this.emergencyForm.fkemployeeId = this.empid;
        // this.emergencyForm.address=this.empid;
        this.getEmergencyData();
    };
    EmergencyContactComponent.prototype.getEmergencyData = function () {
        var _this = this;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'emergency-contact/get', { fkemployeeId: this.empid }).subscribe(function (data) {
            // console.log(data);
            _this.form = data;
            _this.emergencyForm.firstName = _this.form.firstName;
            _this.emergencyForm.middleName = _this.form.middleName;
            _this.emergencyForm.lastName = _this.form.lastName;
            _this.emergencyForm.contactNo = _this.form.contactNo;
            _this.emergencyForm.alterContactNo = _this.form.alterContactNo;
            _this.emergencyForm.relation = _this.form.relation;
            _this.emergencyForm.address = _this.form.address;
            _this.emergencyForm.relation = _this.form.relation;
        }, function (error) {
            console.log(error);
        });
    };
    EmergencyContactComponent.prototype.submitForm = function () {
        var _this = this;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'emergency-contact/post', this.emergencyForm).subscribe(function (data) {
            // console.log(data);
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: 'Information Updated Successfully',
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
        }, function (error) {
            console.log(error);
            var data = error.error.errors;
            for (var p in data) {
                for (var k in data[p]) {
                    _this.error.push(data[p][k]);
                }
            }
        });
        console.log(this.emergencyForm);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], EmergencyContactComponent.prototype, "empid", void 0);
    EmergencyContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emergency-contact',
            template: __webpack_require__(/*! ./emergency-contact.component.html */ "./src/app/components/user/emergency-contact/emergency-contact.component.html"),
            styles: [__webpack_require__(/*! ./emergency-contact.component.css */ "./src/app/components/user/emergency-contact/emergency-contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EmergencyContactComponent);
    return EmergencyContactComponent;
}());



/***/ }),

/***/ "./src/app/components/user/employee/employee.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/employee/employee.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/employee/employee.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/employee/employee.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">Employee Details</div>\n\n    <div class=\"card-body\">\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" routerLink=\"add\" >Add New</a>  <br><br>\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n        <thead>\n        <tr>\n          <th>First Name</th>\n          <th>Middle Name</th>\n          <th>Last Name</th>\n          <th>Employee ID</th>\n          <th>Designation</th>\n          <th>Department</th>\n          <th>Action</th>\n        </tr>\n        </thead>\n\n        <tbody>\n\n        </tbody>\n\n      </table>\n\n\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/user/employee/employee.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/employee/employee.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/get' + '?token=' + token,
                type: 'POST'
            },
            columns: [
                { data: 'firstName', name: 'employeeinfo.firstName' },
                { data: 'middleName', name: 'employeeinfo.middleName' },
                { data: 'lastName', name: 'employeeinfo.lastName' },
                { data: 'EmployeeId', name: 'employeeinfo.EmployeeId' },
                { data: 'title', name: 'hrmdesignations.title' },
                { data: 'departmentName', name: 'hrmdepartments.departmentName' },
                {
                    "data": function (data, type, full) {
                        return ' <button class="btn btn-info" data-emp-id="' + data.empid + '"> Edit</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                }
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    EmployeeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                _this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
            }
        });
    };
    EmployeeComponent.prototype.getAllemployee = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.employee = data;
            _this.dtTrigger.next();
            // console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/components/user/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/components/user/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/user/joining-info/joining-info.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/joining-info/joining-info.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/joining-info/joining-info.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/joining-info/joining-info.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Joining Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Actual Join Date</label>\n\n        <input class=\"form-control\"\n               bsDatepicker\n                [(ngModel)]=\"employeeJoiningForm.actualJoinDate\"\n                [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Recent Join Date</label>\n        <input name=\"recentJoinDate\" bsDatepicker\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [(ngModel)]=\"employeeJoiningForm.recentJoinDate\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Resign Date</label>\n        <input bsDatepicker\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employeeJoiningForm.resignDate\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Supervisor</label>\n        <input type=\"text\" name=\"supervisor\" placeholder=\"name\" [(ngModel)]=\"employeeJoiningForm.supervisor\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Probation Period</label>\n        <input type=\"text\" name=\"probationPeriod\" placeholder=\"month\" [(ngModel)]=\"employeeJoiningForm.probationPeriod\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n\n        <!--<input type=\"text\" name=\"weekend\" placeholder=\"day\" [(ngModel)]=\"employeeJoiningForm.weekend\" class=\"form-control\">-->\n        <label>Weekend</label>\n        <ng-multiselect-dropdown\n                [placeholder]=\"'Select Weekend'\"\n                [data]=\"dropdownList\"\n                [(ngModel)]=\"selectedItems\"\n                [settings]=\"dropdownSettings\"\n                (onSelect)=\"onItemSelect($event)\"\n                (onDeSelect)=\"onItemDeSelect($event)\"\n\n        >\n        </ng-multiselect-dropdown>\n      </div>\n\n\n      <div class=\"form-group col-md-4\">\n        <label>Card Number</label>\n        <input type=\"text\" name=\"accessPin\" placeholder=\"pin\" [(ngModel)]=\"employeeJoiningForm.accessPin\" class=\"form-control\">\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label>Attendance Device Pin</label>\n        <input type=\"text\" name=\"accessPin\" placeholder=\"pin\" [(ngModel)]=\"employeeJoiningForm.attDeviceUserId\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label>Practice</label>\n        <input type=\"number\" name=\"practice\" placeholder=\"days\" [(ngModel)]=\"employeeJoiningForm.practice\"  class=\"form-control\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-4\">\n        <label>Shift</label>\n        <select class=\"form-control\" name=\"shift\"   (change)=\"selectShift($event.target.value)\">\n          <option value=\"\">Select Shift</option>\n          <option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\" [selected]=\"sh.shiftId==employeeJoiningForm.shiftId\">\n            {{sh.shiftName}}\n          </option>\n        </select>\n      </div>\n\n      <!--<div class=\"form-group col-md-6\">-->\n        <!--<label>Shift</label>-->\n        <!--<select class=\"form-control\" name=\"shift\"   (change)=\"selectShift($event.target.value)\">-->\n          <!--<option value=\"\">Select Shift</option>-->\n          <!--<option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\" [selected]=\"deg.id==educationForm.degreeId\">-->\n            <!--{{sh.shiftName}}-->\n          <!--</option>-->\n        <!--</select>-->\n      <!--</div>-->\n\n\n      <div class=\"form-group col-md-4\">\n        <label>Schedule In Time</label>\n        <input type=\"time\" name=\"scheduleInTime\" placeholder=\"in time\" [(ngModel)]=\"employeeJoiningForm.scheduleInTime\" class=\"form-control\" readonly>\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label>Schedule Out Time</label>\n        <input type=\"time\" name=\"scheduleOutTime\" placeholder=\"out time\" [(ngModel)]=\"employeeJoiningForm.scheduleOutTime\" class=\"form-control\" readonly>\n      </div>\n\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Special Allowance</label>\n        &nbsp;<input type=\"checkbox\" name=\"specialAllowance\" [(ngModel)]=\"employeeJoiningForm.specialAllowance\">\n      </div>\n\n\n\n\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\n      </div>\n\n\n      <!--Leave Limit-->\n      <div class=\"form-group col-md-12\">\n        <h5 align=\"center\">Leave Limit</h5>\n        <hr>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Total Leave</label>\n        <input type=\"text\" [(ngModel)]=\"totalLeaveAssigned\"  placeholder=\"total leave\" class=\"form-control\">\n      </div>\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Leave Taken</label>\n        <input type=\"number\" [(ngModel)]=\"leaveTaken\"  placeholder=\"total leave taken\" class=\"form-control\" readonly>\n      </div>\n\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-success\" (click)=\"submitLeaveLimit()\">Save Leave Limit</button>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/joining-info/joining-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/joining-info/joining-info.component.ts ***!
  \************************************************************************/
/*! exports provided: JoiningInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoiningInfoComponent", function() { return JoiningInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoiningInfoComponent = /** @class */ (function () {
    function JoiningInfoComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.employeeJoiningForm = {
            id: '',
            actualJoinDate: '',
            recentJoinDate: '',
            resignDate: '',
            weekend: '',
            accessPin: '',
            scheduleInTime: '',
            scheduleOutTime: '',
            specialAllowance: '',
            attDeviceUserId: '',
            shiftId: '',
            supervisor: '',
            probationPeriod: '',
            practice: ''
        };
        // DROPDOWN
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    JoiningInfoComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { item_id: 'saturday', item_text: 'Saturday' },
            { item_id: 'sunday', item_text: 'Sunday' },
            { item_id: 'monday', item_text: 'Monday' },
            { item_id: 'tuesday', item_text: 'Tuesday' },
            { item_id: 'wednesday', item_text: 'Wednesday' },
            { item_id: 'thursday', item_text: 'Thursday' },
            { item_id: 'friday', item_text: 'Friday' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.employeeJoiningForm.id = this.empid;
        this.getData();
        this.getShift();
        this.getLeaveLimit();
    };
    JoiningInfoComponent.prototype.getLeaveLimit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/limit/get' + '?token=' + token, { id: this.empid }).subscribe(function (data) {
            _this.temp = data;
            _this.totalLeaveAssigned = _this.temp.totalLeave;
            _this.leaveTaken = _this.temp.leaveTaken;
        }, function (error) {
            console.log(error);
        });
    };
    JoiningInfoComponent.prototype.submitLeaveLimit = function () {
        var _this = this;
        // console.log( this.totalLeaveAssigned);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/limit/post' + '?token=' + token, { id: this.empid, totalLeave: this.totalLeaveAssigned, leaveTaken: this.leaveTaken }).subscribe(function (data) {
            // console.log(data);
            _this.getLeaveLimit();
        }, function (error) {
            console.log(error);
        });
    };
    JoiningInfoComponent.prototype.getData = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'joinInfo/get' + '?token=' + token, { id: this.employeeJoiningForm.id }).subscribe(function (data) {
            console.log(data);
            _this.JoiningForm = data;
            _this.employeeJoiningForm.actualJoinDate = _this.JoiningForm.actualJoinDate;
            _this.employeeJoiningForm.recentJoinDate = _this.JoiningForm.recentJoinDate;
            _this.employeeJoiningForm.resignDate = _this.JoiningForm.resignDate;
            _this.employeeJoiningForm.weekend = _this.JoiningForm.weekend;
            _this.employeeJoiningForm.accessPin = _this.JoiningForm.accessPin;
            _this.employeeJoiningForm.practice = _this.JoiningForm.practice;
            // this.employeeJoiningForm.scheduleInTime=this.JoiningForm.scheduleInTime;
            // this.employeeJoiningForm.scheduleOutTime=this.JoiningForm.scheduleOutTime;
            _this.employeeJoiningForm.specialAllowance = _this.JoiningForm.specialAllowance;
            _this.employeeJoiningForm.attDeviceUserId = _this.JoiningForm.attDeviceUserId;
            _this.employeeJoiningForm.supervisor = _this.JoiningForm.supervisor;
            _this.employeeJoiningForm.probationPeriod = _this.JoiningForm.probationPeriod;
            // console.log(this.employeeJoiningForm.weekend);
            if (_this.employeeJoiningForm.weekend != "") {
                var weekArray = _this.employeeJoiningForm.weekend.split(',');
                var tempArray = [];
                for (var i = 0; i < weekArray.length; i++) {
                    tempArray.push({ item_id: weekArray[i], item_text: weekArray[i] });
                }
                _this.selectedItems = tempArray;
            }
        }, function (error) {
            console.log(error);
        });
    };
    JoiningInfoComponent.prototype.getShift = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'shift/get' + '?token=' + token).subscribe(function (data) {
            _this.shift = data;
        }, function (error) {
            console.log(error);
        });
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'user/shift/get' + '?token=' + token, { 'fkemployeeId': this.employeeJoiningForm.id }).subscribe(function (data) {
            // data.fkshiftId
            _this.userShitf = data;
            _this.employeeJoiningForm.shiftId = _this.userShitf.fkshiftId;
            _this.selectShift(_this.userShitf.fkshiftId);
        }, function (error) {
            console.log(error);
        });
    };
    JoiningInfoComponent.prototype.selectShift = function (value) {
        this.employeeJoiningForm.shiftId = value;
        var i = 0;
        for (i; i < this.shift.length; i++) {
            if (this.shift[i].shiftId == value) {
                this.employeeJoiningForm.scheduleInTime = this.shift[i].inTime;
                this.employeeJoiningForm.scheduleOutTime = this.shift[i].outTime;
                break;
            }
        }
    };
    JoiningInfoComponent.prototype.submit = function () {
        var _this = this;
        // console.log(this.employeeJoiningForm);
        this.employeeJoiningForm.weekend = this.selectedItems;
        var token = this.token.get();
        if (this.employeeJoiningForm.actualJoinDate != null) {
            this.employeeJoiningForm.actualJoinDate = new Date(this.employeeJoiningForm.actualJoinDate).toLocaleDateString();
        }
        if (this.employeeJoiningForm.recentJoinDate != null) {
            this.employeeJoiningForm.recentJoinDate = new Date(this.employeeJoiningForm.recentJoinDate).toLocaleDateString();
        }
        if (this.employeeJoiningForm.resignDate != null) {
            this.employeeJoiningForm.resignDate = new Date(this.employeeJoiningForm.resignDate).toLocaleDateString();
        }
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'joinInfo/post' + '?token=' + token, this.employeeJoiningForm).subscribe(function (data) {
            // console.log(data);
            // this.result=data;
            _this.getData();
            $.alert({
                title: 'Success!',
                content: 'Updated',
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], JoiningInfoComponent.prototype, "empid", void 0);
    JoiningInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joining-info',
            template: __webpack_require__(/*! ./joining-info.component.html */ "./src/app/components/user/joining-info/joining-info.component.html"),
            styles: [__webpack_require__(/*! ./joining-info.component.css */ "./src/app/components/user/joining-info/joining-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JoiningInfoComponent);
    return JoiningInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/personal-info/personal-info.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/user/personal-info/personal-info.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/personal-info/personal-info.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/personal-info/personal-info.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Personal Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Fathers Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"fatherName\" [(ngModel)]=\"employeePersonalForm.fatherName\" placeholder=\"father's name\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Mothers Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"motherName\" [(ngModel)]=\"employeePersonalForm.motherName\" placeholder=\"mother's name\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Marital Status</label>\n        <select class=\"form-control\" name=\"maritalStatus\" [(ngModel)]=\"employeePersonalForm.maritalStatus\" >\n          <option value=\"\">Select Status</option>\n          <option value=\"S\">Single</option>\n          <option value=\"M\">Married</option>\n          <option value=\"W\">Devorced</option>\n        </select>\n      </div>\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Spouse Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"spouseName\" [(ngModel)]=\"employeePersonalForm.spouseName\" placeholder=\"spouse\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Religion</label>\n        <select class=\"form-control\" name=\"religion\" [(ngModel)]=\"employeePersonalForm.fkReligion\">\n          <option value=\"\">Select religion</option>\n            <option *ngFor=\"let reli of religion\" [value]=\"reli.id\">\n                {{reli.religionName}}\n            </option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Nationality</label>\n        <select class=\"form-control\" name=\"fkNationality\" [(ngModel)]=\"employeePersonalForm.fkNationality\">\n          <option value=\"\">Select nationality</option>\n            <option *ngFor=\"let nation of nationality\" [value]=\"nation.code\">\n                {{nation.Name}}\n            </option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>National Id</label>\n        <input type=\"text\" class=\"form-control\" name=\"nationalId\" [(ngModel)]=\"employeePersonalForm.nationalId\" placeholder=\"National Id\">\n      </div>\n\n\n      <div class=\"col-md-12\">\n        <hr>\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Street</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentStreet\" [(ngModel)]=\"employeePersonalForm.presentStreet\" placeholder=\"present street\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Police Station</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentPS\" [(ngModel)]=\"employeePersonalForm.presentPS\" placeholder=\"present PS\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Zipcod</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentZipcod\" [(ngModel)]=\"employeePersonalForm.presentZipcod\" placeholder=\"Present Zip\">\n      </div>\n\n      <div class=\"col-md-12\">\n        <hr>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Street</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentStreet\" [(ngModel)]=\"employeePersonalForm.permanentStreet\" placeholder=\"permanent street\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Police Station</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentPS\" [(ngModel)]=\"employeePersonalForm.permanentPS\" placeholder=\"permanent PS\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Zipcod</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentZipcod\" [(ngModel)]=\"employeePersonalForm.permanentZipcod\" placeholder=\"permanent Zip\">\n      </div>\n\n      <div class=\"form-group col-md-12\">\n        <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/personal-info/personal-info.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/personal-info/personal-info.component.ts ***!
  \**************************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.employeePersonalForm = {
            id: '',
            fatherName: '',
            motherName: '',
            maritalStatus: '',
            spouseName: '',
            fkReligion: '',
            fkNationality: '',
            nationalId: '',
            presentStreet: '',
            presentPS: '',
            presentZipcod: '',
            permanentStreet: '',
            permanentPS: '',
            permanentZipcod: '',
        };
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeePersonalForm.id = this.empid;
        //Getting PersonalInfo
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'personalinfo/get' + '?token=' + token, { id: this.empid }).subscribe(function (data) {
            // console.log(data);
            _this.personlInfo = data;
            _this.employeePersonalForm.fatherName = _this.personlInfo.fatherName;
            _this.employeePersonalForm.motherName = _this.personlInfo.motherName;
            _this.employeePersonalForm.maritalStatus = _this.personlInfo.maritalStatus;
            _this.employeePersonalForm.spouseName = _this.personlInfo.spouseName;
            _this.employeePersonalForm.fkReligion = _this.personlInfo.fkReligion;
            _this.employeePersonalForm.fkNationality = _this.personlInfo.fkNationality;
            _this.employeePersonalForm.nationalId = _this.personlInfo.nationalId;
            _this.employeePersonalForm.presentStreet = _this.personlInfo.presentStreet;
            _this.employeePersonalForm.presentPS = _this.personlInfo.presentPS;
            _this.employeePersonalForm.presentZipcod = _this.personlInfo.presentZipcod;
            _this.employeePersonalForm.permanentStreet = _this.personlInfo.permanentStreet;
            _this.employeePersonalForm.permanentPS = _this.personlInfo.permanentPS;
            _this.employeePersonalForm.permanentZipcod = _this.personlInfo.permanentZipcod;
        }, function (error) {
            console.log(error);
        });
        //Getting Nationality
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'nationality/get').subscribe(function (data) {
            // console.log(data);
            _this.nationality = data;
        }, function (error) {
            console.log(error);
        });
        //Getting religion
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'religion/get').subscribe(function (data) {
            // console.log(data);
            _this.religion = data;
        }, function (error) {
            console.log(error);
        });
    };
    PersonalInfoComponent.prototype.submit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'employee/updatePersonalInfo' + '?token=' + token, this.employeePersonalForm).subscribe(function (data) {
            _this.result = data;
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: _this.result.message,
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], PersonalInfoComponent.prototype, "empid", void 0);
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/components/user/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/components/user/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/salary-info/salary-info.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/salary-info/salary-info.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/salary-info/salary-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/salary-info/salary-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Salary Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\">\n        <label>Consolidated Salary</label>\n        <input type=\"text\" name=\"consolidatedSalary\" placeholder=\"salary\"  [(ngModel)]=\"employeeSalaryForm.consolidatedSalary\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Payroll</label>\n        <input type=\"text\" name=\"payroll\" placeholder=\"payroll\" [(ngModel)]=\"employeeSalaryForm.payroll\" class=\"form-control\">\n      </div>\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/salary-info/salary-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/salary-info/salary-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: SalaryInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryInfoComponent", function() { return SalaryInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalaryInfoComponent = /** @class */ (function () {
    function SalaryInfoComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.employeeSalaryForm = {
            id: '',
            consolidatedSalary: '',
            payroll: ''
        };
    }
    SalaryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeSalaryForm.id = this.empid;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'SalryInfo/get' + '?token=' + token, { id: this.employeeSalaryForm.id }).subscribe(function (data) {
            _this.salaryForm = data;
            _this.employeeSalaryForm.consolidatedSalary = _this.salaryForm.consolidatedSalary;
            _this.employeeSalaryForm.payroll = _this.salaryForm.payroll;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.submit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'SalryInfo/post' + '?token=' + token, this.employeeSalaryForm).subscribe(function (data) {
            _this.result = data;
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: _this.result.message,
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], SalaryInfoComponent.prototype, "empid", void 0);
    SalaryInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-info',
            template: __webpack_require__(/*! ./salary-info.component.html */ "./src/app/components/user/salary-info/salary-info.component.html"),
            styles: [__webpack_require__(/*! ./salary-info.component.css */ "./src/app/components/user/salary-info/salary-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalaryInfoComponent);
    return SalaryInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-document/user-document.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/user/user-document/user-document.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-document/user-document.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/user-document/user-document.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">All Documents</div>\n  <div class=\"card-body\">\n\n    <h4>Uploaded</h4>\n    <hr>\n    <!--<ol>-->\n      <!--<li  *ngFor=\"let index of userUploadedFile\">-->\n       <!--File Name : {{index.title}}-->\n\n        <!--<a target=\"_blank\" href=\"{{imageUrl+index.path}}\" download class=\"btn btn-info btn-sm\" >Download</a>-->\n      <!--</li>-->\n    <!--</ol>-->\n\n    <table class=\"table table-striped\">\n      <tr *ngFor=\"let index of userUploadedFile\">\n        <td>{{index.title}}</td>\n        <td><a target=\"_blank\" href=\"{{imageUrl+index.path}}\" download class=\"btn btn-info btn-sm\" >Download</a></td>\n\n      </tr>\n    </table>\n\n\n\n\n    <h4>Add</h4>\n    <hr>\n    <div class=\"row\" *ngFor=\"let index of userDocumentFormArray;let i = index\">\n      <div class=\"form-group col-md-6\">\n\n        <label>Name</label>\n        <input type=\"text\" placeholder=\"title\" class=\"form-control\" [(ngModel)]=\"index.name\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Document</label>\n        <input type=\"file\" class=\"form-control\" name=\"photo\" placeholder=\"document\" (change)=\"onFileSelected(i,$event)\">\n      </div>\n\n    </div>\n    <button class=\"btn btn-info\" (click)=\"addMore()\">Add more</button>\n    <button class=\"btn btn-danger\" (click)=\"removeField()\">Remove</button>\n    <button class=\"btn btn-success\" (click)=\"submit()\">Submit</button>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/user-document/user-document.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-document/user-document.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDocumentComponent", function() { return UserDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDocumentComponent = /** @class */ (function () {
    function UserDocumentComponent(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.formNumber = [];
        this.userDocumentFormArray = [];
        this.imageUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].Image_URL;
    }
    UserDocumentComponent.prototype.ngOnInit = function () {
        this.getDocuments();
        // window.location.href='http://example.com/myuri/report?param=x';
        // let form={name:'',
        //   document:'',};
        // this.userDocumentFormArray.push(form);
        // console.log(this.userDocumentFormArray);
    };
    UserDocumentComponent.prototype.getDocuments = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'document/get' + '?token=' + token, { empId: this.empid }).subscribe(function (data) {
            console.log(data);
            _this.userUploadedFile = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDocumentComponent.prototype.addMore = function () {
        var form = { name: '',
            document: '', };
        this.userDocumentFormArray.push(form);
        // this.formNumber.push(this.formNumber.length);
        // console.log(this.userDocumentFormArray);
    };
    UserDocumentComponent.prototype.removeField = function () {
        this.formNumber.pop();
        this.userDocumentFormArray.pop();
    };
    UserDocumentComponent.prototype.onFileSelected = function (index, event) {
        var selectedFile = event.target.files[0];
        this.userDocumentFormArray[index].document = selectedFile;
    };
    UserDocumentComponent.prototype.submit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append("empId", this.empid);
        for (var i = 0; i < this.userDocumentFormArray.length; i++) {
            fd.append("name[]", this.userDocumentFormArray[i].name);
            fd.append('document[]', this.userDocumentFormArray[i].document, this.userDocumentFormArray[i].document.name);
        }
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'document/submit' + '?token=' + token, fd).subscribe(function (data) {
            $.alert({
                title: 'Success!',
                content: 'Updated',
            });
            _this.getDocuments();
            _this.userDocumentFormArray = [];
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empid'),
        __metadata("design:type", Object)
    ], UserDocumentComponent.prototype, "empid", void 0);
    UserDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-document',
            template: __webpack_require__(/*! ./user-document.component.html */ "./src/app/components/user/user-document/user-document.component.html"),
            styles: [__webpack_require__(/*! ./user-document.component.css */ "./src/app/components/user/user-document/user-document.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserDocumentComponent);
    return UserDocumentComponent;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "API_URL", {
        get: function () { return "http://192.168.3.20/hrsolution/backend/api/"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "Image_URL", {
        get: function () { return "http://192.168.3.20/hrsolution/backend/public/"; },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(token, router) {
        this.token = token;
        this.router = router;
    }
    AuthService.prototype.canActivate = function (route, state) {
        // return this.token.isValid();
        if (this.token.isValid()) {
            // all ok, proceed navigation to routed component
            return true;
        }
        else {
            // start a new navigation to redirect to login page
            this.router.navigate(['/']);
            // abort current navigation
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/check.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/check.service.ts ***!
  \*******************************************/
/*! exports provided: CheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckService", function() { return CheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckService = /** @class */ (function () {
    function CheckService() {
    }
    CheckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CheckService);
    return CheckService;
}());



/***/ }),

/***/ "./src/app/services/guest.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/guest.service.ts ***!
  \*******************************************/
/*! exports provided: GuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestService", function() { return GuestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestService = /** @class */ (function () {
    function GuestService(token, router) {
        this.token = token;
        this.router = router;
    }
    GuestService.prototype.canActivate = function (route, state) {
        // return !this.token.isValid();
        if (!this.token.isValid()) {
            // all ok, proceed navigation to routed component
            return true;
        }
        else {
            // start a new navigation to redirect to login page
            this.router.navigate(['/home']);
            // abort current navigation
            return false;
        }
    };
    GuestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuestService);
    return GuestService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenService = /** @class */ (function () {
    function TokenService(router, http) {
        this.router = router;
        this.http = http;
        this.token = false;
        // setInterval(() => {
        //   this.isTokenExpired();
        // }, 4000);
    }
    TokenService.prototype.setUser = function (user) {
        this.user = user;
    };
    TokenService.prototype.getUser = function () {
        return this.user;
    };
    //JWT Token
    TokenService.prototype.isTokenExpired = function () {
        var token = this.get();
        if (token) {
            var payload = token.split('.')[1];
            // if(Math.floor(this.decode(payload).exp) < Math.floor(new Date().getTime()/1000)){
            //   this.remove();
            //   console.log("Expired");
            // }
            // console.log("Exp :"+Math.floor(this.decode(payload).exp)+" Current :"+ Math.floor(new Date().getTime()/1000));
        }
    };
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
        // console.log(this.payload(token));
        // this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
        //       this.setUser(data);
        //
        //     },
        //     error => {
        //       console.log(error);
        //       // this.handleError(error);
        //
        //     }
        // );
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    TokenService.prototype.isValid = function () {
        var token = this.get();
        if (token) {
            var payload = this.payload(token);
            if (payload) {
                return payload.iss === _constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'login' ? true : false;
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        //If Token Expires Logout Autometically
        this.isTokenExpired();
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/hrsolution/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map