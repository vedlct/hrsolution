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
/*! exports provided: testPermissions, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPermissions", function() { return testPermissions; });
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
/* harmony import */ var _components_payroll_pay_salary_sheet_pay_salary_sheet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/payroll/pay-salary-sheet/pay-salary-sheet.component */ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.ts");
/* harmony import */ var _components_payroll_pay_advance_pay_advance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/payroll/pay-advance/pay-advance.component */ "./src/app/components/payroll/pay-advance/pay-advance.component.ts");
/* harmony import */ var _components_leave_add_leave_add_leave_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/leave/add-leave/add-leave.component */ "./src/app/components/leave/add-leave/add-leave.component.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_payroll_pay_grade_pay_grade_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/payroll/pay-grade/pay-grade.component */ "./src/app/components/payroll/pay-grade/pay-grade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { RouterModule, Routes } from '@angular/router';


























function testPermissions(route, state) {
    console.log(route.params);
    if (route.params['id'] === 42) {
        return ['MANAGER', "UTILS"];
    }
    else {
        return 'ADMIN';
    }
}
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
    { path: 'leave/apply', component: _components_leave_add_leave_add_leave_component__WEBPACK_IMPORTED_MODULE_24__["AddLeaveComponent"] },
    { path: 'report/attendance', component: _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_16__["AttendanceComponent"] },
    // { path: 'report/attendance/:id', component: ShowAttendanceComponent },
    { path: 'report/attendance/:id/:fromdate/:todate', component: _components_report_show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_17__["ShowAttendanceComponent"] },
    { path: 'team/show', component: _components_team_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_18__["CreateTeamComponent"] },
    { path: 'team/assign', component: _components_team_assign_team_assign_team_component__WEBPACK_IMPORTED_MODULE_19__["AssignTeamComponent"] },
    { path: 'payroll/setup', component: _components_payroll_pay_employee_salary_setup_pay_employee_salary_setup_component__WEBPACK_IMPORTED_MODULE_20__["PayEmployeeSalarySetupComponent"] },
    { path: 'payroll/payhead', component: _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_21__["PayHeadComponent"] },
    { path: 'payroll/salary-sheet', component: _components_payroll_pay_salary_sheet_pay_salary_sheet_component__WEBPACK_IMPORTED_MODULE_22__["PaySalarySheetComponent"] },
    { path: 'payroll/pay-advance',
        component: _components_payroll_pay_advance_pay_advance_component__WEBPACK_IMPORTED_MODULE_23__["PayAdvanceComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
    { path: 'payroll/pay-grade',
        component: _components_payroll_pay_grade_pay_grade_component__WEBPACK_IMPORTED_MODULE_26__["PayGradeComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['admin'],
                redirectTo: '/home'
            }
        }
    },
];
// @NgModule({
//     exports: [ RouterModule ],
//     imports: [ RouterModule.forRoot(routes) ],
// })
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-navbar *ngIf=\"isLogIn()\"></app-navbar>\r\n\r\n<ngx-spinner></ngx-spinner>\r\n<div class=\"wrapper\">\r\n  <div class=\"col-md-4\">\r\n    <!-- <app-add-department [master]=\"master\"></app-add-department> -->\r\n    <!-- <app-add-designaton></app-add-designaton> -->\r\n    <!--<app-pay-employee-salary-setup></app-pay-employee-salary-setup>-->\r\n    <!--<app-add-leave></app-add-leave>-->\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
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
    function AppComponent(permissionsService, ngxPermissionsConfigurationService, token, http, renderer2) {
        this.permissionsService = permissionsService;
        this.ngxPermissionsConfigurationService = ngxPermissionsConfigurationService;
        this.token = token;
        this.http = http;
        this.renderer2 = renderer2;
        this.title = 'app';
        this.master = 'Master';
        this.userModel = {};
        this.permission = ['guest'];
        this.token.isValid();
    }
    AppComponent.prototype.ngOnInit = function () {
        var perm = [];
        perm.push(this.token.getUserLocal().fkUserType);
        // console.log(perm);
        this.permissionsService.loadPermissions(perm);
        // fkUserType
        // console.log(this.token.getUserLocal());
        // this.permissionsService.loadPermissions(['admin']);
        //   this.token.getUser().subscribe(data => {
        //           this.userModel=data as User;
        //           let perm = [];
        //           perm.push(this.userModel.fkUserType);
        //           // console.log(perm);
        //           this.permissionsService.loadPermissions(perm);
        //       },
        //       error => {
        //           console.log(error);
        //
        //
        //       });
        // this.ngxPermissionsConfigurationService.addPermissionStrategy('disable', (tF: any) => {
        //     this.renderer2.setAttribute(tF.elementRef.nativeElement.nextSibling, 'disabled', 'true');
        // });
        // this.ngxPermissionsConfigurationService.setDefaultOnUnauthorizedStrategy('disable');
    };
    AppComponent.prototype.isLogIn = function () {
        return this.token.isValid();
    };
    AppComponent.prototype.unAuthorized = function () {
        console.log('unAuthorized');
    };
    AppComponent.prototype.authorized = function () {
        console.log('authorizes');
    };
    AppComponent.prototype.addPermission = function () {
        this.permissionsService.addPermission('CHECK_LOAD');
    };
    AppComponent.prototype.changeToAdmin = function () {
        this.permission = ['ADMIN'];
        console.log(this.permission);
    };
    AppComponent.prototype.changeToAnotherPermission = function () {
        this.permission = ['AWESOME'];
    };
    AppComponent.prototype.changeToGuest = function () {
        this.permission = ['GUEST'];
        console.log(this.permission);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsConfigurationService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
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
/* harmony import */ var _components_payroll_pay_salary_sheet_pay_salary_sheet_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/payroll/pay-salary-sheet/pay-salary-sheet.component */ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.ts");
/* harmony import */ var _components_payroll_pay_advance_pay_advance_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/payroll/pay-advance/pay-advance.component */ "./src/app/components/payroll/pay-advance/pay-advance.component.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _components_payroll_pay_grade_pay_grade_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/payroll/pay-grade/pay-grade.component */ "./src/app/components/payroll/pay-grade/pay-grade.component.ts");
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
                _components_payroll_pay_head_pay_head_component__WEBPACK_IMPORTED_MODULE_41__["PayHeadComponent"],
                _components_payroll_pay_salary_sheet_pay_salary_sheet_component__WEBPACK_IMPORTED_MODULE_42__["PaySalarySheetComponent"],
                _components_payroll_pay_advance_pay_advance_component__WEBPACK_IMPORTED_MODULE_43__["PayAdvanceComponent"],
                _components_payroll_pay_grade_pay_grade_component__WEBPACK_IMPORTED_MODULE_45__["PayGradeComponent"]
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
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_32__["NgMultiSelectDropDownModule"].forRoot(),
                ngx_permissions__WEBPACK_IMPORTED_MODULE_44__["NgxPermissionsModule"].forRoot()
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

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header-pills\">  <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Company</h3></div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Company Name</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"companyName\" [(ngModel)]=\"companyInfo.companyName\" placeholder=\"name\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Company Address</label>\r\n          <textarea class=\"form-control\" name=\"companyAddress\" [(ngModel)]=\"companyInfo.companyAddress\" placeholder=\"address\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Phone</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"companyInfo.phone\" placeholder=\"+8801.....\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Fax</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"fax\" [(ngModel)]=\"companyInfo.fax\" placeholder=\"fax\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Email</label>\r\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"companyInfo.email\" placeholder=\"abc@abc.com\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>WebSite</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"webSite\" [(ngModel)]=\"companyInfo.webSite\" placeholder=\"www\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Logo</label>\r\n          <input type=\"file\" class=\"form-control\"  name=\"logo\" (change)=\"onFileSelected($event)\" multiple>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Logo Url</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"logoUrl\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Status</label>\r\n          <select class=\"form-control\" name=\"fkActivationStatus\">\r\n            <option>Active</option>\r\n            <option>Inactive</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\" style=\"margin-top: 30px\">\r\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-2\">\r\n\r\n      <ul class=\"list-group \">\r\n        <li class=\"list-group-item\" ><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(1)\">Company Info </button></li>\r\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(2)\">Designation Info</button> </li>\r\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(3)\">Department Info</button> </li>\r\n        <li class=\"list-group-item\"><button style=\"background-color: #1FB0E5\" class=\"btn btn-block \" (click)=\"onInfoClick(4)\">Other</button> </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-10\">\r\n      <app-add-company *ngIf=\"infoFlag ==1\"></app-add-company>\r\n      <app-add-designaton *ngIf=\"infoFlag ==2\"></app-add-designaton>\r\n      <app-add-department [master]=\"master\" *ngIf=\"infoFlag ==3\"></app-add-department>\r\n      <app-company-other *ngIf=\"infoFlag ==4\"></app-company-other>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n"

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

module.exports = "\r\n<div class=\"col-md-4\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header-pills\">\r\n      <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Country</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n\r\n        <label>Country Name</label>\r\n        <input type=\"text\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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

module.exports = "<div class=\"card container\">\r\n  <div class=\"card-header-pills\">\r\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Department</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Department Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"dept name\" name=\"departmentName\" [(ngModel)]=\"departmentField.departmentName\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Department Level</label>\r\n        <input type=\"number\" class=\"form-control\" placeholder=\"level\" name=\"deptLevel\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-2\" *ngIf=\"checkId();else other_content\">\r\n        <button class=\"btn btn-success\" (click)=\"onSubmit()\">Insert</button>\r\n      </div>\r\n\r\n      <ng-template #other_content>\r\n        <div class=\"form-group col-md-2\">\r\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Update</button>\r\n        </div>\r\n      </ng-template>\r\n      <div class=\"form-group col-md-2\">\r\n        <button class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>Department Name</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let dept of departments\">\r\n        <td>{{dept.departmentName}}</td>\r\n        <td>\r\n          <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\r\n          <button class=\"btn btn-danger\" (click)=\"editDept(dept)\" style=\"margin-left: 20px;\"> Edit</button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header-pills\"> <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Designation</h3></div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Title</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"designationForm.title\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Short Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"shortName\" [(ngModel)]=\"designationForm.shortName\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Salary Grade</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"salaryGrade\" [(ngModel)]=\"designationForm.salaryGrade\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>desigLevel</label>\r\n        <!--<select name=\"desigLevel\" class=\"form-control\">-->\r\n          <!--<option>level 1</option>-->\r\n          <!--<option>level 2</option>-->\r\n          <!--<option>level 3</option>-->\r\n        <!--</select>-->\r\n        <input type=\"number\" class=\"form-control\" name=\"desigLevel\" [(ngModel)]=\"designationForm.desigLevel\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-2\" *ngIf=\"checkId();else other_content\">\r\n        <button class=\"btn btn-success\" (click)=\"onSubmit()\">Insert</button>\r\n      </div>\r\n\r\n      <ng-template #other_content>\r\n        <div class=\"form-group col-md-2\">\r\n          <button class=\"btn btn-success\" (click)=\"onSubmit()\">Update</button>\r\n        </div>\r\n      </ng-template>\r\n      <div class=\"form-group col-md-2\">\r\n        <button class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\r\n      </div>\r\n\r\n\r\n\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Designation Name</th>\r\n          <th>shortName</th>\r\n          <th>salaryGrade</th>\r\n          <th>desigLevel</th>\r\n          <th>Action</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let desig of designation\">\r\n          <td>{{desig.title}}</td>\r\n          <td>{{desig.shortName}}</td>\r\n          <td>{{desig.salaryGrade}}</td>\r\n          <td>{{desig.desigLevel}}</td>\r\n          <td>\r\n            <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\r\n            <button class=\"btn btn-danger\" style=\"margin-left: 20px;\" (click)=\"editDsig(desig)\">Edit</button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>"

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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Leave Assign</div>\r\n\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Start Date</label>\r\n          <input bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"startDate\" class=\"form-control input\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>End Date</label>\r\n          <input bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"endDate\" class=\"form-control input\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>No Of Days</label>\r\n          <input type=\"number\" class=\"form-control input\" [(ngModel)]=\"noOfDays\" placeholder=\"number of days\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Leave Category</label>\r\n          <select class=\"form-control input\" name=\"fkLeaveCategory\" [(ngModel)]=\"fkLeaveCategory\"  (change)=\"selectCategory($event.target.value)\">\r\n            <option value=\"\" selected>Select Category</option>\r\n            <option *ngFor=\"let lc of leaveCategories\" [value]=\"lc.id\">\r\n              {{lc.categoryName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Team</label>\r\n          <select class=\"form-control\" name=\"shift\" id=\"team\"  (change)=\"selectTeam($event.target.value)\">\r\n            <option value=\"\">Select Team</option>\r\n            <option *ngFor=\"let tm of team\" [value]=\"tm.teamId\">\r\n              {{tm.teamName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Remark</label>\r\n          <textarea class=\"form-control input\" [(ngModel)]=\"remark\" placeholder=\"remark\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignLeave()\">Assign</button>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\r\n          <th>Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Shift Name</th>\r\n          <th>Weekend</th>\r\n          <th>Shift Start</th>\r\n          <th>Team</th>\r\n\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Employee Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Shift</label>\r\n          <select class=\"form-control\" name=\"shift\"  (change)=\"selectShift($event.target.value)\">\r\n            <option value=\"\">Select Shift</option>\r\n            <option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\">\r\n              {{sh.shiftName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Start Date</label>\r\n          <input bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"startDate\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Weekend</label>\r\n          <ng-multiselect-dropdown\r\n                  [placeholder]=\"'Select Weekend'\"\r\n                  [data]=\"dropdownList\"\r\n                  [(ngModel)]=\"selectedItems\"\r\n                  [settings]=\"dropdownSettings\"\r\n                  (onSelect)=\"onItemSelect($event)\"\r\n                  (onSelectAll)=\"onSelectAll($event)\"\r\n          >\r\n          </ng-multiselect-dropdown>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Team</label>\r\n          <select class=\"form-control\" name=\"shift\" id=\"team\"  (change)=\"selectTeam($event.target.value)\">\r\n            <option value=\"\">Select Team</option>\r\n            <option *ngFor=\"let tm of team\" [value]=\"tm.teamId\">\r\n              {{tm.teamName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignShift()\">Assign</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\r\n          <th>First Name</th>\r\n          <th>Middle Name</th>\r\n          <th>Last Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Shift Name</th>\r\n          <th>Weekend</th>\r\n          <th>Shift Start</th>\r\n\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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
        this.getTeam();
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
    ShiftAssignComponent.prototype.getTeam = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'team/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.team = data;
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
    ShiftAssignComponent.prototype.selectTeam = function () {
        this.rerender();
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

module.exports = ".modal-dialog {\r\n    max-width: 60%;\r\n}"

/***/ }),

/***/ "./src/app/components/configuration/shift/shift.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/configuration/shift/shift.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--modal-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Shift</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Shift Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"shiftObj.shiftName\" placeholder=\"shift\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>In Time</label>\r\n        <input type=\"time\" [(ngModel)]=\"shiftObj.inTime\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Out Time</label>\r\n        <input type=\"time\" [(ngModel)]=\"shiftObj.outTime\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-md-12\">\r\n\r\n        <button class=\"btn btn-success pull-right\" (click)=\"onSubmit()\">Submit</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n<!--modal end-->\r\n<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Shift Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\" >Add New</a>  <br><br>\r\n      <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>Shift Name</th>\r\n          <th>In Time</th>\r\n          <th>Out Time</th>\r\n          <th>Action</th>\r\n        </tr>\r\n\r\n        </thead>\r\n        <tbody >\r\n\r\n        <tr  *ngFor=\"let shift of shifts\" >\r\n          <td>{{shift.shiftName}}</td>\r\n          <td>{{shift.inTime}}</td>\r\n          <td>{{shift.outTime}}</td>\r\n          <td>  <button class=\"btn btn-info\" (click)=\"edit(shift.shiftId,content)\"> Edit</button></td>\r\n\r\n        </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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

module.exports = ".redcolumn{\r\n    background: #FC7153 !important;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/configuration/show-leave/show-leave.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/configuration/show-leave/show-leave.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--modal-->\r\n<!-- The Modal -->\r\n<div class=\"modal\" id=\"myModal\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content \">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Edit</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Name</label>\r\n            <input class=\"form-control\" readonly value=\"{{employee.firstName+' '+employee.lastName}}\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Start Date</label>\r\n            <input bsDatepicker\r\n                   [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employee.startDate\" class=\"form-control input\" placeholder=\"start\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>End Date</label>\r\n            <input bsDatepicker\r\n                   [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employee.endDate\" class=\"form-control input\" placeholder=\"end\">\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>No Of Days</label>\r\n            <input type=\"number\" class=\"form-control input\" [(ngModel)]=\"employee.noOfDays\" placeholder=\"number of days\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Leave Category</label>\r\n            <select class=\"form-control input\" name=\"fkLeaveCategory\" [(ngModel)]=\"employee.fkLeaveCategory\">\r\n              <option value=\"\" selected>Select Category</option>\r\n              <option *ngFor=\"let lc of leaveCategories\" [value]=\"lc.id\">\r\n                {{lc.categoryName}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Remark</label>\r\n            <textarea class=\"form-control input\" [(ngModel)]=\"employee.remarks\" placeholder=\"cause\"></textarea>\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <button class=\"btn btn-success btn-sm\" (click)=\"updateLeave()\">Update</button>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Showing Leave Requests\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n\r\n    <table datatable class=\"table table-striped table-bordered\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n      <thead>\r\n      <tr>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Start</th>\r\n        <th>End</th>\r\n        <th>Days</th>\r\n        <th>Status</th>\r\n        <th>Action</th>\r\n\r\n      </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n</div>"

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








var ShowLeaveComponent = /** @class */ (function () {
    function ShowLeaveComponent(modalService, renderer, http, token, route, router) {
        this.modalService = modalService;
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.employee = {};
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
        this.getCategory();
    };
    ShowLeaveComponent.prototype.getCategory = function () {
        var _this = this;
        this.employee.fkLeaveCategory = "";
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/getLeaveCategory' + '?token=' + token).subscribe(function (data) {
            _this.leaveCategories = data;
        }, function (error) {
            console.log(error);
        });
    };
    ShowLeaveComponent.prototype.getData = function () {
        var token = this.token.get();
        this.dtOptions = {
            stateSave: true,
            "createdRow": function (row, data, dataIndex) {
                if (data['applicationStatus'] == 'Pending') {
                    $('td', row).css('background-color', '#FC7153');
                    $('td', row).css('color', 'white');
                }
                if (data['applicationStatus'] == 'Rejected') {
                    // $('td', row).css('background-color', '#FC7153');
                    $('td', row).css('color', 'red');
                }
            },
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
                {
                    "data": function (data, type, full) {
                        return '<div class="dropdown">\n' +
                            '  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n' +
                            '  </button>\n' +
                            '  <div class="dropdown-menu">\n' +
                            '    <button class="dropdown-item" data-approve-id="' + data.id + '">Approve</button>\n' +
                            '    <button class="dropdown-item" data-reject-id="' + data.id + '">Reject</button>\n' +
                            '    <button class="dropdown-item" data-edit-id="' + data.id + '" >Edit</button>\n' +
                            '  </div>\n' +
                            '</div>';
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
    ShowLeaveComponent.prototype.temp = function (data) {
        console.log(data);
    };
    ShowLeaveComponent.prototype.edit = function (id) {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/get/individual' + '?token=' + token, { id: id }).subscribe(function (data) {
            console.log(data);
            _this.employee = data;
            $('#myModal').modal();
        }, function (error) {
            console.log(error);
        });
    };
    ShowLeaveComponent.prototype.changeStatus = function (id, status) {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/change/status' + '?token=' + token, { id: id, applicationStatus: status }).subscribe(function (data) {
            _this.rerender();
        }, function (error) {
            console.log(error);
        });
    };
    ShowLeaveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            // this.approved();
            if (event.target.hasAttribute("data-approve-id")) {
                var id = event.target.getAttribute("data-approve-id");
                _this.changeStatus(id, 'Approved');
            }
            else if (event.target.hasAttribute("data-reject-id")) {
                var id = event.target.getAttribute("data-reject-id");
                _this.changeStatus(id, 'Rejected');
            }
            else if (event.target.hasAttribute("data-edit-id")) {
                var id = event.target.getAttribute("data-edit-id");
                _this.edit(id);
            }
        });
    };
    ShowLeaveComponent.prototype.openLg = function (content) {
        // this.shiftObj={};
        this.modalRef = this.modalService.open(content, { size: 'lg' });
    };
    ShowLeaveComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ShowLeaveComponent.prototype.updateLeave = function () {
        var _this = this;
        var form = {
            // allEmp:this.allEmp,
            id: this.employee.id,
            startDate: new Date(this.employee.startDate).toLocaleDateString(),
            endDate: new Date(this.employee.endDate).toLocaleDateString(),
            noOfDays: this.employee.noOfDays,
            remark: this.employee.remark,
            fkLeaveCategory: this.employee.fkLeaveCategory,
        };
        // leave/assignLeavePersonal
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'leave/individual/update' + '?token=' + token, form).subscribe(function (data) {
            console.log(data);
            $('#myModal').modal('hide');
            _this.rerender();
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: 'Leave Updated',
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
    ShowLeaveComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
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
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

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

module.exports = ".redcolumn{\r\n    background: #FC7153 !important;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/leave/add-leave/add-leave.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/leave/add-leave/add-leave.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header-pills\">\r\n      <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Leave</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Start Date</label>\r\n          <input bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employee.startDate\" class=\"form-control input\" placeholder=\"start\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>End Date</label>\r\n          <input bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employee.endDate\" class=\"form-control input\" placeholder=\"end\">\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>No Of Days</label>\r\n          <input type=\"number\" class=\"form-control input\" [(ngModel)]=\"employee.noOfDays\" placeholder=\"number of days\">\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <label>Leave Category</label>\r\n          <select class=\"form-control input\" name=\"fkLeaveCategory\" [(ngModel)]=\"employee.fkLeaveCategory\">\r\n            <option value=\"\" selected>Select Category</option>\r\n            <option *ngFor=\"let lc of leaveCategories\" [value]=\"lc.id\">\r\n              {{lc.categoryName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Remark</label>\r\n          <textarea class=\"form-control input\" [(ngModel)]=\"employee.remark\" placeholder=\"cause\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignLeave()\">Assign</button>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <hr>\r\n        </div>\r\n\r\n        <h4 class=\"col-md-12\" align=\"center\">My Leave</h4>\r\n\r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <th style=\"text-align: center\">applicationDate</th>\r\n            <th style=\"text-align: center\">fkLeaveCategory</th>\r\n            <th style=\"text-align: center\">applicationStatus</th>\r\n            <th style=\"text-align: center\">startDate</th>\r\n            <th style=\"text-align: center\">endDate</th>\r\n            <th style=\"text-align: center\">noOfDays</th>\r\n            <th style=\"text-align: center\">remarks</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let ml of myLeaves\" [ngClass]=\"(ml.applicationStatus=='Pending')?'redcolumn':''\">\r\n              <td style=\"text-align: center\">{{ml.applicationDate}}</td>\r\n              <td style=\"text-align: center\">{{ml.categoryName}}</td>\r\n              <td style=\"text-align: center\">{{ml.applicationStatus}}</td>\r\n              <td style=\"text-align: center\">{{ml.startDate}}</td>\r\n              <td style=\"text-align: center\">{{ml.endDate}}</td>\r\n              <td style=\"text-align: center\">{{ml.noOfDays}}</td>\r\n              <td style=\"text-align: center\">{{ml.remarks}}</td>\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

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





var AddLeaveComponent = /** @class */ (function () {
    function AddLeaveComponent(http, token, route, router) {
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.employee = {};
    }
    AddLeaveComponent.prototype.ngOnInit = function () {
        this.getCategory();
        this.getMyLeaves();
    };
    AddLeaveComponent.prototype.getCategory = function () {
        var _this = this;
        this.employee.fkLeaveCategory = "";
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'leave/getLeaveCategory' + '?token=' + token).subscribe(function (data) {
            _this.leaveCategories = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddLeaveComponent.prototype.getMyLeaves = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'leave/get/individual' + '?token=' + token, {}).subscribe(function (data) {
            console.log(data);
            _this.myLeaves = data;
        }, function (error) {
            console.log(error);
        });
    };
    AddLeaveComponent.prototype.assignLeave = function () {
        var _this = this;
        var form = {
            // allEmp:this.allEmp,
            startDate: new Date(this.employee.startDate).toLocaleDateString(),
            endDate: new Date(this.employee.endDate).toLocaleDateString(),
            noOfDays: this.employee.noOfDays,
            remark: this.employee.remark,
            fkLeaveCategory: this.employee.fkLeaveCategory,
        };
        // leave/assignLeavePersonal
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'leave/assignLeavePersonal' + '?token=' + token, form).subscribe(function (data) {
            console.log(data);
            _this.getMyLeaves();
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
    AddLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-leave',
            template: __webpack_require__(/*! ./add-leave.component.html */ "./src/app/components/leave/add-leave/add-leave.component.html"),
            styles: [__webpack_require__(/*! ./add-leave.component.css */ "./src/app/components/leave/add-leave/add-leave.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"accountbg\"></div>\r\n<div class=\"wrapper-page\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"text-center\">\r\n        <b class=\"waves-effect waves-light\">HR Solution</b>\r\n      </h3>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n        {{error}}\r\n      </div>\r\n\r\n      <div align=\"center\">\r\n        <img src=\"assets/logo/TCL_logo.png\" height=\"150\" width=\"200\">\r\n      </div>\r\n\r\n      <div class=\"p-3\">\r\n        <form #loginForm=ngForm (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\" class=\"form-horizontal m-t-20\">\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"email\" name=\"email\" formControlName=\"email\" required autofocus>\r\n              <div *ngIf=\"submitted && f.email.errors\">\r\n                <div *ngIf=\"f.email.errors.required\" class=\"badge badge-danger\">Email required</div>\r\n                <div *ngIf=\"f.email.errors.email\" class=\"badge badge-danger\">must be a valid email</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n\r\n              <div *ngIf=\"submitted && f.password.errors\">\r\n                <div *ngIf=\"f.password.errors.required\" class=\"badge badge-danger\">password required</div>\r\n                <div *ngIf=\"f.password.errors.minlength\" class=\"badge badge-danger\">at least 6 characters </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group text-center row m-t-20\">\r\n            <div class=\"col-12\">\r\n              <!--<button class=\"btn btn-block btn-info\">Log In</button>-->\r\n              <button type=\"submit\" class=\"btn btn-block btn-info\" style=\"text-align: center\" >Sign in</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
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
    function LoginComponent(http, router, token, spinner, permissionsService, ngxPermissionsConfigurationService) {
        this.http = http;
        this.router = router;
        this.token = token;
        this.spinner = spinner;
        this.permissionsService = permissionsService;
        this.ngxPermissionsConfigurationService = ngxPermissionsConfigurationService;
        this.submitted = false;
        this.userModel = {};
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
        var _this = this;
        this.token.handle(data.access_token);
        this.token.getUser().subscribe(function (data) {
            _this.userModel = data;
            var perm = [];
            perm.push(_this.userModel.fkUserType);
            console.log(perm);
            _this.permissionsService.loadPermissions(perm);
        }, function (error) {
            console.log(error);
        });
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
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsConfigurationService"]])
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

module.exports = "<!-- Navigation Bar-->\r\n<header id=\"topnav\">\r\n  <div class=\"topbar-main\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"logo\">\r\n\r\n        <a routerLink=\"/home\" class=\"logo\">\r\n          <h3>HR</h3>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <div class=\"menu-extras topbar-custom\">\r\n        <!-- Search input -->\r\n        <div class=\"search-wrap\" id=\"search-wrap\">\r\n          <div class=\"search-bar\">\r\n            <input class=\"search-input\" type=\"search\" placeholder=\"Search\" />\r\n            <a href=\"#\" class=\"close-search toggle-search\" data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-close-circle\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <ul class=\"list-inline float-right mb-0\">\r\n          <!-- Search -->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link waves-effect toggle-search\" href=\"#\"  data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-magnify noti-icon\"></i>\r\n            </a>\r\n          </li>\r\n          <!-- Messages-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-email-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5><span class=\"badge badge-danger float-right\">745</span>Messages</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-2.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Charles M. Jones</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-3.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Thomas J. Mimms</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-4.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Luis M. Konrad</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- notification-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-bell-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5>Notification (3)</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\r\n                <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-cart-outline\"></i></div>\r\n                <p class=\"notify-details\"><b>Your order is placed</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-message\"></i></div>\r\n                <p class=\"notify-details\"><b>New Message received</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-martini\"></i></div>\r\n                <p class=\"notify-details\"><b>Your item is shipped</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- User-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-user text-muted\"></i> Profile</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-wallet text-muted\"></i> My Wallet</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><span class=\"badge badge-success pull-right m-t-5\">5</span><i class=\"dripicons-gear text-muted\"></i> Settings</a>\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"whoAmI($event)\"><i class=\"dripicons-lock text-muted\"></i> Who Am I</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\"><i class=\"dripicons-exit text-muted\"></i> Logout</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-item list-inline-item\">\r\n            <!-- Mobile menu toggle-->\r\n            <a class=\"navbar-toggle nav-link\">\r\n              <div class=\"lines\">\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n              </div>\r\n            </a>\r\n            <!-- End mobile menu toggle-->\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <!-- end menu-extras -->\r\n\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </div> <!-- end container -->\r\n  </div>\r\n  <!-- end topbar-main -->\r\n\r\n  <!-- MENU Start -->\r\n  <div class=\"navbar-custom\">\r\n    <div class=\"container-fluid\">\r\n      <div id=\"navigation\">\r\n        <!-- Navigation Menu-->\r\n        <ul class=\"navigation-menu\">\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/home\" ><i class=\"ti-home\"></i>Dashboard</a>\r\n          </li>\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a href=\"#\"><i class=\"ti-bookmark-alt\"></i>Components</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"has-submenu\" *ngxPermissionsOnly=\"['admin']\">\r\n                <a href=\"#\">Shift</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"configuration/shift\">All Shift</a></li>\r\n                  <li><a routerLink=\"configuration/shift/assign\">Shift Assign</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Leave</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"leave/apply\">Apply Leave</a></li>\r\n                  <li><a routerLink=\"configuration/leave\" *ngxPermissionsOnly=\"['admin']\">Create Leave</a></li>\r\n                  <li><a routerLink=\"configuration/leave/show\" *ngxPermissionsOnly=\"['admin']\">Show Leave</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n\r\n              <li class=\"has-submenu\" *ngxPermissionsOnly=\"['admin']\">\r\n                <a href=\"#\">User</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"user/add\">Add User</a></li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"has-submenu\" *ngxPermissionsOnly=\"['admin']\">\r\n                <a href=\"#\">Employee</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"employee\">Employee</a></li>\r\n                  <li><a routerLink=\"employee/add\">Add Employee</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\" >\r\n                <a href=\"#\">Company</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"company/add\">Company Info</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Report</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"\">\r\n                <a routerLink=\"report/attendance\">Attendance</a>\r\n\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\" *ngxPermissionsOnly=\"['admin']\">\r\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Team</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"\">\r\n                <a routerLink=\"team/show\">Show Team</a>\r\n                <a routerLink=\"team/assign\">Assign Team</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\" *ngxPermissionsOnly=\"['admin']\">\r\n            <a routerLink=\"#\" ><i class=\"fa fa-chart\"></i>Payroll</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"\">\r\n                <a routerLink=\"payroll/pay-grade\">Pay Grade</a>\r\n                <a routerLink=\"payroll/payhead\">Pay Head</a>\r\n                <a routerLink=\"payroll/salary-sheet\">Salary Sheet</a>\r\n                <a routerLink=\"payroll/pay-advance\">Advance Payment</a>\r\n\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n          <!--<li class=\"has-submenu\">-->\r\n            <!--<a href=\"#\"><i class=\"ti-files\"></i>Pages</a>-->\r\n            <!--<ul class=\"submenu megamenu\">-->\r\n              <!--<li>-->\r\n                <!--<ul>-->\r\n                  <!--<li><a routerLink=\"/login\">Login</a></li>-->\r\n                <!--</ul>-->\r\n              <!--</li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n\r\n        </ul>\r\n        <!-- End navigation menu -->\r\n      </div> <!-- end #navigation -->\r\n    </div> <!-- end container -->\r\n  </div> <!-- end navbar-custom -->\r\n\r\n\r\n\r\n\r\n</header>\r\n<!-- End Navigation Bar-->\r\n\r\n"

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
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
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
    function NavbarComponent(permissionsService, http, token) {
        this.permissionsService = permissionsService;
        this.http = http;
        this.token = token;
        this.userModel = {};
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
        this.tokenUser = {};
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.token.getUser().subscribe(data => {
        //         this.userModel=data as User;
        //         // this.tokenUser=this.userModel;
        //
        //         let perm = [];
        //         perm.push(this.userModel.fkUserType);
        //         console.log(perm);
        //         this.permissionsService.loadPermissions(perm);
        //     },
        //     error => {
        //         console.log(error);
        //
        //
        //     });
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
        __metadata("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/pay-advance/pay-advance.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/payroll/pay-advance/pay-advance.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/pay-advance/pay-advance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/payroll/pay-advance/pay-advance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">Employee Advance Salary</div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                <thead>\r\n                <tr>\r\n                    <th>First Name</th>\r\n                    <th>Middle Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Employee ID</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n\r\n                </tbody>\r\n\r\n            </table>\r\n\r\n        </div>\r\n\r\n\r\n\r\n       <hr>\r\n        <h4 align=\"center\">Salary Advance</h4>\r\n\r\n        <div class=\"row\" style=\"padding: 20px;\">\r\n            <div class=\"form-group col-md-12\">\r\n                <label>Employee</label>\r\n                <input class=\"form-control\" placeholder=\"name\" type=\"text\" [(ngModel)]=\"payAdvanceModel.empName\" readonly>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Advance Date</label>\r\n                <input class=\"form-control\" placeholder=\"date\" [(ngModel)]=\"payAdvanceModel.advanceDate\" type=\"date\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Start Date</label>\r\n                <input class=\"form-control\" [(ngModel)]=\"payAdvanceModel.startDate\" placeholder=\"start date\"  type=\"date\">\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Amount</label>\r\n                <input class=\"form-control\" placeholder=\"TK\" [(ngModel)]=\"payAdvanceModel.amount\" type=\"number\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Return Rate</label>\r\n                <input class=\"form-control\" placeholder=\"%\" [(ngModel)]=\"payAdvanceModel.returnRate\" type=\"number\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Status</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"payAdvanceModel.status\">\r\n                    <option value=\"\">Select status</option>\r\n                    <option value=\"running\">Running</option>\r\n                    <option value=\"complete\">Complete</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <label>DESCRIPTION</label>\r\n                <input class=\"form-control\" placeholder=\"description\" [(ngModel)]=\"payAdvanceModel.description\" type=\"text\">\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group col-md-12\">\r\n                <button class=\"btn btn-info pull-right\" (click)=\"payAdvanceSubmit()\">Submit</button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/pay-advance/pay-advance.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/payroll/pay-advance/pay-advance.component.ts ***!
  \*************************************************************************/
/*! exports provided: PayAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayAdvanceComponent", function() { return PayAdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayAdvanceComponent = /** @class */ (function () {
    function PayAdvanceComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.payAdvanceModel = {};
    }
    PayAdvanceComponent.prototype.ngOnInit = function () {
        this.payAdvanceModel.status = "";
        this.payAdvanceModel.empName = "";
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].API_URL + 'employee/get' + '?token=' + token,
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
                        return ' <button class="btn btn-info" data-emp-id="' + data.empid + '" data-emp-name="' + data.firstName + ' ' + data.middleName + ' ' + data.lastName + '">Select</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                }
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            // pageLength: 5,
            "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        };
    };
    PayAdvanceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                // this.router.navigate(["employee/edit/" + event.target.getAttribute("data-emp-id")]);
                // alert(event.target.getAttribute("data-emp-id"));
                _this.payAdvanceModel.empId = event.target.getAttribute("data-emp-id");
                _this.payAdvanceModel.empName = event.target.getAttribute("data-emp-name").replace(null, "");
            }
        });
    };
    PayAdvanceComponent.prototype.payAdvanceSubmit = function () {
        // this.payAdvanceModel.fkPayHeadId=this.model.payroll;
        //
        // console.log(this.payAdvanceModel);
        if (!this.payAdvanceModel.empId) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Employee",
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
        if (!this.payAdvanceModel.startDate) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Start Date",
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
        if (!this.payAdvanceModel.amount) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Amount",
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
        if (this.payAdvanceModel.status == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Status",
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
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].API_URL + 'payroll/payadvance/ledger' + '?token=' + token, this.payAdvanceModel).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    PayAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-advance',
            template: __webpack_require__(/*! ./pay-advance.component.html */ "./src/app/components/payroll/pay-advance/pay-advance.component.html"),
            styles: [__webpack_require__(/*! ./pay-advance.component.css */ "./src/app/components/payroll/pay-advance/pay-advance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PayAdvanceComponent);
    return PayAdvanceComponent;
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header-pills\">\r\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Employee Salary</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <pre>{{myForm.value | json}}</pre>\r\n    <form #myForm=\"ngForm\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Select Employee</label>\r\n\r\n          <select class=\"form-control\" name=\"fkEmployeeId\">\r\n            <option>Select Employee</option>\r\n            <option>Emp 1</option>\r\n            <option>Emp 2</option>\r\n            <option>Emp 3</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Amount</label>\r\n          <input type=\"number\" placeholder=\"tk\" name=\"amount\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Description</label>\r\n          <input type=\"text\" placeholder=\"description\" name=\"description\" class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Gross Percent</label>\r\n          <input type=\"number\" placeholder=\"grossPercent\"  name=\"grossPercent\" class=\"form-control\" [(ngModel)]=\"grossPercent\" required >\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <button class=\"btn btn-success\" [disabled]=\"!myForm.valid\">Submit</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

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

/***/ "./src/app/components/payroll/pay-grade/pay-grade.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/payroll/pay-grade/pay-grade.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/pay-grade/pay-grade.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/payroll/pay-grade/pay-grade.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Edit Pay-Grade Modal -->\r\n<div class=\"modal\" id=\"editGradeModal\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Edit Pay-grade</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Title</label>\r\n            <input class=\"form-control\" placeholder=\"pay-grade\"  [(ngModel)]=\"editPayGradeModel.gradeTitle\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>BASIC</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"basic\" name=\"BASIC\" [(ngModel)]=\"editPayGradeModel.BASIC\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb1Rate</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"eb1Rate\" [(ngModel)]=\"editPayGradeModel.eb1Rate\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb1MaxTime</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"year\" name=\"eb1MaxTime\" [(ngModel)]=\"editPayGradeModel.eb1MaxTime\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb2Rate</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"eb2Rate\" [(ngModel)]=\"editPayGradeModel.eb2Rate\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb2MaxTime</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"year\" name=\"eb2MaxTime\" [(ngModel)]=\"editPayGradeModel.eb2MaxTime\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>DESCRIPTION</label>\r\n            <input class=\"form-control\" placeholder=\"description\" name=\"DESCRIPTION\" [(ngModel)]=\"editPayGradeModel.DESCRIPTION\">\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <button class=\"btn btn-success btn-sm pull-right\" (click)=\"updatePaygrade()\">Insert</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4 align=\"center\">Pay-grade Setup</h4>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label>Title</label>\r\n            <input class=\"form-control\" placeholder=\"pay-grade\"  [(ngModel)]=\"payGradeModel.gradeTitle\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>BASIC</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"basic\" name=\"BASIC\" [(ngModel)]=\"payGradeModel.BASIC\">\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb1Rate</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"eb1Rate\" [(ngModel)]=\"payGradeModel.eb1Rate\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb1MaxTime</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"year\" name=\"eb1MaxTime\" [(ngModel)]=\"payGradeModel.eb1MaxTime\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb2Rate</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"eb2Rate\" [(ngModel)]=\"payGradeModel.eb2Rate\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>eb2MaxTime</label>\r\n            <input type=\"number\" class=\"form-control\" placeholder=\"year\" name=\"eb2MaxTime\" [(ngModel)]=\"payGradeModel.eb2MaxTime\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label>DESCRIPTION</label>\r\n            <input class=\"form-control\" placeholder=\"description\" name=\"DESCRIPTION\" [(ngModel)]=\"payGradeModel.DESCRIPTION\">\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <button class=\"btn btn-success btn-sm pull-right\" (click)=\"insertPaygrade()\">Insert</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <th>gradeTitle</th>\r\n          <th>BASIC</th>\r\n          <th>eb1Rate</th>\r\n          <th>eb1MaxTime</th>\r\n          <th>eb2Rate</th>\r\n          <th>eb2MaxTime</th>\r\n          <th>DESCRIPTION</th>\r\n          <th>Action</th>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let data of payGrades\">\r\n            <td>{{data.gradeTitle}}</td>\r\n            <td>{{data.BASIC}}</td>\r\n            <td>{{data.eb1Rate}}</td>\r\n            <td>{{data.eb1MaxTime}}</td>\r\n            <td>{{data.eb2Rate}}</td>\r\n            <td>{{data.eb2MaxTime}}</td>\r\n            <td>{{data.DESCRIPTION}}</td>\r\n            <td>\r\n              <button class=\"btn btn-sm btn-info\" (click)=\"editPayGrade(data)\">Edit</button>\r\n            </td>\r\n\r\n          </tr>\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n<!--=================================Details========================================-->\r\n\r\n\r\n      <!-- Edit Pay-Grade-Details Modal -->\r\n      <div class=\"modal\" id=\"editDetailModal\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit Pay-grade</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <!-- Modal body -->\r\n            <div class=\"modal-body\">\r\n              <div class=\"row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                  <label>Pay Grade</label>\r\n                  <select class=\"form-control\" name=\"fkGradeParentId\" [(ngModel)]=\"editPayDetailsModel.fkGradeParentId\">\r\n                    <option value=\"\">Select Pay-grade</option>\r\n                    <option *ngFor=\"let data of payGrades\" [value]=\"data.id\">\r\n                      {{data.gradeTitle}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                  <label>Head</label>\r\n                  <select class=\"form-control\" name=\"fkPayHeadId\" [(ngModel)]=\"editPayDetailsModel.fkPayHeadId\">\r\n                    <option value=\"\">Select Payhead</option>\r\n                    <option *ngFor=\"let data of payHeads\" [value]=\"data.id\">\r\n                      {{data.allowDeducTitle}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                  <label>Percent Of Basic</label>\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"percentOfBasic\" [(ngModel)]=\"editPayDetailsModel.percentOfBasic\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-12\">\r\n                  <button class=\"btn btn-success btn-sm pull-right\" (click)=\"updatePaygradeDetails()\">Insert</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- Modal footer -->\r\n            <div class=\"modal-footer\">\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <hr>\r\n      <h4 align=\"center\">Pay-grade Details</h4>\r\n      <div class=\"row\">\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Pay Grade</label>\r\n          <select class=\"form-control\" name=\"fkGradeParentId\" [(ngModel)]=\"payDetailsModel.fkGradeParentId\">\r\n            <option value=\"\">Select Pay-grade</option>\r\n            <option *ngFor=\"let data of payGrades\" [value]=\"data.id\">\r\n              {{data.gradeTitle}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Head</label>\r\n          <select class=\"form-control\" name=\"fkPayHeadId\" [(ngModel)]=\"payDetailsModel.fkPayHeadId\">\r\n          <option value=\"\">Select Payhead</option>\r\n          <option *ngFor=\"let data of payHeads\" [value]=\"data.id\">\r\n            {{data.allowDeducTitle}}\r\n          </option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-6\">\r\n          <label>Percent Of Basic</label>\r\n          <input type=\"number\" class=\"form-control\" placeholder=\"%\" name=\"percentOfBasic\" [(ngModel)]=\"payDetailsModel.percentOfBasic\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <button class=\"btn btn-success btn-sm pull-right\" (click)=\"insertPaygradeDetails()\">Insert</button>\r\n        </div>\r\n      </div>\r\n\r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n        <th>fkGradeParentId</th>\r\n        <th>fkPayHeadId</th>\r\n        <th>percentOfBasic</th>\r\n        <th>Action</th>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let data of payDetails\">\r\n          <td>{{data.gradeTitle}}</td>\r\n          <td>{{data.allowDeducTitle}}</td>\r\n          <td>{{data.percentOfBasic}}</td>\r\n          <td>\r\n            <button class=\"btn btn-sm btn-info\" (click)=\"editDetails(data)\">Edit</button>\r\n          </td>\r\n\r\n        </tr>\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/payroll/pay-grade/pay-grade.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/payroll/pay-grade/pay-grade.component.ts ***!
  \*********************************************************************/
/*! exports provided: PayGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayGradeComponent", function() { return PayGradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PayGradeComponent = /** @class */ (function () {
    function PayGradeComponent(modalService, http, token, route, router, spinner) {
        this.modalService = modalService;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.spinner = spinner;
        this.payGradeModel = {};
        this.editPayGradeModel = {};
        this.payDetailsModel = {};
        this.editPayDetailsModel = {};
    }
    PayGradeComponent.prototype.ngOnInit = function () {
        this.initModel();
        this.getPayheads();
        this.getPaygrades();
        this.getPayDetails();
    };
    PayGradeComponent.prototype.initModel = function () {
        // Parent
        this.payGradeModel = {};
        // Details
        this.payDetailsModel = {};
        this.payDetailsModel.fkGradeParentId = "";
        this.payDetailsModel.fkPayHeadId = "";
    };
    PayGradeComponent.prototype.getPayheads = function () {
        var _this = this;
        this.spinner.show();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/payhead/get').subscribe(function (data) {
            _this.spinner.hide();
            // console.log(data);
            _this.payHeads = data;
        }, function (error) {
            _this.spinner.hide();
            // this.error=error.error.error;
            console.log(error);
        });
    };
    PayGradeComponent.prototype.getPaygrades = function () {
        var _this = this;
        // payroll/paygradeparent/get
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradeparent/get' + '?token=' + token, {}).subscribe(function (data) {
            // console.log(data);
            _this.payGrades = data;
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent.prototype.getPayDetails = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradedetail/get' + '?token=' + token, {}).subscribe(function (data) {
            console.log(data);
            _this.payDetails = data;
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent.prototype.editPayGrade = function (data) {
        this.editPayGradeModel = data;
        // console.log(data);
        $('#editGradeModal').modal();
    };
    PayGradeComponent.prototype.editDetails = function (data) {
        this.editPayDetailsModel = data;
        // console.log(data);
        $('#editDetailModal').modal();
    };
    PayGradeComponent.prototype.insertPaygrade = function () {
        var _this = this;
        if (!this.payGradeModel.gradeTitle) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert Pay-grade",
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
        if (!this.payGradeModel.BASIC) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert basic",
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
        if (!this.payGradeModel.eb1Rate) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1Rate",
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
        if (!this.payGradeModel.eb1MaxTime) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        if (!this.payGradeModel.eb2Rate) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        if (!this.payGradeModel.eb2MaxTime) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradeparent/insert' + '?token=' + token, this.payGradeModel).subscribe(function (data) {
            // console.log(data);
            _this.initModel();
            _this.getPaygrades();
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent.prototype.updatePaygrade = function () {
        var _this = this;
        if (!this.editPayGradeModel.gradeTitle) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert Pay-grade",
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
        if (!this.editPayGradeModel.BASIC) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert basic",
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
        if (!this.editPayGradeModel.eb1Rate) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1Rate",
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
        if (!this.editPayGradeModel.eb1MaxTime) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        if (!this.editPayGradeModel.eb2Rate) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        if (!this.editPayGradeModel.eb2MaxTime) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Insert eb1MaxTime",
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
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradeparent/insert' + '?token=' + token, this.editPayGradeModel).subscribe(function (data) {
            // console.log(data);
            $('#editGradeModal').modal('hide');
            _this.initModel();
            _this.getPaygrades();
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent.prototype.insertPaygradeDetails = function () {
        var _this = this;
        if (this.payDetailsModel.fkGradeParentId == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-grade",
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
        if (this.payDetailsModel.fkPayHeadId == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-head",
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
        // console.log(this.payDetailsModel);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradedetail/insert' + '?token=' + token, this.payDetailsModel).subscribe(function (data) {
            // console.log(data);
            _this.initModel();
            _this.getPayDetails();
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent.prototype.updatePaygradeDetails = function () {
        var _this = this;
        if (this.editPayDetailsModel.fkGradeParentId == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-grade",
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
        if (this.editPayDetailsModel.fkPayHeadId == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Pay-head",
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
        // console.log(this.payDetailsModel);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].API_URL + 'payroll/paygradedetail/insert' + '?token=' + token, this.editPayDetailsModel).subscribe(function (data) {
            $('#editDetailModal').modal('hide');
            _this.initModel();
            _this.getPayDetails();
        }, function (error) {
            console.log(error);
        });
    };
    PayGradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-grade',
            template: __webpack_require__(/*! ./pay-grade.component.html */ "./src/app/components/payroll/pay-grade/pay-grade.component.html"),
            styles: [__webpack_require__(/*! ./pay-grade.component.css */ "./src/app/components/payroll/pay-grade/pay-grade.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PayGradeComponent);
    return PayGradeComponent;
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

module.exports = "<!--modal-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Pay Head</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Allow Deduc Title</label>\r\n                <input type=\"text\" [(ngModel)]=\"editModel.allowDeducTitle\" placeholder=\"allowDeducTitle\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n                <label>description</label>\r\n                <input type=\"text\" [(ngModel)]=\"editModel.description\" class=\"form-control\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Allow Deduction Type</label>\r\n\r\n                <select class=\"form-control\" name=\"allowDeducType\" [(ngModel)]=\"editModel.allowDeducType\"  required>\r\n                    <option selected value=\"\">Select type</option>\r\n                    <option>Allowance</option>\r\n                    <option>Deduction</option>\r\n                </select>\r\n                <!--<div *ngIf=\"myForm.submitted && allowDeducType.invalid\" class=\"alert alert-danger\">-->\r\n                    <!--<div *ngIf=\"allowDeducType.errors.required\">allowDeducType required</div>-->\r\n                <!--</div>-->\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Applicable</label>\r\n                    <input type=\"checkbox\"  name=\"applicable\" class=\"form-control\" [(ngModel)]=\"editModel.applicable\"  #applicable=\"ngModel\"   >\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-12\">\r\n\r\n                <button class=\"btn btn-success pull-right\" (click)=\"update()\">Submit</button>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"container\">\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-header-pills\">\r\n        <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Pay Head</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <!--<pre>{{myForm.value | json}}</pre>-->\r\n        <form #myForm=\"ngForm\" (ngSubmit)=\"myForm.form.valid && onSubmit()\" novalidate>\r\n            <div class=\"row\">\r\n\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Allow Deduction Title</label>\r\n                    <input class=\"form-control\" placeholder=\"title\" required [(ngModel)]=\"model.allowDeducTitle\" #allowDeducTitle=\"ngModel\" name=\"allowDeducTitle\">\r\n\r\n                    <div *ngIf=\"myForm.submitted && allowDeducTitle.invalid\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"allowDeducTitle.errors.required\">Allow Deduction required</div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Description</label>\r\n                    <input type=\"text\" placeholder=\"description\" required [(ngModel)]=\"model.description\"  #description=\"ngModel\" class=\"form-control\" name=\"description\">\r\n                    <div *ngIf=\"myForm.submitted && description.invalid\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"description.errors.required\">Description required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Allow Deduction Type</label>\r\n\r\n                    <select class=\"form-control\" name=\"allowDeducType\" [(ngModel)]=\"model.allowDeducType\"  #allowDeducType=\"ngModel\" required>\r\n                        <option selected value=\"\">Select type</option>\r\n                        <option>Allowance</option>\r\n                        <option>Deduction</option>\r\n                    </select>\r\n                    <div *ngIf=\"myForm.submitted && allowDeducType.invalid\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"allowDeducType.errors.required\">allowDeducType required</div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label>Applicable</label>\r\n                    <input type=\"checkbox\"  name=\"applicable\" class=\"form-control\" [(ngModel)]=\"model.applicable\"  #applicable=\"ngModel\"   >\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <button class=\"btn btn-success\">Submit</button>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </form>\r\n\r\n\r\n        <br>\r\n        <hr>\r\n        <h3 align=\"center\">All Pay Heads</h3>\r\n        <br>\r\n\r\n        <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\r\n            <thead>\r\n            <tr>\r\n                <th>Allow Deduc Title</th>\r\n                <th>Allow Deduc Type</th>\r\n                <th>Description</th>\r\n                <th>Applicable</th>\r\n                <th>Action</th>\r\n            </tr>\r\n\r\n            </thead>\r\n            <tbody >\r\n\r\n            <tr  *ngFor=\"let data of payHeadData\" >\r\n                <td>{{data.allowDeducTitle}}</td>\r\n                <td>{{data.allowDeducType}}</td>\r\n                <td>{{data.description}}</td>\r\n                <td>{{data.applicable}}</td>\r\n                <td>  <button class=\"btn btn-info btn-sm\" (click)=\"edit(data,content)\"> Edit</button></td>\r\n                <!--<td>  <button class=\"btn btn-info\" (click)=\"edit(shift.shiftId,content)\"> Edit</button></td>-->\r\n\r\n            </tr>\r\n\r\n            </tbody>\r\n\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n</div>"

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
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
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
    function PayHeadComponent(permissionsService, modalService, renderer, http, token, route, router, spinner) {
        this.permissionsService = permissionsService;
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
        // const perm = ["Moderator", "EDITOR"];
        // this.permissionsService.loadPermissions(perm);
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
            // console.log(data);
            _this.model = [];
            _this.getData();
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
        var _this = this;
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'payroll/payhead/update', this.editModel).subscribe(function (data) {
            console.log(data);
            _this.modalRef.close();
            _this.getData();
        }, function (error) {
            console.log(error);
        });
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
        __metadata("design:paramtypes", [ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PayHeadComponent);
    return PayHeadComponent;
}());



/***/ }),

/***/ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Employee Salary Sheet</div>\r\n\r\n    <div class=\"card-body\">\r\n\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>First Name</th>\r\n          <th>Middle Name</th>\r\n          <th>Last Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>Action</th>\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"row\" style=\"padding: 20px;\">\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <label>Employee</label>\r\n        <input class=\"form-control\" placeholder=\"name\" type=\"text\" [(ngModel)]=\"payAdvanceModel.empName\" readonly>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Year</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"payAdvanceModel.salaryYear\">\r\n          <option value=\"\">Select Year</option>\r\n          <option value=\"2016\">2016</option>\r\n          <option value=\"2017\">2017</option>\r\n          <option value=\"2018\">2018</option>\r\n          <option value=\"2019\">2019</option>\r\n\r\n\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Month</label>\r\n        <select class=\"form-control\"  [(ngModel)]=\"payAdvanceModel.salaryMonth\">\r\n          <option value=\"\">Select Month</option>\r\n          <option value=\"1\">January</option>\r\n          <option value=\"2\">February</option>\r\n          <option value=\"3\">March</option>\r\n          <option value=\"4\">April</option>\r\n          <option value=\"5\">May</option>\r\n          <option value=\"6\">June</option>\r\n          <option value=\"7\">July</option>\r\n          <option value=\"8\">August</option>\r\n          <option value=\"9\">September</option>\r\n          <option value=\"10\">October</option>\r\n          <option value=\"11\">November</option>\r\n          <option value=\"10\">December</option>\r\n\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-12\">\r\n        <button class=\"btn btn-info pull-right\" (click)=\"getSalarySheet()\">Submit</button>\r\n      </div>\r\n\r\n      <hr>\r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <th style=\"text-align: center\">Head</th>\r\n          <th style=\"text-align: center\">Amount</th>\r\n          <th style=\"text-align: center\">Action</th>\r\n        </thead>\r\n        <tbody>\r\n        <tr  *ngFor=\"let data of salarySheetTable\" >\r\n          <td>{{data.allowDeducTitle}}</td>\r\n          <td>{{data.AMOUNT}}</td>\r\n          <td><button class=\"btn btn-info\" (click)=\"editSubSheet(data)\">edit</button></td>\r\n\r\n          <!--<td>  <button class=\"btn btn-info\" (click)=\"edit(shift.shiftId,content)\"> Edit</button></td>-->\r\n\r\n        </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n      <hr>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Payhead</label>\r\n        <input class=\"form-control\" placeholder=\"head\" type=\"text\" [(ngModel)]=\"subsheetModel.payhead\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Amount</label>\r\n        <input class=\"form-control\" placeholder=\"name\" type=\"text\" [(ngModel)]=\"subsheetModel.amount\">\r\n      </div>\r\n      <div class=\"form-group col-md-12\">\r\n        <label>Description</label>\r\n        <input class=\"form-control\" placeholder=\"\" type=\"text\" [(ngModel)]=\"subsheetModel.description\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <button class=\"btn btn-success\" (click)=\"updateSubSheet()\">edit</button>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PaySalarySheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySalarySheetComponent", function() { return PaySalarySheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/token.service */ "./src/app/services/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaySalarySheetComponent = /** @class */ (function () {
    function PaySalarySheetComponent(renderer, http, token, route, router) {
        this.renderer = renderer;
        this.http = http;
        this.token = token;
        this.route = route;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.payAdvanceModel = {};
        this.subsheetModel = {};
    }
    PaySalarySheetComponent.prototype.ngOnInit = function () {
        this.initiModel();
        var token = this.token.get();
        this.dtOptions = {
            ajax: {
                url: _constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].API_URL + 'employee/get' + '?token=' + token,
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
                        return ' <button class="btn btn-info" data-emp-id="' + data.empid + '" data-emp-name="' + data.firstName + ' ' + data.middleName + ' ' + data.lastName + '">Select</button>';
                    },
                    "orderable": false, "searchable": false, "name": "selected_rows"
                }
            ],
            processing: true,
            serverSide: true,
            pagingType: 'full_numbers',
            // pageLength: 5,
            "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        };
    };
    PaySalarySheetComponent.prototype.initiModel = function () {
        // this.payAdvanceModel.status = "";
        // this.payAdvanceModel.empName = "";
    };
    PaySalarySheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dtTrigger.next();
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (event.target.hasAttribute("data-emp-id")) {
                _this.payAdvanceModel.fkEmployeeId = event.target.getAttribute("data-emp-id");
                _this.payAdvanceModel.empName = event.target.getAttribute("data-emp-name").replace(null, "");
            }
        });
    };
    PaySalarySheetComponent.prototype.getSalarySheet = function () {
        // console.log(this.payAdvanceModel);
        var _this = this;
        if (!this.payAdvanceModel.fkEmployeeId) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Employee",
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
        if (!this.payAdvanceModel.salaryYear) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Year",
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
        if (!this.payAdvanceModel.salaryMonth) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Month",
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
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].API_URL + 'payroll/paysalarysheetmain/get' + '?token=' + token, this.payAdvanceModel).subscribe(function (data) {
            _this.salarySheetTable = data;
        }, function (error) {
            console.log(error);
        });
    };
    PaySalarySheetComponent.prototype.editSubSheet = function (data) {
        // console.log(data);
        this.subsheetModel.payhead = data.allowDeducTitle;
        this.subsheetModel.amount = data.AMOUNT;
        this.subsheetModel.description = data.DESCRIPTION;
        this.subsheetModel.id = data.paysalarysheetsub_id;
    };
    PaySalarySheetComponent.prototype.updateSubSheet = function () {
        var _this = this;
        if (!this.payAdvanceModel.id) {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please Select Salary Sheet",
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
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_5__["Constants"].API_URL + 'payroll/paysalarysheetsub/update' + '?token=' + token, this.subsheetModel).subscribe(function (data) {
            // console.log(data);
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: "Updated",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            _this.getSalarySheet();
            _this.subsheetModel = {};
        }, function (error) {
            console.log(error);
        });
    };
    PaySalarySheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pay-salary-sheet',
            template: __webpack_require__(/*! ./pay-salary-sheet.component.html */ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.html"),
            styles: [__webpack_require__(/*! ./pay-salary-sheet.component.css */ "./src/app/components/payroll/pay-salary-sheet/pay-salary-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PaySalarySheetComponent);
    return PaySalarySheetComponent;
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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"></div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label>From</label>\r\n          <input class=\"form-control\"\r\n                 bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\" id=\"startDate\">\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label>To</label>\r\n          <input class=\"form-control\"\r\n                 bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\"\r\n                 id=\"endDate\"\r\n          >\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <br>\r\n\r\n          <button class=\"btn btn-success\" (click)=\"search()\">Search</button>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <br>\r\n\r\n          <button class=\"btn btn-info pull-right\" (click)=\"generateExcel()\">Generate Report</button>\r\n        </div>\r\n\r\n      </div>\r\n      <hr>\r\n\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <!--<th>Middle Name</th>-->\r\n          <!--<th>Last Name</th>-->\r\n          <th>Department</th>\r\n          <th>Total Attendance</th>\r\n          <th>Total Late</th>\r\n          <th>Average Working hour</th>\r\n          <th>Total Leave</th>\r\n          <th>Weekend Count</th>\r\n          <th>Weekend</th>\r\n          <th>Action</th>\r\n        </tr>\r\n\r\n        </thead>\r\n      </table>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Comment</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Comment</label>\r\n        <textarea placeholder=\"remark\" class=\"form-control\" [(ngModel)]=\"comment\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-12\">\r\n\r\n        <button class=\"btn btn-success pull-right\" (click)=\"insertComment()\">Submit</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-3\">\r\n          <label>From</label>\r\n          <input class=\"form-control\"\r\n                 bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\" id=\"startDate\">\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label>To</label>\r\n          <input class=\"form-control\"\r\n                 bsDatepicker\r\n                 [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\"\r\n                 id=\"endDate\"\r\n          >\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <br>\r\n\r\n          <button class=\"btn btn-success \" (click)=\"search()\">Search</button>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-3\">\r\n          <br>\r\n\r\n          <button class=\"btn btn-info pull-right\" (click)=\"commentModal(content)\" *ngxPermissionsOnly=\"['admin']\">Add Comment</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n      <!--<table datatable class=\"table\" >-->\r\n        <thead>\r\n        <tr>\r\n          <th>attDeviceUserId</th>\r\n          <th>firstName</th>\r\n          <th>attendanceDate</th>\r\n          <th>checkInFull</th>\r\n          <th>checkoutFull</th>\r\n          <th>late</th>\r\n          <th>lateTime</th>\r\n          <th>scheduleIn</th>\r\n          <th>scheduleOut</th>\r\n          <th>workingTime</th>\r\n        </tr>\r\n\r\n        </thead>\r\n      </table>\r\n\r\n<br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          <hr>\r\n          <h4 align=\"center\"><b>Leave</b></h4>\r\n          <hr>\r\n\r\n          <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions2\" [dtTrigger]=\"dtTrigger2\">\r\n            <thead>\r\n            <tr>\r\n\r\n              <th>Start Date</th>\r\n              <th>End Date</th>\r\n              <th>Days</th>\r\n              <th>Cause</th>\r\n              <th>Category</th>\r\n\r\n            </tr>\r\n\r\n            </thead>\r\n            <tbody >\r\n\r\n            <tr  *ngFor=\"let leave of leaves\" >\r\n              <td>{{leave.startDate}}</td>\r\n              <td>{{leave.endDate}}</td>\r\n              <td>{{leave.noOfDays}}</td>\r\n              <td>{{leave.remarks}}</td>\r\n              <td>{{leave.categoryName}}</td>\r\n\r\n            </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <hr>\r\n          <h4 align=\"center\"><b>Comments</b></h4>\r\n          <hr>\r\n\r\n          <table class=\"table\">\r\n\r\n            <tr  *ngFor=\"let comment of allComments\" >\r\n              <td style=\"text-align: center\">{{comment.comment}}</td>\r\n\r\n\r\n            </tr>\r\n          </table>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "\r\n\r\n<div style=\"width: 60%;\" >\r\n  <table id=\"example\" class=\"table\" >\r\n    <thead>\r\n    <tr>\r\n      <th>Name</th>\r\n      <th>Position</th>\r\n      <th>Office</th>\r\n      <th>Age</th>\r\n      <th>Start date</th>\r\n      <th>Salary</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td>Tiger Nixon</td>\r\n      <td>System Architect</td>\r\n      <td>Edinburgh</td>\r\n      <td>61</td>\r\n      <td>2011/04/25</td>\r\n      <td>$320,800</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Garrett Winters</td>\r\n      <td>Accountant</td>\r\n      <td>Tokyo</td>\r\n      <td>63</td>\r\n      <td>2011/07/25</td>\r\n      <td>$170,750</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Ashton Cox</td>\r\n      <td>Junior Technical Author</td>\r\n      <td>San Francisco</td>\r\n      <td>66</td>\r\n      <td>2009/01/12</td>\r\n      <td>$86,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Cedric Kelly</td>\r\n      <td>Senior Javascript Developer</td>\r\n      <td>Edinburgh</td>\r\n      <td>22</td>\r\n      <td>2012/03/29</td>\r\n      <td>$433,060</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Airi Satou</td>\r\n      <td>Accountant</td>\r\n      <td>Tokyo</td>\r\n      <td>33</td>\r\n      <td>2008/11/28</td>\r\n      <td>$162,700</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Brielle Williamson</td>\r\n      <td>Integration Specialist</td>\r\n      <td>New York</td>\r\n      <td>61</td>\r\n      <td>2012/12/02</td>\r\n      <td>$372,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Herrod Chandler</td>\r\n      <td>Sales Assistant</td>\r\n      <td>San Francisco</td>\r\n      <td>59</td>\r\n      <td>2012/08/06</td>\r\n      <td>$137,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Rhona Davidson</td>\r\n      <td>Integration Specialist</td>\r\n      <td>Tokyo</td>\r\n      <td>55</td>\r\n      <td>2010/10/14</td>\r\n      <td>$327,900</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Colleen Hurst</td>\r\n      <td>Javascript Developer</td>\r\n      <td>San Francisco</td>\r\n      <td>39</td>\r\n      <td>2009/09/15</td>\r\n      <td>$205,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Sonya Frost</td>\r\n      <td>Software Engineer</td>\r\n      <td>Edinburgh</td>\r\n      <td>23</td>\r\n      <td>2008/12/13</td>\r\n      <td>$103,600</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Jena Gaines</td>\r\n      <td>Office Manager</td>\r\n      <td>London</td>\r\n      <td>30</td>\r\n      <td>2008/12/19</td>\r\n      <td>$90,560</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Quinn Flynn</td>\r\n      <td>Support Lead</td>\r\n      <td>Edinburgh</td>\r\n      <td>22</td>\r\n      <td>2013/03/03</td>\r\n      <td>$342,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Charde Marshall</td>\r\n      <td>Regional Director</td>\r\n      <td>San Francisco</td>\r\n      <td>36</td>\r\n      <td>2008/10/16</td>\r\n      <td>$470,600</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Haley Kennedy</td>\r\n      <td>Senior Marketing Designer</td>\r\n      <td>London</td>\r\n      <td>43</td>\r\n      <td>2012/12/18</td>\r\n      <td>$313,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Tatyana Fitzpatrick</td>\r\n      <td>Regional Director</td>\r\n      <td>London</td>\r\n      <td>19</td>\r\n      <td>2010/03/17</td>\r\n      <td>$385,750</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Michael Silva</td>\r\n      <td>Marketing Designer</td>\r\n      <td>London</td>\r\n      <td>66</td>\r\n      <td>2012/11/27</td>\r\n      <td>$198,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Paul Byrd</td>\r\n      <td>Chief Financial Officer (CFO)</td>\r\n      <td>New York</td>\r\n      <td>64</td>\r\n      <td>2010/06/09</td>\r\n      <td>$725,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Gloria Little</td>\r\n      <td>Systems Administrator</td>\r\n      <td>New York</td>\r\n      <td>59</td>\r\n      <td>2009/04/10</td>\r\n      <td>$237,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Bradley Greer</td>\r\n      <td>Software Engineer</td>\r\n      <td>London</td>\r\n      <td>41</td>\r\n      <td>2012/10/13</td>\r\n      <td>$132,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Dai Rios</td>\r\n      <td>Personnel Lead</td>\r\n      <td>Edinburgh</td>\r\n      <td>35</td>\r\n      <td>2012/09/26</td>\r\n      <td>$217,500</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Jenette Caldwell</td>\r\n      <td>Development Lead</td>\r\n      <td>New York</td>\r\n      <td>30</td>\r\n      <td>2011/09/03</td>\r\n      <td>$345,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Yuri Berry</td>\r\n      <td>Chief Marketing Officer (CMO)</td>\r\n      <td>New York</td>\r\n      <td>40</td>\r\n      <td>2009/06/25</td>\r\n      <td>$675,000</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Caesar Vance</td>\r\n      <td>Pre-Sales Support</td>\r\n      <td>New York</td>\r\n      <td>21</td>\r\n      <td>2011/12/12</td>\r\n      <td>$106,450</td>\r\n    </tr>\r\n\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n</div>\r\n"

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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Employee Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Team</label>\r\n          <select class=\"form-control\" name=\"shift\"  (change)=\"selectShift($event.target.value)\">\r\n            <option value=\"\">Select Team</option>\r\n            <option *ngFor=\"let tm of team\" [value]=\"tm.teamId\">\r\n              {{tm.teamName}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <button class=\"btn btn-success btn-sm\" (click)=\"assignTeam()\">Assign</button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <!--<input style=\"margin-left: 15px\" type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/><b>Select All</b><br>-->\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"text-align: center\"><input type=\"checkbox\" class=\"SelectAll\" id=\"selectall2\"  (click)=\"selectAll()\"/></th>\r\n          <th>First Name</th>\r\n          <th>Middle Name</th>\r\n          <th>Last Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Shift Name</th>\r\n          <th>Weekend</th>\r\n          <th>Team Name</th>\r\n\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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
                // console.log(id);
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
        // console.log(this.teamId);
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

module.exports = "\r\n<!--modal-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Shift</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Team Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"teamObj.teamName\" placeholder=\"shift\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-12\">\r\n\r\n        <button class=\"btn btn-success pull-right\" (click)=\"onSubmit()\">Submit</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n<!--modal end-->\r\n<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Team Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\" >Add New</a>  <br><br>\r\n      <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>Shift Name</th>\r\n          <th>Action</th>\r\n        </tr>\r\n\r\n        </thead>\r\n        <tbody >\r\n\r\n        <tr  *ngFor=\"let shift of teams\" >\r\n          <td>{{shift.teamName}}</td>\r\n          <!--<td>{{shift.inTime}}</td>-->\r\n          <!--<td>{{shift.outTime}}</td>-->\r\n          <td>  <button class=\"btn btn-info\" (click)=\"edit(shift.teamId,content)\"> Edit</button></td>\r\n\r\n        </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div style=\"background: black;padding: 0; min-height: 860px; margin-left: -20px; margin-top:-33px;\" class=\"col-md-2\">\r\n\r\n      <ul style=\"margin-top: 25px; margin-left: 20px;\" class=\"list-group\">\r\n        <li class=\"list-group-item \" [class.active]=\"infoFlag == 1\"  (click)=\"onInfoClick(1)\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \">Basic Info </button></li>\r\n        <li class=\"list-group-item\"  [class.active]=\"infoFlag == 2\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(2)\">Personal Info</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 3\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(3)\">Education</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 4\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block\" (click)=\"onInfoClick(4)\">Joining Info</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 5\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(5)\">Bank Info </button></li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 6\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(6)\">Salary Info </button></li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 7\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(7)\">Documents </button></li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-10\">\r\n      <app-basic-info *ngIf=\"infoFlag ==1\" [empid]=\"empid\"></app-basic-info>\r\n      <app-personal-info *ngIf=\"infoFlag ==2\" [empid]=\"empid\"></app-personal-info>\r\n      <app-education *ngIf=\"infoFlag ==3\" [empid]=\"empid\"></app-education>\r\n      <app-joining-info *ngIf=\"infoFlag ==4\" [empid]=\"empid\"></app-joining-info>\r\n      <app-bank-info *ngIf=\"infoFlag ==5\" [empid]=\"empid\"></app-bank-info>\r\n      <app-salary-info *ngIf=\"infoFlag ==6\" [empid]=\"empid\"></app-salary-info>\r\n      <app-user-document *ngIf=\"infoFlag ==7\" [empid]=\"empid\"></app-user-document>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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

module.exports = "\r\n<!--<pre>{{closeResult}}</pre>-->\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Personal Details</div>\r\n    <div class=\"card-body\">\r\n      <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" >\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"userinput.name\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Email</label>\r\n          <input class=\"form-control\" type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"userinput.email\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>User Type</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"userinput.type\" name=\"type\" required>\r\n            <option value=\"1\" selected>type 1</option>\r\n            <option value=\"2\">type 2</option>\r\n            <option value=\"3\">type 3</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Contact Number</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"number\" name=\"number\" [(ngModel)]=\"userinput.number\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Image</label>\r\n          <input type=\"file\" name=\"image\" class=\"form-control\" [(ngModel)]=\"userinput.userImage\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success \">insert</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Bank Info\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Pf Acount</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.pfAccountNo\" name=\"pfAccountNo\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Bank Acount</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.bankAccountNo\" name=\"bankAccountNo\">\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-6\">\r\n                <label>Tin Id</label>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employeeBankForm.tinId\" name=\"tinId\">\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n                <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<div class=\"card\" >\r\n    <div class=\"card-header\">\r\n        <h5>Basic Information</h5>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n\r\n\r\n\r\n            <div class=\"form-group col-md-4\">\r\n\r\n                <label >First Name <span style=\"color: red\">*</span></label>\r\n\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"employeeBasicForm.firstName\" required>\r\n\r\n            </div>\r\n            <br>\r\n            <!--<div class=\"col-md-12\"><hr></div>-->\r\n            <div class=\" form-group col-md-4\">\r\n\r\n                <label >Middle Name</label>\r\n\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\" [(ngModel)]=\"employeeBasicForm.middleName\" required>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label >Last Name <span style=\"color: red\">*</span></label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"employeeBasicForm.lastName\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label >Nick Name</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Nick name\" [(ngModel)]=\"employeeBasicForm.nickName\" required>\r\n\r\n            </div>\r\n\r\n            <div class=\" form-group col-md-4\">\r\n\r\n                <label >Employee Id <span style=\"color: red\">*</span></label>\r\n\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"employee id\" [(ngModel)]=\"employeeBasicForm.EmployeeId\" required>\r\n\r\n            </div>\r\n\r\n            <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Department <span style=\"color: red\">*</span></label>\r\n                <select class=\"form-control\" (change)=\"selectDepartment($event.target.value)\" [(ngModel)]=\"employeeBasicForm.department\" required>\r\n                    <option value=\"\">Select Department</option>\r\n                    <option *ngFor=\"let dept of department\" [value]=\"dept.id\">\r\n                        {{dept.departmentName}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Designation <span style=\"color: red\">*</span></label>\r\n                <select class=\"form-control\" (change)=\"selectDesignation($event.target.value)\" [(ngModel)]=\"employeeBasicForm.designation\" required>\r\n                    <option value=\"\">Select Designation</option>\r\n                    <option *ngFor=\"let desg of designation\" [value]=\"desg.id\">\r\n                        {{desg.title}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Employee Type <span style=\"color: red\">*</span></label>\r\n                <select class=\"form-control\" name=\"fkEmployeeType\" [(ngModel)]=\"employeeBasicForm.empType\" required>\r\n                    <option value=\"\">Select Employee Type</option>\r\n                    <option *ngFor=\"let type of empType\" [value]=\"type.id\">\r\n                        {{type.typeTitle}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"employeeBasicForm.email\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Contact Number <span style=\"color: red\">*</span></label>\r\n                <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"phone\" [(ngModel)]=\"employeeBasicForm.contactNo\" required>\r\n            </div>\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Alternative Number</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"alternative phone\" [(ngModel)]=\"employeeBasicForm.alterContactNo\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Date Of Birth <span style=\"color: red\">*</span></label>\r\n                <input type=\"date\" class=\"form-control\" name=\"birthdate\" [(ngModel)]=\"employeeBasicForm.birthdate\" required>\r\n            </div>\r\n\r\n\r\n            <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n            <div class=\"form-group col-md-4\">\r\n                <label>Gender <span style=\"color: red\">*</span></label>\r\n\r\n                &nbsp;&nbsp;<p style=\"margin-left: 20px\">\r\n                <input  type=\"radio\" class=\"form-check-input\" value=\"M\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Male\r\n\r\n                &nbsp;&nbsp;&nbsp;\r\n                <input type=\"radio\" class=\"form-check-input\" value=\"F\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Female\r\n\r\n                &nbsp;&nbsp;&nbsp;\r\n                <input type=\"radio\" class=\"form-check-input\" value=\"O\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Other\r\n            </p>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-8\">\r\n                <label>Image</label>\r\n                <input type=\"file\" class=\"form-control\" name=\"photo\" placeholder=\"image\" (change)=\"onFileSelected($event)\">\r\n            </div>\r\n\r\n\r\n             <img  *ngIf=\"employeeBasicForm.photo\" [src]=\"employeeBasicForm.photo\" height=\"200\" width=\"200\">\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group col-md-12\" align=\"right\" style=\"margin-top: 20px\" >\r\n                <button  class=\"btn btn-lg btn-success \" (click)=\"onSubmit()\">Save Data</button>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-12\">\r\n    <hr>\r\n</div>\r\n<div>\r\n    <app-emergency-contact [empid]=\"empid\"></app-emergency-contact>\r\n</div>\r\n"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Education\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n\r\n\r\n    <!--<li *ngFor=\"let p of error\">-->\r\n      <!--{{p}}-->\r\n    <!--</li>-->\r\n    <div *ngFor=\"let p of error\" class=\"alert alert-danger\" role=\"alert\">\r\n      {{p}}\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <label>Institution</label>\r\n        <input type=\"text\" name=\"institution\" [(ngModel)]=\"educationForm.institution\"  class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label>Degree</label>\r\n        <select class=\"form-control\" name=\"degree\"   (change)=\"selectDegree($event.target.value)\">\r\n          <option value=\"\">Select Degree</option>\r\n          <option *ngFor=\"let deg of degree\" [value]=\"deg.id\" [selected]=\"deg.id==educationForm.degreeId\">\r\n            {{deg.degreeName}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n\r\n        <button style=\"margin-top: 30px\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Add New</button>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Passing Year</label>\r\n        <input type=\"text\" name=\"passingyear\" [(ngModel)]=\"educationForm.passingyear\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Board</label>\r\n        <input type=\"text\" name=\"board\"  [(ngModel)]=\"educationForm.board\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Country</label>\r\n        <select class=\"form-control\" name=\"country\"   (change)=\"selectCountry($event.target.value)\">\r\n          <option value=\"\">Select Country</option>\r\n          <option *ngFor=\"let coun of country\" [value]=\"coun.code\" [selected]=\"coun.code == educationForm.country\">\r\n            {{coun.Name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Result </label>\r\n        <input type=\"text\" name=\"result\" [(ngModel)]=\"educationForm.result\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Result Out of</label>\r\n        <input type=\"text\" name=\"resultoutof\"  [(ngModel)]=\"educationForm.resultoutof\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-12\" align=\"right \" >\r\n\r\n        <button style=\"margin-top: 32px\" class=\"btn btn-success\" (click)=\"saveEducation()\">Save Data</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <!--tabel for managment -->\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>Institution</th>\r\n        <th>Degree Name</th>\r\n        <th>Result </th>\r\n        <th>Passing Year</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr >\r\n      <tr *ngFor=\"let edu of educations\">\r\n        <td>{{edu.institution}}</td>\r\n        <td>{{edu.degreeName}}</td>\r\n        <td>{{edu.result}}</td>\r\n        <td>{{edu.passingYear}}</td>\r\n        <td>\r\n          <button class=\"btn btn-danger\" (click)=\"editEducation(edu)\" style=\"margin-left: 20px;\">Edit</button>\r\n          <button class=\"btn btn-danger\" (click)=\"deleteEducation(edu.id)\" style=\"margin-left: 20px;\">Delete</button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!--modal-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Add Degree</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n<form #education=\"ngForm\" (ngSubmit)=\"onSubmit(content)\">\r\n    <div class=\"form-group col-md-12\">\r\n      <label>Degree</label>\r\n      <input type=\"text\" name=\"degree\" [(ngModel)]=\"newdegree\" class=\"form-control\" required>\r\n      <button style=\"margin-top: 32px\" class=\"btn btn-success\"  [disabled]=\"!education.valid\"  >Submit</button>\r\n    </div>\r\n</form>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h4 align=\"center\">\r\n      Emergency Contact\r\n    </h4>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div *ngFor=\"let p of error\" class=\"alert alert-secondary\" role=\"alert\">\r\n      {{p}}\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n\r\n          <label >First Name</label>\r\n\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"emergencyForm.firstName\" required>\r\n\r\n        </div>\r\n        <br>\r\n        <!--<div class=\"col-md-12\"><hr></div>-->\r\n        <div class=\" form-group col-md-4\">\r\n\r\n          <label >Middle Name</label>\r\n\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\" [(ngModel)]=\"emergencyForm.middleName\" required>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label >Last Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"emergencyForm.lastName\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Contact Number</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"phone\" [(ngModel)]=\"emergencyForm.contactNo\" required>\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Alternative Number</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"alternative phone\" [(ngModel)]=\"emergencyForm.alterContactNo\" required>\r\n        </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Relation</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"relation\" placeholder=\"relation\" [(ngModel)]=\"emergencyForm.relation\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n          <label>Address</label>\r\n          <textarea class=\"form-control\" [(ngModel)]=\"emergencyForm.address\"></textarea>\r\n      </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <button class=\"btn btn-success pull-right\" (click)=\"submitForm()\">Submit</button>\r\n        </div>\r\n\r\n      </div>\r\n  </div>\r\n</div>"

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

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/user/employee/employee.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/employee/employee.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Employee Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" routerLink=\"add\" >Add New</a>  <br><br>\r\n      <table datatable class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>First Name</th>\r\n          <th>Middle Name</th>\r\n          <th>Last Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Designation</th>\r\n          <th>Department</th>\r\n          <th>Action</th>\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Joining Info\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Actual Join Date</label>\r\n\r\n        <input class=\"form-control\"\r\n               bsDatepicker\r\n                [(ngModel)]=\"employeeJoiningForm.actualJoinDate\"\r\n                [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD'}\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Recent Join Date</label>\r\n        <input name=\"recentJoinDate\" bsDatepicker\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\" [(ngModel)]=\"employeeJoiningForm.recentJoinDate\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Resign Date</label>\r\n        <input bsDatepicker\r\n               [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD' }\"  name=\"resignDate\" [(ngModel)]=\"employeeJoiningForm.resignDate\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Supervisor</label>\r\n        <input type=\"text\" name=\"supervisor\" placeholder=\"name\" [(ngModel)]=\"employeeJoiningForm.supervisor\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Probation Period</label>\r\n        <input type=\"text\" name=\"probationPeriod\" placeholder=\"month\" [(ngModel)]=\"employeeJoiningForm.probationPeriod\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n\r\n        <!--<input type=\"text\" name=\"weekend\" placeholder=\"day\" [(ngModel)]=\"employeeJoiningForm.weekend\" class=\"form-control\">-->\r\n        <label>Weekend</label>\r\n        <ng-multiselect-dropdown\r\n                [placeholder]=\"'Select Weekend'\"\r\n                [data]=\"dropdownList\"\r\n                [(ngModel)]=\"selectedItems\"\r\n                [settings]=\"dropdownSettings\"\r\n                (onSelect)=\"onItemSelect($event)\"\r\n                (onDeSelect)=\"onItemDeSelect($event)\"\r\n\r\n        >\r\n        </ng-multiselect-dropdown>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Card Number</label>\r\n        <input type=\"text\" name=\"accessPin\" placeholder=\"pin\" [(ngModel)]=\"employeeJoiningForm.accessPin\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Attendance Device Pin</label>\r\n        <input type=\"text\" name=\"accessPin\" placeholder=\"pin\" [(ngModel)]=\"employeeJoiningForm.attDeviceUserId\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Practice</label>\r\n        <input type=\"number\" name=\"practice\" placeholder=\"days\" [(ngModel)]=\"employeeJoiningForm.practice\"  class=\"form-control\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Shift</label>\r\n        <select class=\"form-control\" name=\"shift\"   (change)=\"selectShift($event.target.value)\">\r\n          <option value=\"\">Select Shift</option>\r\n          <option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\" [selected]=\"sh.shiftId==employeeJoiningForm.shiftId\">\r\n            {{sh.shiftName}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <!--<div class=\"form-group col-md-6\">-->\r\n        <!--<label>Shift</label>-->\r\n        <!--<select class=\"form-control\" name=\"shift\"   (change)=\"selectShift($event.target.value)\">-->\r\n          <!--<option value=\"\">Select Shift</option>-->\r\n          <!--<option *ngFor=\"let sh of shift\" [value]=\"sh.shiftId\" [selected]=\"deg.id==educationForm.degreeId\">-->\r\n            <!--{{sh.shiftName}}-->\r\n          <!--</option>-->\r\n        <!--</select>-->\r\n      <!--</div>-->\r\n\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Schedule In Time</label>\r\n        <input type=\"time\" name=\"scheduleInTime\" placeholder=\"in time\" [(ngModel)]=\"employeeJoiningForm.scheduleInTime\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Schedule Out Time</label>\r\n        <input type=\"time\" name=\"scheduleOutTime\" placeholder=\"out time\" [(ngModel)]=\"employeeJoiningForm.scheduleOutTime\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Special Allowance</label>\r\n        &nbsp;<input type=\"checkbox\" name=\"specialAllowance\" [(ngModel)]=\"employeeJoiningForm.specialAllowance\">\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"col-md-12\">\r\n        <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\r\n      </div>\r\n\r\n\r\n      <!--Leave Limit-->\r\n      <div class=\"form-group col-md-12\">\r\n        <h5 align=\"center\">Leave Limit</h5>\r\n        <hr>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Total Leave</label>\r\n        <input type=\"text\" [(ngModel)]=\"totalLeaveAssigned\"  placeholder=\"total leave\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Leave Taken</label>\r\n        <input type=\"number\" [(ngModel)]=\"leaveTaken\"  placeholder=\"total leave taken\" class=\"form-control\" readonly>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <button class=\"btn btn-success\" (click)=\"submitLeaveLimit()\">Save Leave Limit</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Personal Info\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Fathers Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"fatherName\" [(ngModel)]=\"employeePersonalForm.fatherName\" placeholder=\"father's name\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Mothers Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"motherName\" [(ngModel)]=\"employeePersonalForm.motherName\" placeholder=\"mother's name\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Marital Status</label>\r\n        <select class=\"form-control\" name=\"maritalStatus\" [(ngModel)]=\"employeePersonalForm.maritalStatus\" >\r\n          <option value=\"\">Select Status</option>\r\n          <option value=\"S\">Single</option>\r\n          <option value=\"M\">Married</option>\r\n          <option value=\"W\">Devorced</option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Spouse Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"spouseName\" [(ngModel)]=\"employeePersonalForm.spouseName\" placeholder=\"spouse\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Religion</label>\r\n        <select class=\"form-control\" name=\"religion\" [(ngModel)]=\"employeePersonalForm.fkReligion\">\r\n          <option value=\"\">Select religion</option>\r\n            <option *ngFor=\"let reli of religion\" [value]=\"reli.id\">\r\n                {{reli.religionName}}\r\n            </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Nationality</label>\r\n        <select class=\"form-control\" name=\"fkNationality\" [(ngModel)]=\"employeePersonalForm.fkNationality\">\r\n          <option value=\"\">Select nationality</option>\r\n            <option *ngFor=\"let nation of nationality\" [value]=\"nation.code\">\r\n                {{nation.Name}}\r\n            </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>National Id</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"nationalId\" [(ngModel)]=\"employeePersonalForm.nationalId\" placeholder=\"National Id\">\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-12\">\r\n        <hr>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Present Street</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"presentStreet\" [(ngModel)]=\"employeePersonalForm.presentStreet\" placeholder=\"present street\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Present Police Station</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"presentPS\" [(ngModel)]=\"employeePersonalForm.presentPS\" placeholder=\"present PS\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Present Zipcod</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"presentZipcod\" [(ngModel)]=\"employeePersonalForm.presentZipcod\" placeholder=\"Present Zip\">\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <hr>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Permanent Street</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"permanentStreet\" [(ngModel)]=\"employeePersonalForm.permanentStreet\" placeholder=\"permanent street\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Permanent Police Station</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"permanentPS\" [(ngModel)]=\"employeePersonalForm.permanentPS\" placeholder=\"permanent PS\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Permanent Zipcod</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"permanentZipcod\" [(ngModel)]=\"employeePersonalForm.permanentZipcod\" placeholder=\"permanent Zip\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <button class=\"btn btn-success\" (click)=\"submit()\">Save</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Pay-grade Setup\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Pay-grade</label>\r\n       <select class=\"form-control\" [(ngModel)]=\"payGradeModel.fkSalaryGrade\">\r\n         <option>Select Pay-grade</option>\r\n         <option *ngFor=\"let data of payGrades\" [value]=\"data.id\">\r\n           {{data.gradeTitle}}\r\n         </option>\r\n       </select>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>No. Of Increment </label>\r\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"payGradeModel.noOfIncrement\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <button class=\"btn btn-sm btn-success\" (click)=\"assignPayGrade()\">Update</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<br>\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Salary Salary Sheet\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"container\">\r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n            <th>Pay Heads</th>\r\n            <th>Amount</th>\r\n            <th>Gross</th>\r\n            <th>Type</th>\r\n            <th>Action</th>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of empAllPayrolls\">\r\n              <td>{{data.allowDeducTitle}}</td>\r\n              <td>{{data.amount}}</td>\r\n              <td>{{data.grossPercent}}</td>\r\n              <td>{{data.allowDeducType}}</td>\r\n              <td>\r\n                <button class=\"btn btn-sm btn-info\" (click)=\"editSheet(data)\">Edit</button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteSheet(data)\">Delete</button>\r\n              </td>\r\n\r\n\r\n\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Pay heads</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"model.payroll\">\r\n          <option value=\"\">Select Payhead</option>\r\n          <option  *ngFor=\"let data of payrolls\" [value]=\"data.id\">\r\n            {{data.allowDeducTitle}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Amount</label>\r\n        <input type=\"number\" name=\"amount\" placeholder=\"amount\" [(ngModel)]=\"model.amount\"  class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Description</label>\r\n        <input type=\"text\" name=\"description\" placeholder=\"description\" [(ngModel)]=\"model.description\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Gross Percent</label>\r\n        <input type=\"number\" name=\"grossPercent\" placeholder=\"grossPercent\" [(ngModel)]=\"model.grossPercent\"  class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-md-12\" *ngIf=\"checkUpdateFlag();else other_content\">\r\n\r\n        <button class=\"btn btn-success pull-right\"  (click)=\"update()\">Insert</button>\r\n      </div>\r\n\r\n      <ng-template #other_content class=\"form-group col-md-12\">\r\n        <div class=\"form-group col-md-12\" >\r\n\r\n          <button class=\"btn btn-success pull-right\"  (click)=\"update()\">Update</button>\r\n          <button class=\"btn btn-danger pull-right\"  (click)=\"resetSheet()\">Reset</button>\r\n        </div>\r\n      </ng-template>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <br><hr><br>\r\n    <h4 align=\"center\">Salary Advance</h4>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Advance Date</label>\r\n        <input class=\"form-control\" placeholder=\"date\" [(ngModel)]=\"payAdvanceModel.advanceDate\" type=\"date\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Start Date</label>\r\n        <input class=\"form-control\" [(ngModel)]=\"payAdvanceModel.startDate\" placeholder=\"start date\"  type=\"date\">\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Amount</label>\r\n        <input class=\"form-control\" placeholder=\"TK\" [(ngModel)]=\"payAdvanceModel.amount\" type=\"number\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Return Rate</label>\r\n        <input class=\"form-control\" placeholder=\"%\" [(ngModel)]=\"payAdvanceModel.returnRate\" type=\"number\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Status</label>\r\n       <select class=\"form-control\" [(ngModel)]=\"payAdvanceModel.status\">\r\n         <option value=\"\">Select status</option>\r\n         <option value=\"running\">Running</option>\r\n         <option value=\"complete\">Complete</option>\r\n       </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <label>DESCRIPTION</label>\r\n        <input class=\"form-control\" placeholder=\"description\" [(ngModel)]=\"payAdvanceModel.DESCRIPTION\" type=\"text\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-12\">\r\n      <button class=\"btn btn-info pull-right\" (click)=\"payAdvanceSubmit()\">Submit</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>"

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
        this.model = {};
        this.payAdvanceModel = {};
        this.temp = {};
        this.payGradeModel = {};
    }
    SalaryInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.payroll = "";
        this.model.fkEmployeeId = this.empid;
        this.model.amount = "";
        this.payAdvanceModel.fkEmployeeId = this.empid;
        this.employeeSalaryForm.id = this.empid;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/payhead/salarySetupGet' + '?token=' + token, this.model).subscribe(function (data) {
            if (data) {
                _this.temp = data;
            }
            else {
                // alert("empty");
            }
        }, function (error) {
            console.log(error);
        });
        this.getData();
        this.getEmployeeData();
        this.initPayGrade();
        this.getPaygrades();
    };
    SalaryInfoComponent.prototype.initPayGrade = function () {
        var _this = this;
        this.payGradeModel.id = this.empid;
        //
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/salary-info/get' + '?token=' + token, { id: this.empid }).subscribe(function (data) {
            _this.payGradeModel = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.getData = function () {
        var _this = this;
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/payhead/get').subscribe(function (data) {
            _this.payrolls = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.getEmployeeData = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/payhead/employee/get/' + this.empid + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.empAllPayrolls = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.update = function () {
        var _this = this;
        var token = this.token.get();
        console.log(this.model);
        if (this.model.payroll == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please select payhead",
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
        if (this.model.amount == "") {
            $.alert({
                title: 'Alert!',
                type: 'Red',
                content: "Please insert amount",
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
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/payhead/salarySetupSet' + '?token=' + token, this.model).subscribe(function (data) {
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: "Success",
                buttons: {
                    tryAgain: {
                        text: 'Ok',
                        btnClass: 'btn-red',
                        action: function () {
                        }
                    }
                }
            });
            _this.getEmployeeData();
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.payAdvanceSubmit = function () {
        this.payAdvanceModel.fkPayHeadId = this.model.payroll;
        //
        // console.log(this.payAdvanceModel);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/payadvance/ledger' + '?token=' + token, this.payAdvanceModel).subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.editSheet = function (data) {
        // console.log(data);
        this.model.amount = data.amount;
        this.model.payroll = data.fkPaymentHeadId;
        this.model.description = data.description;
        this.model.grossPercent = data.grossPercent;
        this.model.id = data.salaryId;
        this.payAdvanceModel.fkEmployeeId = this.empid;
    };
    SalaryInfoComponent.prototype.deleteSheet = function (data) {
        console.log(data);
    };
    SalaryInfoComponent.prototype.resetSheet = function () {
        this.model = {};
        this.payAdvanceModel.fkEmployeeId = this.empid;
        this.model.payroll = "";
        this.model.amount = "";
    };
    SalaryInfoComponent.prototype.checkUpdateFlag = function () {
        if (this.model.id) {
            return false;
        }
        if (this.model.id == "") {
            return false;
        }
        return true;
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
    SalaryInfoComponent.prototype.getPaygrades = function () {
        var _this = this;
        // payroll/paygradeparent/get
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/paygradeparent/get' + '?token=' + token, {}).subscribe(function (data) {
            // console.log(data);
            _this.payGrades = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalaryInfoComponent.prototype.assignPayGrade = function () {
        console.log(this.payGradeModel);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].API_URL + 'payroll/salary-info/update' + '?token=' + token, this.payGradeModel).subscribe(function (data) {
            $.alert({
                title: 'Success!',
                type: 'Green',
                content: "Pay-grade Updated",
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">All Documents</div>\r\n  <div class=\"card-body\">\r\n\r\n    <h4>Uploaded</h4>\r\n    <hr>\r\n    <!--<ol>-->\r\n      <!--<li  *ngFor=\"let index of userUploadedFile\">-->\r\n       <!--File Name : {{index.title}}-->\r\n\r\n        <!--<a target=\"_blank\" href=\"{{imageUrl+index.path}}\" download class=\"btn btn-info btn-sm\" >Download</a>-->\r\n      <!--</li>-->\r\n    <!--</ol>-->\r\n\r\n    <table class=\"table table-striped\">\r\n      <tr *ngFor=\"let index of userUploadedFile\">\r\n        <td>{{index.title}}</td>\r\n        <td><a target=\"_blank\" href=\"{{imageUrl+index.path}}\" download class=\"btn btn-info btn-sm\" >Download</a></td>\r\n\r\n      </tr>\r\n    </table>\r\n\r\n\r\n\r\n\r\n    <h4>Add</h4>\r\n    <hr>\r\n    <div class=\"row\" *ngFor=\"let index of userDocumentFormArray;let i = index\">\r\n      <div class=\"form-group col-md-6\">\r\n\r\n        <label>Name</label>\r\n        <input type=\"text\" placeholder=\"title\" class=\"form-control\" [(ngModel)]=\"index.name\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Document</label>\r\n        <input type=\"file\" class=\"form-control\" name=\"photo\" placeholder=\"document\" (change)=\"onFileSelected(i,$event)\">\r\n      </div>\r\n\r\n    </div>\r\n    <button class=\"btn btn-info\" (click)=\"addMore()\">Add more</button>\r\n    <button class=\"btn btn-danger\" (click)=\"removeField()\">Remove</button>\r\n    <button class=\"btn btn-success\" (click)=\"submit()\">Submit</button>\r\n\r\n\r\n  </div>\r\n</div>"

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
        if (this.token.isValid()) {
            return this.token.isValid();
            // all ok, proceed navigation to routed component
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
        this.user = {};
        // setInterval(() => {
        //   this.isTokenExpired();
        // }, 4000);
    }
    TokenService.prototype.setUser = function () {
        var _this = this;
        // this.user=user;
        var token = this.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'me?token=' + token, null).subscribe(function (data) {
            // console.log(data);
            _this.user = data;
        }, function (error) {
            console.log(error);
        });
    };
    TokenService.prototype.setUserDef = function (user) {
        this.user = user;
    };
    TokenService.prototype.getUser = function () {
        var token = this.get();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'me?token=' + token, null);
    };
    TokenService.prototype.getUserLocal = function () {
        return JSON.parse(localStorage.getItem('user'));
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
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'me?token=' + token, null).subscribe(function (data) {
            localStorage.setItem('user', JSON.stringify(data));
            // this.setUserDef(data);
        }, function (error) {
            console.log(error);
            // this.handleError(error);
        });
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\hrsolution\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map