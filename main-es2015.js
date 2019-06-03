(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\n<app-loader></app-loader>\n<app-alert></app-alert>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/alert/alert.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/alert/alert.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-alert\n  *ngFor=\"let alert of alerts\"\n  [type]=\"alert.type\" (close)=\"removeAlert(alert)\"\n>\n  {{ alert.message }}\n</ngb-alert>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/loader/loader.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/loader/loader.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-screen-wrapper\" *ngIf=\"isLoading$ | async\">\n  <div class=\"center\">\n    <div class=\"loader\">\n      <svg viewBox=\"0 0 80 80\">\n        <circle id=\"test\" cx=\"40\" cy=\"40\" r=\"32\"></circle>\n      </svg>\n    </div>\n\n    <div class=\"loader triangle\">\n      <svg viewBox=\"0 0 86 80\">\n        <polygon points=\"43 8 79 72 7 72\"></polygon>\n      </svg>\n    </div>\n\n    <div class=\"loader\">\n      <svg viewBox=\"0 0 80 80\">\n        <rect x=\"8\" y=\"8\" width=\"64\" height=\"64\"></rect>\n      </svg>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout/header/header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between\">\n  <span class=\"navbar-brand\"><span translate>BRAND_1</span><code> HttpClients </code><span translate>BRAND_2</span></span>\n  <div class=\"navbar-nav\">\n    <a\n      *ngFor=\"let lang of availableLangs\"\n      class=\"nav-item nav-link\"\n      [ngClass]=\"{ 'disabled': currentLang === lang }\"\n      (click)=\"setLang(lang)\"\n    >\n      {{lang}}\n      <span *ngIf=\"currentLang === lang\" class=\"sr-only\">(current)</span>\n  </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout/layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-main></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout/main/main.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | test-interceptors-test-interceptors-module */ "test-interceptors-test-interceptors-module").then(__webpack_require__.bind(null, /*! ./test-interceptors/test-interceptors.module */ "./src/app/test-interceptors/test-interceptors.module.ts")).then(mod => mod.TestInterceptorsModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/components/alert/alert.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/components/alert/alert.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 10000;\n  position: absolute;\n  top: 4rem;\n  right: 0.5rem;\n  width: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2FsZXJ0L0Q6XFxjb2RlXFxhbmd1bGFyLWludGVyY2VwdG9ycy9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcYWxlcnRcXGFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cmVtO1xyXG4gIHJpZ2h0OiAuNXJlbTtcclxuICB3aWR0aDogMzByZW07XHJcbn1cclxuIiwiOmhvc3Qge1xuICB6LWluZGV4OiAxMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRyZW07XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHdpZHRoOiAzMHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/alert/alert.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/alert/alert.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((alert) => this.alerts = (alert.message ? [...this.alerts, alert] : [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((alert) => this.removeAlert(alert))).subscribe();
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
};
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/alert/alert.component.html"),
        styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/core/components/alert/alert.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/core/components/loader/loader.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/loader/loader.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-screen-wrapper {\n  z-index: 100000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: center;\n  align-items: center;\n}\n\n.loader {\n  --path: #343a40;\n  --dot: #8064A1;\n  --duration: 3s;\n  width: 44px;\n  height: 44px;\n  position: relative;\n}\n\n.loader:before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  position: absolute;\n  display: block;\n  background: var(--dot);\n  top: 37px;\n  left: 19px;\n  -webkit-transform: translate(-18px, -18px);\n          transform: translate(-18px, -18px);\n  -webkit-animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n          animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n}\n\n.loader svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.loader svg rect,\n.loader svg polygon,\n.loader svg circle {\n  fill: none;\n  stroke: var(--path);\n  stroke-width: 10px;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n\n.loader svg polygon {\n  stroke-dasharray: 145 76 145 76;\n  stroke-dashoffset: 0;\n  -webkit-animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n          animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n}\n\n.loader svg rect {\n  stroke-dasharray: 192 64 192 64;\n  stroke-dashoffset: 0;\n  -webkit-animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n          animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n}\n\n.loader svg circle {\n  stroke-dasharray: 150 50 150 50;\n  stroke-dashoffset: 75;\n  -webkit-animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n          animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n}\n\n.loader.triangle {\n  width: 48px;\n}\n\n.loader.triangle:before {\n  left: 21px;\n  -webkit-transform: translate(-10px, -18px);\n          transform: translate(-10px, -18px);\n  -webkit-animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n          animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;\n}\n\n@-webkit-keyframes pathTriangle {\n  33% {\n    stroke-dashoffset: 74;\n  }\n  66% {\n    stroke-dashoffset: 147;\n  }\n  100% {\n    stroke-dashoffset: 221;\n  }\n}\n\n@keyframes pathTriangle {\n  33% {\n    stroke-dashoffset: 74;\n  }\n  66% {\n    stroke-dashoffset: 147;\n  }\n  100% {\n    stroke-dashoffset: 221;\n  }\n}\n\n@-webkit-keyframes dotTriangle {\n  33% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  66% {\n    -webkit-transform: translate(10px, -18px);\n            transform: translate(10px, -18px);\n  }\n  100% {\n    -webkit-transform: translate(-10px, -18px);\n            transform: translate(-10px, -18px);\n  }\n}\n\n@keyframes dotTriangle {\n  33% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  66% {\n    -webkit-transform: translate(10px, -18px);\n            transform: translate(10px, -18px);\n  }\n  100% {\n    -webkit-transform: translate(-10px, -18px);\n            transform: translate(-10px, -18px);\n  }\n}\n\n@-webkit-keyframes pathRect {\n  25% {\n    stroke-dashoffset: 64;\n  }\n  50% {\n    stroke-dashoffset: 128;\n  }\n  75% {\n    stroke-dashoffset: 192;\n  }\n  100% {\n    stroke-dashoffset: 256;\n  }\n}\n\n@keyframes pathRect {\n  25% {\n    stroke-dashoffset: 64;\n  }\n  50% {\n    stroke-dashoffset: 128;\n  }\n  75% {\n    stroke-dashoffset: 192;\n  }\n  100% {\n    stroke-dashoffset: 256;\n  }\n}\n\n@-webkit-keyframes dotRect {\n  25% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(18px, -18px);\n            transform: translate(18px, -18px);\n  }\n  75% {\n    -webkit-transform: translate(0, -36px);\n            transform: translate(0, -36px);\n  }\n  100% {\n    -webkit-transform: translate(-18px, -18px);\n            transform: translate(-18px, -18px);\n  }\n}\n\n@keyframes dotRect {\n  25% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  50% {\n    -webkit-transform: translate(18px, -18px);\n            transform: translate(18px, -18px);\n  }\n  75% {\n    -webkit-transform: translate(0, -36px);\n            transform: translate(0, -36px);\n  }\n  100% {\n    -webkit-transform: translate(-18px, -18px);\n            transform: translate(-18px, -18px);\n  }\n}\n\n@-webkit-keyframes pathCircle {\n  25% {\n    stroke-dashoffset: 125;\n  }\n  50% {\n    stroke-dashoffset: 175;\n  }\n  75% {\n    stroke-dashoffset: 225;\n  }\n  100% {\n    stroke-dashoffset: 275;\n  }\n}\n\n@keyframes pathCircle {\n  25% {\n    stroke-dashoffset: 125;\n  }\n  50% {\n    stroke-dashoffset: 175;\n  }\n  75% {\n    stroke-dashoffset: 225;\n  }\n  100% {\n    stroke-dashoffset: 275;\n  }\n}\n\n.loader {\n  display: inline-block;\n  margin: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvYWRlci9EOlxcY29kZVxcYW5ndWxhci1pbnRlcmNlcHRvcnMvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDBGQUFBO1VBQUEsa0ZBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREVJOzs7RUFHRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNBTjs7QURFSTtFQUNFLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrRkFBQTtVQUFBLHVGQUFBO0FDQU47O0FER0k7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEVBQUE7VUFBQSxzRUFBQTtBQ0ROOztBREdJO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZGQUFBO1VBQUEscUZBQUE7QUNETjs7QURLRTtFQUNFLFdBQUE7QUNISjs7QURJSTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsOEZBQUE7VUFBQSxzRkFBQTtBQ0ZOOztBRFFBO0VBQ0U7SUFDRSxxQkFBQTtFQ0xGO0VET0E7SUFDRSxzQkFBQTtFQ0xGO0VET0E7SUFDRSxzQkFBQTtFQ0xGO0FBQ0Y7O0FESkE7RUFDRTtJQUNFLHFCQUFBO0VDTEY7RURPQTtJQUNFLHNCQUFBO0VDTEY7RURPQTtJQUNFLHNCQUFBO0VDTEY7QUFDRjs7QURRQTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ05GO0VEUUE7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VDTkY7RURRQTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUNORjtBQUNGOztBREhBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDTkY7RURRQTtJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RUNORjtFRFFBO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ05GO0FBQ0Y7O0FEU0E7RUFDRTtJQUNFLHFCQUFBO0VDUEY7RURTQTtJQUNFLHNCQUFBO0VDUEY7RURTQTtJQUNFLHNCQUFBO0VDUEY7RURTQTtJQUNFLHNCQUFBO0VDUEY7QUFDRjs7QURMQTtFQUNFO0lBQ0UscUJBQUE7RUNQRjtFRFNBO0lBQ0Usc0JBQUE7RUNQRjtFRFNBO0lBQ0Usc0JBQUE7RUNQRjtFRFNBO0lBQ0Usc0JBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDUkY7RURVQTtJQUNFLHlDQUFBO1lBQUEsaUNBQUE7RUNSRjtFRFVBO0lBQ0Usc0NBQUE7WUFBQSw4QkFBQTtFQ1JGO0VEVUE7SUFDRSwwQ0FBQTtZQUFBLGtDQUFBO0VDUkY7QUFDRjs7QURKQTtFQUNFO0lBQ0Usa0NBQUE7WUFBQSwwQkFBQTtFQ1JGO0VEVUE7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VDUkY7RURVQTtJQUNFLHNDQUFBO1lBQUEsOEJBQUE7RUNSRjtFRFVBO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ1JGO0FBQ0Y7O0FEV0E7RUFDRTtJQUNFLHNCQUFBO0VDVEY7RURXQTtJQUNFLHNCQUFBO0VDVEY7RURXQTtJQUNFLHNCQUFBO0VDVEY7RURXQTtJQUNFLHNCQUFBO0VDVEY7QUFDRjs7QURIQTtFQUNFO0lBQ0Usc0JBQUE7RUNURjtFRFdBO0lBQ0Usc0JBQUE7RUNURjtFRFdBO0lBQ0Usc0JBQUE7RUNURjtFRFdBO0lBQ0Usc0JBQUE7RUNURjtBQUNGOztBRFlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmxvYWRpbmctc2NyZWVuLXdyYXBwZXIge1xyXG4gIHotaW5kZXg6IDEwMDAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIC0tcGF0aDogI3skZ3JheS04MDB9O1xyXG4gIC0tZG90OiAjeyRwcmltYXJ5fTtcclxuICAtLWR1cmF0aW9uOiAzcztcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb3QpO1xyXG4gICAgdG9wOiAzN3B4O1xyXG4gICAgbGVmdDogMTlweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOHB4LCAtMThweCk7XHJcbiAgICBhbmltYXRpb246IGRvdFJlY3QgdmFyKC0tZHVyYXRpb24pIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpXHJcbiAgICAgIGluZmluaXRlO1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHJlY3QsXHJcbiAgICBwb2x5Z29uLFxyXG4gICAgY2lyY2xlIHtcclxuICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgc3Ryb2tlOiB2YXIoLS1wYXRoKTtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xyXG4gICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICB9XHJcbiAgICBwb2x5Z29uIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTQ1ICgyMjEgLSAxNDUpIDE0NSAoMjIxIC0gMTQ1KTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgIGFuaW1hdGlvbjogcGF0aFRyaWFuZ2xlIHZhcigtLWR1cmF0aW9uKVxyXG4gICAgICAgIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgcmVjdCB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6ICgyNTYgLyA0ICogMykgKDI1NiAvIDQpICgyNTYgLyA0ICogMykgKDI1NiAvIDQpO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgICAgYW5pbWF0aW9uOiBwYXRoUmVjdCAzcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIGNpcmNsZSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6ICgyMDAgLyA0ICogMykgKDIwMCAvIDQpICgyMDAgLyA0ICogMykgKDIwMCAvIDQpO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogNzU7XHJcbiAgICAgIGFuaW1hdGlvbjogcGF0aENpcmNsZSB2YXIoLS1kdXJhdGlvbilcclxuICAgICAgICBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi50cmlhbmdsZSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMjFweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC0xOHB4KTtcclxuICAgICAgYW5pbWF0aW9uOiBkb3RUcmlhbmdsZSB2YXIoLS1kdXJhdGlvbilcclxuICAgICAgICBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGF0aFRyaWFuZ2xlIHtcclxuICAzMyUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDc0O1xyXG4gIH1cclxuICA2NiUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE0NztcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjIxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBkb3RUcmlhbmdsZSB7XHJcbiAgMzMlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA2NiUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTE4cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMThweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBhdGhSZWN0IHtcclxuICAyNSUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDY0O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEyODtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxOTI7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI1NjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZG90UmVjdCB7XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMThweCwgLTE4cHgpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTM2cHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOHB4LCAtMThweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBhdGhDaXJjbGUge1xyXG4gIDI1JSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTI1O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE3NTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMjU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI3NTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG4iLCIubG9hZGluZy1zY3JlZW4td3JhcHBlciB7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMCAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgLS1wYXRoOiAjMzQzYTQwO1xuICAtLWRvdDogIzgwNjRBMTtcbiAgLS1kdXJhdGlvbjogM3M7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2FkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tZG90KTtcbiAgdG9wOiAzN3B4O1xuICBsZWZ0OiAxOXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMThweCwgLTE4cHgpO1xuICBhbmltYXRpb246IGRvdFJlY3QgdmFyKC0tZHVyYXRpb24pIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpIGluZmluaXRlO1xufVxuLmxvYWRlciBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sb2FkZXIgc3ZnIHJlY3QsXG4ubG9hZGVyIHN2ZyBwb2x5Z29uLFxuLmxvYWRlciBzdmcgY2lyY2xlIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiB2YXIoLS1wYXRoKTtcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG59XG4ubG9hZGVyIHN2ZyBwb2x5Z29uIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTQ1IDc2IDE0NSA3NjtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIGFuaW1hdGlvbjogcGF0aFRyaWFuZ2xlIHZhcigtLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcbn1cbi5sb2FkZXIgc3ZnIHJlY3Qge1xuICBzdHJva2UtZGFzaGFycmF5OiAxOTIgNjQgMTkyIDY0O1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBwYXRoUmVjdCAzcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcbn1cbi5sb2FkZXIgc3ZnIGNpcmNsZSB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE1MCA1MCAxNTAgNTA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA3NTtcbiAgYW5pbWF0aW9uOiBwYXRoQ2lyY2xlIHZhcigtLWR1cmF0aW9uKSBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KSBpbmZpbml0ZTtcbn1cbi5sb2FkZXIudHJpYW5nbGUge1xuICB3aWR0aDogNDhweDtcbn1cbi5sb2FkZXIudHJpYW5nbGU6YmVmb3JlIHtcbiAgbGVmdDogMjFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC0xOHB4KTtcbiAgYW5pbWF0aW9uOiBkb3RUcmlhbmdsZSB2YXIoLS1kdXJhdGlvbikgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44NikgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcGF0aFRyaWFuZ2xlIHtcbiAgMzMlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNzQ7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTQ3O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMjE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZG90VHJpYW5nbGUge1xuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgLTE4cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMThweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcGF0aFJlY3Qge1xuICAyNSUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA2NDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMjg7XG4gIH1cbiAgNzUlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTkyO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNTY7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZG90UmVjdCB7XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOHB4LCAtMThweCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMzZweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE4cHgsIC0xOHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBwYXRoQ2lyY2xlIHtcbiAgMjUlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTI1O1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE3NTtcbiAgfVxuICA3NSUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI3NTtcbiAgfVxufVxuLmxvYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/components/loader/loader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/loader/loader.component.ts ***!
  \************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading$ = this.loaderService.isLoading$;
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/core/components/loader/loader.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
], LoaderComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-forkable-http-client */ "./node_modules/ngx-forkable-http-client/fesm2015/ngx-forkable-http-client.js");
/* harmony import */ var _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/http-client.injection-token */ "./src/app/core/http/http-client.injection-token.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "./src/app/core/interceptors/loader.interceptor.ts");
/* harmony import */ var _interceptors_alert_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/alert.interceptor */ "./src/app/core/interceptors/alert.interceptor.ts");
/* harmony import */ var _interceptors_swapi_security_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/swapi-security.interceptor */ "./src/app/core/interceptors/swapi-security.interceptor.ts");
/* harmony import */ var _interceptors_stapi_security_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/stapi-security.interceptor */ "./src/app/core/interceptors/stapi-security.interceptor.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/swapi.service */ "./src/app/core/services/swapi.service.ts");
/* harmony import */ var _services_stapi_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/stapi.service */ "./src/app/core/services/stapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/core/layout/layout.module.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/core/components/loader/loader.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/core/components/alert/alert.component.ts");

var CoreModule_1;


// HTTP







// Translate


// Services









function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule, translate) {
        this.translate = translate;
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        const browserLang = this.translate.getBrowserLang();
        this.translate.setDefaultLang('en');
        this.translate.use(browserLang);
    }
    static forRoot() {
        return {
            ngModule: CoreModule_1,
            providers: [
                _services_swapi_service__WEBPACK_IMPORTED_MODULE_12__["SwapiService"],
                _services_stapi_service__WEBPACK_IMPORTED_MODULE_13__["StapiService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_16__["AlertService"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
                // Define the providers for the non-global interceptors.
                _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__["LoaderInterceptor"],
                _interceptors_alert_interceptor__WEBPACK_IMPORTED_MODULE_7__["AlertInterceptor"],
                _interceptors_swapi_security_interceptor__WEBPACK_IMPORTED_MODULE_8__["SwapiSecurityInterceptor"],
                _interceptors_stapi_security_interceptor__WEBPACK_IMPORTED_MODULE_9__["StapiSecurityInterceptor"],
                // SWAPI Http Clients
                {
                    provide: _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["SwapiHttpClient"],
                    useFactory: ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["forkHttpClient"],
                    deps: [ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["ForkableHttpClient"], _interceptors_swapi_security_interceptor__WEBPACK_IMPORTED_MODULE_8__["SwapiSecurityInterceptor"]],
                },
                {
                    provide: _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["SwapiLoaderHttpClient"],
                    useFactory: ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["forkHttpClient"],
                    deps: [_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["SwapiHttpClient"], _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__["LoaderInterceptor"]],
                },
                // STAPI Http Clients
                {
                    provide: _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["StapiLoaderHttpClient"],
                    useFactory: ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["forkHttpClient"],
                    deps: [ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["ForkableHttpClient"], _interceptors_stapi_security_interceptor__WEBPACK_IMPORTED_MODULE_9__["StapiSecurityInterceptor"], _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_6__["LoaderInterceptor"]],
                },
                {
                    provide: _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["StapiAlertLoaderHttpClient"],
                    useFactory: ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["forkHttpClient"],
                    deps: [_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_5__["StapiLoaderHttpClient"], _interceptors_alert_interceptor__WEBPACK_IMPORTED_MODULE_7__["AlertInterceptor"]],
                },
            ],
        };
    }
};
CoreModule = CoreModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["ForkableHttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]],
                },
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
        ],
        declarations: [
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_20__["AlertComponent"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_forkable_http_client__WEBPACK_IMPORTED_MODULE_4__["ForkableHttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_20__["AlertComponent"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
], CoreModule);



/***/ }),

/***/ "./src/app/core/http/http-client.injection-token.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/http/http-client.injection-token.ts ***!
  \**********************************************************/
/*! exports provided: SwapiHttpClient, SwapiLoaderHttpClient, StapiLoaderHttpClient, StapiAlertLoaderHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiHttpClient", function() { return SwapiHttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiLoaderHttpClient", function() { return SwapiLoaderHttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapiLoaderHttpClient", function() { return StapiLoaderHttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapiAlertLoaderHttpClient", function() { return StapiAlertLoaderHttpClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const SwapiHttpClient = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SwapiHttpClient');
const SwapiLoaderHttpClient = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SwapiLoaderHttpClient');
const StapiLoaderHttpClient = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('StapiLoaderHttpClient');
const StapiAlertLoaderHttpClient = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('StapiAlertLoaderHttpClient');


/***/ }),

/***/ "./src/app/core/interceptors/alert.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/alert.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AlertInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInterceptor", function() { return AlertInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/core/services/alert.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AlertInterceptor = class AlertInterceptor {
    constructor(alertService) {
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.alertService.success(`${res.url} - ${res.status} ${res.statusText}`);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            this.alertService.error(`${request.url} - ${error.status} ${error.statusText}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        }));
    }
};
AlertInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], AlertInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/loader.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.totalRequests = 0;
    }
    intercept(request, next) {
        this.totalRequests++;
        this.loaderService.start();
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                this.decreaseRequests();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            this.decreaseRequests();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
    decreaseRequests() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.loaderService.stop();
        }
    }
};
LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/stapi-security.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/stapi-security.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: StapiSecurityInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapiSecurityInterceptor", function() { return StapiSecurityInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");



let StapiSecurityInterceptor = class StapiSecurityInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authentication: `TOKEN ${this.auth.tokenStapi}`,
                'Custom-Header': 'testing-angular-interceptors',
            },
        });
        return next.handle(request);
    }
};
StapiSecurityInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], StapiSecurityInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/swapi-security.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/interceptors/swapi-security.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: SwapiSecurityInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiSecurityInterceptor", function() { return SwapiSecurityInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");



let SwapiSecurityInterceptor = class SwapiSecurityInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.tokenSwapi}`,
                'X-CSRFToken': 'testing-angular-interceptors',
            },
        });
        return next.handle(request);
    }
};
SwapiSecurityInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], SwapiSecurityInterceptor);



/***/ }),

/***/ "./src/app/core/layout/header/header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/layout/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HeaderComponent = class HeaderComponent {
    constructor(translate) {
        this.translate = translate;
        this.availableLangs = ['en', 'es'];
    }
    ngOnInit() {
        const browserLang = this.translate.getBrowserLang();
        this.currentLang = this.availableLangs.includes(browserLang) ? browserLang : this.translate.defaultLang;
        this.translate.onLangChange.subscribe((lang) => {
            this.currentLang = lang.lang;
        });
    }
    setLang(lang) {
        this.translate.use(lang);
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/layout/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/layout/layout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/layout/layout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/layout/layout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/core/layout/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/core/layout/layout.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/layout/layout.module.ts ***!
  \**********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/core/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/layout/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/core/layout/main/main.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [
            _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        ],
        exports: [
            _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        ],
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/core/layout/main/main.component.scss":
/*!******************************************************!*\
  !*** ./src/app/core/layout/main/main.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/layout/main/main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/layout/main/main.component.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/core/layout/main/main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/core/services/alert.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/alert.service.ts ***!
  \************************************************/
/*! exports provided: AlertType, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Error"] = "danger";
    AlertType["Info"] = "info";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
let AlertService = class AlertService {
    constructor() {
        this.alert$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getAlert$() {
        return this.alert$.asObservable();
    }
    success(message) {
        this.alert({ message, type: AlertType.Success });
    }
    error(message) {
        this.alert({ message, type: AlertType.Error });
    }
    info(message) {
        this.alert({ message, type: AlertType.Info });
    }
    warn(message) {
        this.alert({ message, type: AlertType.Warning });
    }
    // main alert method
    alert(alert) {
        this.alert$.next(alert);
    }
    clear() {
        this.alert$.next({});
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AlertService);



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        this.tokenSwapi = 'X';
        this.tokenStapi = 'Y';
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/core/services/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    start() {
        this.isLoading$.next(true);
    }
    stop() {
        this.isLoading$.next(false);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderService);



/***/ }),

/***/ "./src/app/core/services/stapi.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/stapi.service.ts ***!
  \************************************************/
/*! exports provided: StapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StapiService", function() { return StapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/http-client.injection-token */ "./src/app/core/http/http-client.injection-token.ts");





let StapiService = class StapiService {
    constructor(http, httpAlert) {
        this.http = http;
        this.httpAlert = httpAlert;
        this.url = `http://stapi.co/api/v1/rest`;
    }
    getAnimals$() {
        return this.http.get(`${this.url}/animal/search`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('animals'));
    }
    getWeapons$() {
        return this.httpAlert.get(`${this.url}/weapon/search`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('weapons'));
    }
    getWeaponsError$() {
        return this.httpAlert.get(`${this.url}/weapon/`);
    }
};
StapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__["StapiLoaderHttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__["StapiAlertLoaderHttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StapiService);



/***/ }),

/***/ "./src/app/core/services/swapi.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/swapi.service.ts ***!
  \************************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/http-client.injection-token */ "./src/app/core/http/http-client.injection-token.ts");





let SwapiService = class SwapiService {
    constructor(http, httpLoader) {
        this.http = http;
        this.httpLoader = httpLoader;
        this.url = 'https://swapi.co/api';
    }
    getPeople$() {
        return this.http.get(`${this.url}/people/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('results'));
    }
    getPlanets$() {
        return this.httpLoader.get(`${this.url}/planets/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])('results'));
    }
};
SwapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__["SwapiHttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_http_http_client_injection_token__WEBPACK_IMPORTED_MODULE_4__["SwapiLoaderHttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SwapiService);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\angular-interceptors\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map