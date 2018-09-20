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
    { path: 'configuration/department/add', component: _components_configuration_department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_7__["AddDepartmentComponent"] },
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
                _components_user_employee_employee_component__WEBPACK_IMPORTED_MODULE_28__["EmployeeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_25__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"].forRoot()
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header-pills\">\n    <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Department</h3>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Department Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"dept name\" name=\"departmentName\" [(ngModel)]=\"departmentField.departmentName\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Department Level</label>\n        <input type=\"number\" class=\"form-control\" placeholder=\"level\" name=\"deptLevel\">\n      </div>\n\n    </div>\n\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Department Name</th>\n        <th>Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let dept of departments\">\n        <td>{{dept.departmentName}}</td>\n        <!--<td></td>-->\n        <!--<td></td>-->\n        <td>\n          <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\n          <button class=\"btn btn-danger\" (click)=\"editDept(dept)\" style=\"margin-left: 20px;\"> Edit</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

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
        this.departmentField = {
            departmentName: ''
        };
    }
    AddDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'company/get/department' + '?token=' + token).subscribe(function (data) {
            _this.departments = data;
            // console.log(this.departments);
        }, function (error) {
            console.log(error);
        });
    };
    AddDepartmentComponent.prototype.editDept = function (dept) {
        // console.log(dept);
        this.departmentField.departmentName = dept.departmentName;
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header-pills\"> <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Designation</h3></div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"designationForm.title\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Short Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"shortName\" [(ngModel)]=\"designationForm.shortName\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Salary Grade</label>\n        <input type=\"text\" class=\"form-control\" name=\"salaryGrade\" [(ngModel)]=\"designationForm.salaryGrade\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>desigLevel</label>\n        <select name=\"desigLevel\" class=\"form-control\">\n          <option>level 1</option>\n          <option>level 2</option>\n          <option>level 3</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\" *ngIf=\"checkId();else other_content\">\n        <button class=\"btn btn-success\">Insert</button>\n      </div>\n\n      <ng-template #other_content>\n        <div class=\"form-group col-md-6\">\n          <button class=\"btn btn-success\">Update</button>\n        </div>\n      </ng-template>\n\n\n\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Designation Name</th>\n          <th>shortName</th>\n          <th>salaryGrade</th>\n          <th>desigLevel</th>\n          <th>Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let desig of designation\">\n          <td>{{desig.title}}</td>\n          <td>{{desig.shortName}}</td>\n          <td>{{desig.salaryGrade}}</td>\n          <td>{{desig.desigLevel}}</td>\n          <td>\n            <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\n            <button class=\"btn btn-danger\" style=\"margin-left: 20px;\" (click)=\"editDsig(desig)\">Edit</button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n\n\n\n\n    </div>\n\n\n  </div>\n\n</div>"

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
    // designation:any;
    function AddDesignatonComponent(http) {
        this.http = http;
        this.designation = {};
        this.designationForm = {};
    }
    AddDesignatonComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Getting Designations
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'designation/get').subscribe(function (data) {
            _this.designation = data;
            // console.log(this.designation);
        }, function (error) {
            console.log(error);
        });
    };
    AddDesignatonComponent.prototype.checkId = function () {
        //
        // if(this.designationForm =={}){
        //   return false;
        // }
        return true;
        // else {return true;}
    };
    AddDesignatonComponent.prototype.editDsig = function (desig) {
        this.designationForm = desig;
        console.log(desig);
    };
    AddDesignatonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-designaton',
            template: __webpack_require__(/*! ./add-designaton.component.html */ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.html"),
            styles: [__webpack_require__(/*! ./add-designaton.component.css */ "./src/app/components/configuration/designation/add-designaton/add-designaton.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddDesignatonComponent);
    return AddDesignatonComponent;
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

module.exports = "<div class=\"accountbg\"></div>\r\n<div class=\"wrapper-page\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"text-center\">\r\n        <b class=\"waves-effect waves-light\">HR Solution</b>\r\n      </h3>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"alert alert-danger\" [hidden]=\"!error\">\r\n        {{error}}\r\n      </div>\r\n\r\n      <div align=\"center\">\r\n        <img src=\"assets/logo/TCL_logo.png\" height=\"150\" width=\"200\">\r\n      </div>\r\n\r\n      <div class=\"p-3\">\r\n        <form #loginForm=ngForm (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\" class=\"form-horizontal m-t-20\">\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"email\" name=\"email\" formControlName=\"email\" required autofocus>\r\n              <div *ngIf=\"submitted && f.email.errors\">\r\n                <div *ngIf=\"f.email.errors.required\" class=\"badge badge-danger\">Email required</div>\r\n                <div *ngIf=\"f.email.errors.email\" class=\"badge badge-danger\">must be a valid email</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\r\n\r\n              <div *ngIf=\"submitted && f.password.errors\">\r\n                <div *ngIf=\"f.password.errors.required\" class=\"badge badge-danger\">password required</div>\r\n                <div *ngIf=\"f.password.errors.minlength\" class=\"badge badge-danger\">at least 6 characters </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group text-center row m-t-20\">\r\n            <div class=\"col-12\">\r\n              <!--<button class=\"btn btn-block btn-info\">Log In</button>-->\r\n              <button type=\"submit\" class=\"btn btn-block btn-info\" >Sign in</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
            _this.error = error.error.error;
            // console.log(this.error);
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

module.exports = "<!-- Navigation Bar-->\r\n<header id=\"topnav\">\r\n  <div class=\"topbar-main\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"logo\">\r\n\r\n        <a routerLink=\"/home\" class=\"logo\">\r\n          <h3>HR</h3>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <div class=\"menu-extras topbar-custom\">\r\n        <!-- Search input -->\r\n        <div class=\"search-wrap\" id=\"search-wrap\">\r\n          <div class=\"search-bar\">\r\n            <input class=\"search-input\" type=\"search\" placeholder=\"Search\" />\r\n            <a href=\"#\" class=\"close-search toggle-search\" data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-close-circle\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <ul class=\"list-inline float-right mb-0\">\r\n          <!-- Search -->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link waves-effect toggle-search\" href=\"#\"  data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-magnify noti-icon\"></i>\r\n            </a>\r\n          </li>\r\n          <!-- Messages-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-email-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5><span class=\"badge badge-danger float-right\">745</span>Messages</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-2.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Charles M. Jones</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-3.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Thomas J. Mimms</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-4.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Luis M. Konrad</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- notification-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-bell-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5>Notification (3)</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\r\n                <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-cart-outline\"></i></div>\r\n                <p class=\"notify-details\"><b>Your order is placed</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-message\"></i></div>\r\n                <p class=\"notify-details\"><b>New Message received</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-martini\"></i></div>\r\n                <p class=\"notify-details\"><b>Your item is shipped</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- User-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-user text-muted\"></i> Profile</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-wallet text-muted\"></i> My Wallet</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><span class=\"badge badge-success pull-right m-t-5\">5</span><i class=\"dripicons-gear text-muted\"></i> Settings</a>\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"whoAmI($event)\"><i class=\"dripicons-lock text-muted\"></i> Who Am I</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\"><i class=\"dripicons-exit text-muted\"></i> Logout</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-item list-inline-item\">\r\n            <!-- Mobile menu toggle-->\r\n            <a class=\"navbar-toggle nav-link\">\r\n              <div class=\"lines\">\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n              </div>\r\n            </a>\r\n            <!-- End mobile menu toggle-->\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <!-- end menu-extras -->\r\n\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </div> <!-- end container -->\r\n  </div>\r\n  <!-- end topbar-main -->\r\n\r\n  <!-- MENU Start -->\r\n  <div class=\"navbar-custom\">\r\n    <div class=\"container-fluid\">\r\n      <div id=\"navigation\">\r\n        <!-- Navigation Menu-->\r\n        <ul class=\"navigation-menu\">\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/home\" ><i class=\"ti-home\"></i>Dashboard</a>\r\n          </li>\r\n\r\n\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a href=\"#\"><i class=\"ti-bookmark-alt\"></i>Components</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Forms</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"configuration/department/add\">Add Department</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">User</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"user/add\">Add User</a></li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Employee</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"employee\">Employee</a></li>\r\n                  <li><a routerLink=\"employee/add\">Add Employee</a></li>\r\n                </ul>\r\n              </li>\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Company</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"company/add\">Company Info</a></li>\r\n                </ul>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Icons</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a href=\"icons-material.html\">Material Design</a></li>\r\n                  <li><a href=\"icons-ion.html\">Ion Icons</a></li>\r\n                  <li><a href=\"icons-fontawesome.html\">Font Awesome</a></li>\r\n                  <li><a href=\"icons-themify.html\">Themify Icons</a></li>\r\n                  <li><a href=\"icons-dripicons.html\">Dripicons</a></li>\r\n                  <li><a href=\"icons-typicons.html\">Typicons Icons</a></li>\r\n                </ul>\r\n              </li>\r\n              <li>\r\n                <a href=\"calendar.html\">Calendar</a>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Tables </a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"/datatable\">Data Table</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n          <!--<li class=\"has-submenu\">-->\r\n            <!--<a href=\"#\"><i class=\"ti-files\"></i>Pages</a>-->\r\n            <!--<ul class=\"submenu megamenu\">-->\r\n              <!--<li>-->\r\n                <!--<ul>-->\r\n                  <!--<li><a routerLink=\"/login\">Login</a></li>-->\r\n                <!--</ul>-->\r\n              <!--</li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n\r\n        </ul>\r\n        <!-- End navigation menu -->\r\n      </div> <!-- end #navigation -->\r\n    </div> <!-- end container -->\r\n  </div> <!-- end navbar-custom -->\r\n</header>\r\n<!-- End Navigation Bar-->\r\n\r\n"

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
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'me?token=' + token, null).subscribe(function (data) {
            // console.log(data);
            _this.token.setUser(data);
            // console.log(this.token.getUser());
        }, function (error) {
            console.log(error);
            _this.handleError(error);
        });
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

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div style=\"background: black;padding: 0; min-height: 860px; margin-left: -20px; margin-top:-33px;\" class=\"col-md-2\">\r\n\r\n      <ul style=\"margin-top: 25px; margin-left: 20px;\" class=\"list-group\">\r\n        <li class=\"list-group-item \" [class.active]=\"infoFlag == 1\"  (click)=\"onInfoClick(1)\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \">Basic Info </button></li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 2\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(2)\">Personal Info</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 3\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(3)\">Education</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 4\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block\" (click)=\"onInfoClick(4)\">Joining Info</button> </li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 5\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(5)\">Bank Info </button></li>\r\n        <li class=\"list-group-item\" [class.active]=\"infoFlag == 6\"><button style=\"background: none; color: white; border: none;\" class=\"btn btn-block \" (click)=\"onInfoClick(6)\">Salary Info </button></li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-10\">\r\n      <app-basic-info *ngIf=\"infoFlag ==1\" [empid]=\"empid\"></app-basic-info>\r\n      <app-personal-info *ngIf=\"infoFlag ==2\"></app-personal-info>\r\n      <app-education *ngIf=\"infoFlag ==3\"></app-education>\r\n      <app-joining-info *ngIf=\"infoFlag ==4\"></app-joining-info>\r\n      <app-bank-info *ngIf=\"infoFlag ==5\"></app-bank-info>\r\n      <app-salary-info *ngIf=\"infoFlag ==6\"></app-salary-info>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.empid = this.route.snapshot.params.id;
    };
    AddEmployeeComponent.prototype.onInfoClick = function (value) {
        this.infoFlag = value;
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

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        Bank Info\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n                <label>Pf Acount</label>\n                <input type=\"text\" class=\"form-control\" name=\"pfAccountNo\">\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label>Bank Acount</label>\n                <input type=\"text\" class=\"form-control\" name=\"bankAccountNo\">\n            </div>\n\n            <div class=\"form-group col-md-6\">\n                <label>Tin Id</label>\n                <input type=\"text\" class=\"form-control\" name=\"tinId\">\n            </div>\n\n\n        </div>\n    </div>\n</div>"

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
    function BankInfoComponent() {
    }
    BankInfoComponent.prototype.ngOnInit = function () {
    };
    BankInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bank-info',
            template: __webpack_require__(/*! ./bank-info.component.html */ "./src/app/components/user/bank-info/bank-info.component.html"),
            styles: [__webpack_require__(/*! ./bank-info.component.css */ "./src/app/components/user/bank-info/bank-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"card\" >\r\n  <div class=\"card-header\">\r\n    <h5>Basic Information</h5>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n\r\n\r\n      <div class=\" form-group col-md-12\">\r\n\r\n        <label >First Name</label>\r\n\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"employeeBasicForm.firstName\">\r\n\r\n      </div>\r\n      <br>\r\n      <!--<div class=\"col-md-12\"><hr></div>-->\r\n      <div class=\" form-group col-md-4\">\r\n\r\n        <label >Middle Name</label>\r\n\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\" [(ngModel)]=\"employeeBasicForm.middleName\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label >Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"employeeBasicForm.lastName\">\r\n      </div>\r\n      <div class=\"form-group col-md-4\">\r\n        <label >Nick Name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nick name\" [(ngModel)]=\"employeeBasicForm.nickName\">\r\n\r\n      </div>\r\n\r\n      <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Department</label>\r\n        <select class=\"form-control\" (change)=\"selectDepartment($event.target.value)\" [(ngModel)]=\"employeeBasicForm.department\">\r\n          <option value=\"\">Select Department</option>\r\n          <option *ngFor=\"let dept of department\" [value]=\"dept.id\">\r\n            {{dept.departmentName}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Designation</label>\r\n        <select class=\"form-control\" (change)=\"selectDesignation($event.target.value)\" [(ngModel)]=\"employeeBasicForm.designation\">\r\n          <option value=\"\">Select Designation</option>\r\n          <option *ngFor=\"let desg of designation\" [value]=\"desg.id\">\r\n            {{desg.title}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Employee Type</label>\r\n        <select class=\"form-control\" name=\"fkEmployeeType\" [(ngModel)]=\"employeeBasicForm.empType\">\r\n          <option value=\"\">Select Employee Type</option>\r\n          <option *ngFor=\"let type of empType\" [value]=\"type.id\">\r\n            {{type.typeTitle}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" [(ngModel)]=\"employeeBasicForm.email\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Contact Number</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"contactNo\" placeholder=\"phone\" [(ngModel)]=\"employeeBasicForm.contactNo\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Date Of Birth</label>\r\n        <input type=\"date\" class=\"form-control\" name=\"birthdate\" [(ngModel)]=\"employeeBasicForm.birthdate\">\r\n      </div>\r\n\r\n\r\n      <!--<div class=\"col-md-12\"><hr></div>-->\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label>Gender</label>\r\n\r\n        &nbsp;&nbsp;<p style=\"margin-left: 20px\">\r\n        <input  type=\"radio\" class=\"form-check-input\" value=\"M\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Male\r\n\r\n        &nbsp;&nbsp;&nbsp;\r\n        <input type=\"radio\" class=\"form-check-input\" value=\"F\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Female\r\n\r\n        &nbsp;&nbsp;&nbsp;\r\n        <input type=\"radio\" class=\"form-check-input\" value=\"O\" name=\"gender\" [(ngModel)]=\"employeeBasicForm.gender\">Other\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-8\">\r\n        <label>Image</label>\r\n        <input type=\"file\" class=\"form-control\" name=\"photo\" placeholder=\"image\" (change)=\"onFileSelected($event)\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-12\" align=\"right\" style=\"margin-top: 20px\" >\r\n        <button  class=\"btn btn-lg btn-success \" (click)=\"onSubmit()\">Save Data</button>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
    function BasicInfoComponent(http, token) {
        this.http = http;
        this.token = token;
        this.employeeBasicForm = {
            department: '',
            designation: '',
            empType: '',
            firstName: '',
            middleName: '',
            lastName: '',
            nickName: '',
            email: '',
            contactNo: '',
            birthdate: '',
            gender: ''
        };
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Getting Departments
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'department/get').subscribe(function (data) {
            // console.log(data);
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
            console.log(data);
            _this.basicinfo = data;
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
    BasicInfoComponent.prototype.onSubmit = function () {
        var fd = new FormData();
        var value = this.employeeBasicForm;
        for (var key in value) {
            fd.append(key, value[key]);
        }
        if (this.selectedFile) {
            fd.append('image', this.selectedFile, this.selectedFile.name);
        }
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].API_URL + 'employee/basic', fd).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
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

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Education\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"form-group col-md-12\">\r\n        <label>Institution</label>\r\n        <input type=\"text\" name=\"institution\" [(ngModel)]=\"educationForm.institution\"  class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-5\">\r\n        <label>Degree</label>\r\n        <select class=\"form-control\" name=\"degree\"   (change)=\"selectDegree($event.target.value)\">\r\n          <option value=\"\">Select Degree</option>\r\n          <option *ngFor=\"let deg of degree\" [value]=\"deg.id\" [selected]=\"deg.id==educationForm.degreeId\">\r\n            {{deg.degreeName}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-md-1\">\r\n\r\n        <button style=\"margin-top: 30px\" class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Add New</button>\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Passing Year</label>\r\n        <input type=\"text\" name=\"passingyear\" [(ngModel)]=\"educationForm.passingyear\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Board</label>\r\n        <input type=\"text\" name=\"board\"  [(ngModel)]=\"educationForm.board\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Country</label>\r\n        <select class=\"form-control\" name=\"country\" (change)=\"selectCountry($event.target.value)\"  >\r\n          <option value=\"\">Select Country</option>\r\n          <!--<option *ngFor=\"let dept of department\" [value]=\"dept.id\">-->\r\n          <!--{{dept.departmentName}}-->\r\n          <!--</option>-->\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Result </label>\r\n        <input type=\"text\" name=\"result\" [(ngModel)]=\"educationForm.result\" class=\"form-control\">\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-6\">\r\n        <label>Result Out of</label>\r\n        <input type=\"text\" name=\"resultoutof\"  [(ngModel)]=\"educationForm.resultoutof\" class=\"form-control\">\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group col-md-12\" align=\"right \" >\r\n\r\n        <button style=\"margin-top: 32px\" class=\"btn btn-success\" (click)=\"onSubmit()\">Save Data</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <br>\r\n    <!--tabel for managment -->\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>Degree Name</th>\r\n        <th>Result </th>\r\n        <th>Passing Year</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr >\r\n      <tr *ngFor=\"let edu of educations\">\r\n        <td>{{edu.degreeName}}</td>\r\n        <td>{{edu.result}}</td>\r\n        <td>{{edu.passingYear}}</td>\r\n        <td align=\"right\">\r\n          <!--<button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>-->\r\n          <button class=\"btn btn-danger\" (click)=\"editEducation(edu)\" style=\"margin-left: 20px;\"> Edit</button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!--modal-->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Add Degree</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n<form #education=\"ngForm\" (ngSubmit)=\"onSubmit(content)\">\r\n    <div class=\"form-group col-md-12\">\r\n      <label>Degree</label>\r\n      <input type=\"text\" name=\"degree\" [(ngModel)]=\"newdegree\" class=\"form-control\" required>\r\n      <button style=\"margin-top: 32px\" class=\"btn btn-success\"  [disabled]=\"!education.valid\"  >Submit</button>\r\n    </div>\r\n</form>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>"

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
        this.educationForm = {
            institution: '',
            degreeId: '',
            result: '',
            resultoutof: '',
            board: '',
            passingyear: '',
            country: '',
        };
    }
    EducationComponent.prototype.ngOnInit = function () {
        //Getting Deegree
        this.getAllDegree();
        this.getAlleducation();
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
    EducationComponent.prototype.getAlleducation = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'education/get' + '?token=' + token).subscribe(function (data) {
            console.log(data);
            _this.educations = data;
        }, function (error) {
            console.log(error);
        });
    };
    EducationComponent.prototype.editEducation = function (edu) {
        //this.educationForm.degree = edu.degree;
        this.educationForm.result = edu.result;
        this.educationForm.institution = edu.institution;
        this.educationForm.degreeId = edu.fkDegreeId;
        this.educationForm.board = edu.boardUnivarsity;
        this.educationForm.passingyear = edu.passingYear;
        this.educationForm.resultoutof = edu.resultOutOf;
        console.log(edu.result);
    };
    EducationComponent.prototype.selectDegree = function (value) {
        this.educationForm.degree = value;
    };
    EducationComponent.prototype.openLg = function (content) {
        this.modalRef = this.modalService.open(content, {});
    };
    EducationComponent.prototype.onSubmit = function (content) {
        var _this = this;
        var fd = new FormData();
        fd.append('degree', this.newdegree);
        var token = this.token.get();
        this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].API_URL + 'degree/insert' + '?token=' + token, fd).subscribe(function (data) {
            console.log(data);
            _this.getAllDegree();
        }, function (error) {
            console.log(error.message);
        });
        this.modalRef.close();
    };
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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Employee Details</div>\r\n\r\n    <div class=\"card-body\">\r\n      <a style=\" float: right\" class=\"btn btn-outline-primary mb-2 mr-2\" routerLink=\"add\" >Add New</a>  <br><br>\r\n      <table datatable  id=\"example\" class=\"table\" [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTeigger\">\r\n        <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Employee ID</th>\r\n          <th>Degisnation</th>\r\n          <th>Department</th>\r\n          <th>Action</th>\r\n        </tr>\r\n\r\n        </thead>\r\n        <tbody >\r\n\r\n        <tr  *ngFor=\"let emp of employee\" >\r\n          <td>{{emp.firstName}}</td>\r\n          <td>{{emp.EmployeeId}}</td>\r\n          <td>{{emp.title}}</td>\r\n          <td>{{emp.departmentName}}</td>\r\n          <td>  <button class=\"btn btn-danger\" [routerLink]=\"['edit', emp.empid]\"   style=\"margin-left: 20px;\"> Edit</button></td>\r\n\r\n        </tr>\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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
    function EmployeeComponent(http, token, route) {
        this.http = http;
        this.token = token;
        this.route = route;
        this.dtOptions = {};
        this.dtTeigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var coldef = { "targets": 4,
            "sortable": false
        };
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            columnDefs: [coldef]
        };
        this.getAllemployee();
        // console.log(this.route.snapshot.params.id)
    };
    EmployeeComponent.prototype.getAllemployee = function () {
        var _this = this;
        var token = this.token.get();
        this.http.get(_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].API_URL + 'employee/get' + '?token=' + token).subscribe(function (data) {
            // console.log(data);
            _this.employee = data;
            _this.dtTeigger.next();
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Joining Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Actual Join Date</label>\n        <input type=\"date\" name=\"actualJoinDate\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Recent Join Date</label>\n        <input type=\"date\" name=\"recentJoinDate\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Resign Date</label>\n        <input type=\"date\" name=\"resignDate\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Weekend</label>\n        <input type=\"text\" name=\"weekend\" placeholder=\"day\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Access Pin</label>\n        <input type=\"text\" name=\"accessPin\" placeholder=\"pin\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Schedule In Time</label>\n        <input type=\"text\" name=\"scheduleInTime\" placeholder=\"in time\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Schedule Out Time</label>\n        <input type=\"text\" name=\"scheduleOutTime\" placeholder=\"out time\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Special Allowance</label>\n        &nbsp;\n        <input type=\"checkbox\" name=\"specialAllowance\">\n      </div>\n\n\n    </div>\n  </div>\n</div>"

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
    function JoiningInfoComponent() {
    }
    JoiningInfoComponent.prototype.ngOnInit = function () {
    };
    JoiningInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-joining-info',
            template: __webpack_require__(/*! ./joining-info.component.html */ "./src/app/components/user/joining-info/joining-info.component.html"),
            styles: [__webpack_require__(/*! ./joining-info.component.css */ "./src/app/components/user/joining-info/joining-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Personal Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n\n      <div class=\"form-group col-md-6\">\n        <label>Fathers Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"fatherName\" placeholder=\"father\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Mothers Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"motherName\" placeholder=\"mother\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Marital Status</label>\n        <select class=\"form-control\" name=\"maritalStatus\">\n          <option>Single</option>\n          <option>Married</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Spouse Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"spouseName\" placeholder=\"spouse\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Religion</label>\n        <select class=\"form-control\" name=\"religion\">\n          <option>Islam</option>\n          <option>Hindu</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Nationality</label>\n        <select class=\"form-control\" name=\"fkNationality\">\n          <option>Bangladeshi</option>\n          <option>Indian</option>\n        </select>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>National Id</label>\n        <input type=\"text\" class=\"form-control\" name=\"nationalId\" placeholder=\"National Id\">\n      </div>\n\n\n      <div class=\"col-md-12\">\n        <hr>\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Street</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentStreet\" placeholder=\"present street\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Police Station</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentPS\" placeholder=\"present PS\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Present Zipcod</label>\n        <input type=\"text\" class=\"form-control\" name=\"presentZipcod\" placeholder=\"Present Zip\">\n      </div>\n\n      <div class=\"col-md-12\">\n        <hr>\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Street</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentStreet\" placeholder=\"permanent street\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Police Station</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentPS\" placeholder=\"permanent PS\">\n      </div>\n\n\n\n      <div class=\"form-group col-md-6\">\n        <label>Permanent Zipcod</label>\n        <input type=\"text\" class=\"form-control\" name=\"permanentZipcod\" placeholder=\"permanent Zip\">\n      </div>\n\n\n    </div>\n  </div>\n</div>"

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
    function PersonalInfoComponent() {
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/components/user/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/components/user/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Salary Info\n  </div>\n\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"form-group col-md-6\">\n        <label>Consolidated Salary</label>\n        <input type=\"text\" name=\"consolidatedSalary\" placeholder=\"salary\" class=\"form-control\">\n      </div>\n\n      <div class=\"form-group col-md-6\">\n        <label>Payroll</label>\n        <input type=\"text\" name=\"payroll\" placeholder=\"payroll\" class=\"form-control\">\n      </div>\n\n\n\n    </div>\n  </div>\n</div>"

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
    function SalaryInfoComponent() {
    }
    SalaryInfoComponent.prototype.ngOnInit = function () {
    };
    SalaryInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salary-info',
            template: __webpack_require__(/*! ./salary-info.component.html */ "./src/app/components/user/salary-info/salary-info.component.html"),
            styles: [__webpack_require__(/*! ./salary-info.component.css */ "./src/app/components/user/salary-info/salary-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SalaryInfoComponent);
    return SalaryInfoComponent;
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
        get: function () { return "http://localhost:8000/api/"; },
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
            this.router.navigate(['login']);
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
    function TokenService(router) {
        this.router = router;
        this.token = false;
    }
    TokenService.prototype.setUser = function (user) {
        this.user = user;
    };
    TokenService.prototype.getUser = function () {
        return this.user;
    };
    //JWT Token
    TokenService.prototype.handle = function (token) {
        this.set(token);
    };
    TokenService.prototype.set = function (token) {
        localStorage.setItem('token', token);
        // console.log(this.payload(token));
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
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (payload) {
        return JSON.parse(atob(payload));
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular\hrsolution\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map