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
/* harmony import */ var _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/company/add-company/add-company.component */ "./src/app/components/company/add-company/add-company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'datatable', component: _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user/add', component: _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
    { path: 'employee/add', component: _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"] },
    { path: 'company/add', component: _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_7__["AddCompanyComponent"] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n  <app-navbar *ngIf=\"isLogIn()\"></app-navbar>\r\n\r\n\r\n\r\n\r\n  <div class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n\r\n\r\n"

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
    }
    AppComponent.prototype.isLogIn = function () {
        var url = this.token.getUrl();
        if (url == '/login') {
            return false;
        }
        else {
            return true;
        }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/add-user/add-user.component */ "./src/app/components/user/add-user/add-user.component.ts");
/* harmony import */ var _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/add-employee/add-employee.component */ "./src/app/components/user/add-employee/add-employee.component.ts");
/* harmony import */ var _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company/add-company/add-company.component */ "./src/app/components/company/add-company/add-company.component.ts");
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
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_7__["TablesComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"],
                _components_user_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_11__["AddEmployeeComponent"],
                _components_company_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_12__["AddCompanyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
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

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header-pills\">  <h3 align=\"center\" style=\"font-family: 'Righteous', cursive;\">Add Company</h3></div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"form-group col-md-6\">\n          <label>Company Name</label>\n          <input type=\"text\" class=\"form-control\" name=\"companyName\" placeholder=\"name\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Company Address</label>\n          <textarea class=\"form-control\" name=\"companyAddress\" placeholder=\"address\"></textarea>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Phone</label>\n          <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"+8801.....\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Fax</label>\n          <input type=\"text\" class=\"form-control\" name=\"fax\" placeholder=\"fax\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"abc@abc.com\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>WebSite</label>\n          <input type=\"text\" class=\"form-control\" name=\"webSite\" placeholder=\"www\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Logo</label>\n          <input type=\"file\" class=\"form-control\" name=\"logo\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <label>Logo Url</label>\n          <input type=\"text\" class=\"form-control\" name=\"logoUrl\">\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <select class=\"form-control\" name=\"fkActivationStatus\">\n            <option>Active</option>\n            <option>Inactive</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-md-6\">\n          <button class=\"btn btn-success\">Submit</button>\n        </div>\n\n\n\n\n      </div>\n\n    </div>\n  </div>\n\n\n</div>"

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
    function AddCompanyComponent() {
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
    };
    AddCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! ./add-company.component.html */ "./src/app/components/company/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/company/add-company/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCompanyComponent);
    return AddCompanyComponent;
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

module.exports = "<p>\n  home works! {{hellow}}\n</p>\n"

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

module.exports = "<div class=\"accountbg\"></div>\r\n<div class=\"wrapper-page\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"text-center\">\r\n        <b class=\"waves-effect waves-light\">HR Solution</b>\r\n      </h3>\r\n\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n      <div align=\"center\">\r\n        <img src=\"assets/logo/TCL_logo.png\" height=\"150\" width=\"200\">\r\n      </div>\r\n\r\n      <div class=\"p-3\">\r\n        <form method=\"POST\" class=\"form-horizontal m-t-20\">\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input id=\"loginId\" type=\"text\" class=\"form-control\" placeholder=\"email\" name=\"loginId\"  required autofocus>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-12\">\r\n              <input class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" required>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group text-center row m-t-20\">\r\n            <div class=\"col-12\">\r\n              <button routerLink=\"/home\" class=\"btn btn-block btn-info\">Log In</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- Navigation Bar-->\r\n<header id=\"topnav\">\r\n  <div class=\"topbar-main\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"logo\">\r\n\r\n        <a routerLink=\"/home\" class=\"logo\">\r\n          <h3>HR</h3>\r\n        </a>\r\n\r\n      </div>\r\n\r\n      <div class=\"menu-extras topbar-custom\">\r\n        <!-- Search input -->\r\n        <div class=\"search-wrap\" id=\"search-wrap\">\r\n          <div class=\"search-bar\">\r\n            <input class=\"search-input\" type=\"search\" placeholder=\"Search\" />\r\n            <a href=\"#\" class=\"close-search toggle-search\" data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-close-circle\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <ul class=\"list-inline float-right mb-0\">\r\n          <!-- Search -->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link waves-effect toggle-search\" href=\"#\"  data-target=\"#search-wrap\">\r\n              <i class=\"mdi mdi-magnify noti-icon\"></i>\r\n            </a>\r\n          </li>\r\n          <!-- Messages-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-email-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5><span class=\"badge badge-danger float-right\">745</span>Messages</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-2.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Charles M. Jones</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-3.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Thomas J. Mimms</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon\"><img src=\"assets/images/users/avatar-4.jpg\" alt=\"user-img\" class=\"img-fluid rounded-circle\" /> </div>\r\n                <p class=\"notify-details\"><b>Luis M. Konrad</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- notification-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <i class=\"mdi mdi-bell-outline noti-icon\"></i>\r\n              <span class=\"badge badge-danger noti-icon-badge\">3</span>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg\">\r\n              <!-- item-->\r\n              <div class=\"dropdown-item noti-title\">\r\n                <h5>Notification (3)</h5>\r\n              </div>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item active\">\r\n                <div class=\"notify-icon bg-success\"><i class=\"mdi mdi-cart-outline\"></i></div>\r\n                <p class=\"notify-details\"><b>Your order is placed</b><small class=\"text-muted\">Dummy text of the printing and typesetting industry.</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-warning\"><i class=\"mdi mdi-message\"></i></div>\r\n                <p class=\"notify-details\"><b>New Message received</b><small class=\"text-muted\">You have 87 unread messages</small></p>\r\n              </a>\r\n\r\n              <!-- item-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                <div class=\"notify-icon bg-info\"><i class=\"mdi mdi-martini\"></i></div>\r\n                <p class=\"notify-details\"><b>Your item is shipped</b><small class=\"text-muted\">It is a long established fact that a reader will</small></p>\r\n              </a>\r\n\r\n              <!-- All-->\r\n              <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\">\r\n                View All\r\n              </a>\r\n\r\n            </div>\r\n          </li>\r\n          <!-- User-->\r\n          <li class=\"list-inline-item dropdown notification-list\">\r\n            <a class=\"nav-link dropdown-toggle arrow-none waves-effect nav-user\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"\r\n               aria-haspopup=\"false\" aria-expanded=\"false\">\r\n              <img src=\"assets/images/users/avatar-1.jpg\" alt=\"user\" class=\"rounded-circle\">\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right profile-dropdown \">\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-user text-muted\"></i> Profile</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-wallet text-muted\"></i> My Wallet</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><span class=\"badge badge-success pull-right m-t-5\">5</span><i class=\"dripicons-gear text-muted\"></i> Settings</a>\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-lock text-muted\"></i> Lock screen</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\"><i class=\"dripicons-exit text-muted\"></i> Logout</a>\r\n            </div>\r\n          </li>\r\n          <li class=\"menu-item list-inline-item\">\r\n            <!-- Mobile menu toggle-->\r\n            <a class=\"navbar-toggle nav-link\">\r\n              <div class=\"lines\">\r\n                <span></span>\r\n                <span></span>\r\n                <span></span>\r\n              </div>\r\n            </a>\r\n            <!-- End mobile menu toggle-->\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <!-- end menu-extras -->\r\n\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </div> <!-- end container -->\r\n  </div>\r\n  <!-- end topbar-main -->\r\n\r\n  <!-- MENU Start -->\r\n  <div class=\"navbar-custom\">\r\n    <div class=\"container-fluid\">\r\n      <div id=\"navigation\">\r\n        <!-- Navigation Menu-->\r\n        <ul class=\"navigation-menu\">\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a routerLink=\"/home\" ><i class=\"ti-home\"></i>Dashboard</a>\r\n          </li>\r\n\r\n\r\n\r\n          <li class=\"has-submenu\" routerLinkActive=\"active\">\r\n            <a href=\"#\"><i class=\"ti-bookmark-alt\"></i>Components</a>\r\n            <ul class=\"submenu\">\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Forms</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"user/add\">Add User</a></li>\r\n                  <li><a routerLink=\"employee/add\">Add Employee</a></li>\r\n                  <li><a routerLink=\"company/add\">Add Company</a></li>\r\n\r\n                </ul>\r\n              </li>\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Icons</a>\r\n                <ul class=\"submenu\">\r\n                  <li><a href=\"icons-material.html\">Material Design</a></li>\r\n                  <li><a href=\"icons-ion.html\">Ion Icons</a></li>\r\n                  <li><a href=\"icons-fontawesome.html\">Font Awesome</a></li>\r\n                  <li><a href=\"icons-themify.html\">Themify Icons</a></li>\r\n                  <li><a href=\"icons-dripicons.html\">Dripicons</a></li>\r\n                  <li><a href=\"icons-typicons.html\">Typicons Icons</a></li>\r\n                </ul>\r\n              </li>\r\n              <li>\r\n                <a href=\"calendar.html\">Calendar</a>\r\n              </li>\r\n\r\n              <li class=\"has-submenu\">\r\n                <a href=\"#\">Tables </a>\r\n                <ul class=\"submenu\">\r\n                  <li><a routerLink=\"/datatable\">Data Table</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n          <li class=\"has-submenu\">\r\n            <a href=\"#\"><i class=\"ti-files\"></i>Pages</a>\r\n            <ul class=\"submenu megamenu\">\r\n              <li>\r\n                <ul>\r\n                  <li><a routerLink=\"/login\">Login</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n        </ul>\r\n        <!-- End navigation menu -->\r\n      </div> <!-- end #navigation -->\r\n    </div> <!-- end container -->\r\n  </div> <!-- end navbar-custom -->\r\n</header>\r\n<!-- End Navigation Bar-->"

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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
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

module.exports = "\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Personal Details\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Department</label>\r\n          <select class=\"form-control\">\r\n            <option>department 1</option>\r\n            <option>department 2</option>\r\n            <option>department 3</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Designation</label>\r\n          <select class=\"form-control\">\r\n            <option>designation 1</option>\r\n            <option>designation 2</option>\r\n            <option>designation 3</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\"><hr></div>\r\n\r\n        <label class=\"col-md-1\">Full Name</label>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Middle name\">\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Nick name\">\r\n        </div>\r\n\r\n        <div class=\"col-md-12\"><hr></div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <label>Gender</label>\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"gender\">Male\r\n\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"gender\">Female\r\n\r\n          &nbsp;\r\n          &nbsp;\r\n          &nbsp;\r\n\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"gender\">Other\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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
    function AddEmployeeComponent() {
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.component.html */ "./src/app/components/user/add-employee/add-employee.component.html"),
            styles: [__webpack_require__(/*! ./add-employee.component.css */ "./src/app/components/user/add-employee/add-employee.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Personal Details</div>\r\n    <div class=\"card-body\">\r\n      <form #loginForm=ngForm (ngSubmit)=\"onSubmit()\" >\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"name\" name=\"name\" [(ngModel)]=\"userinput.name\" required>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Email</label>\r\n          <input class=\"form-control\" type=\"email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"userinput.email\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>User Type</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"userinput.type\" name=\"type\" required>\r\n            <option value=\"1\" selected>type 1</option>\r\n            <option value=\"2\">type 2</option>\r\n            <option value=\"3\">type 3</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Contact Number</label>\r\n          <input class=\"form-control\" type=\"text\" placeholder=\"number\" name=\"number\" [(ngModel)]=\"userinput.number\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-4\">\r\n          <label>Image</label>\r\n          <input type=\"file\" name=\"image\" class=\"form-control\" [(ngModel)]=\"userinput.userImage\">\r\n        </div>\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success \">insert</button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n"

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
    function AddUserComponent() {
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
        __metadata("design:paramtypes", [])
    ], AddUserComponent);
    return AddUserComponent;
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
    TokenService.prototype.getToken = function () {
        return this.token;
    };
    TokenService.prototype.setToken = function (value) {
        this.token = value;
    };
    TokenService.prototype.getUrl = function () {
        return this.router.url;
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