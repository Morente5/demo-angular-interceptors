(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-interceptors-test-interceptors-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/test-interceptors/test-interceptors.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test-interceptors/test-interceptors.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"h4\" translate>CHECK_REQ</p>\n\n<p>\n  <strong translate>SWAPI</strong>: {{'TWO_REQ' | translate}} <code>SwapiSecurityInterceptor</code> {{'ADD_HEADERS' | translate}} <code>Authorization</code>, <code>X-CRSFToken</code> {{'HEADERS' | translate}}\n</p>\n\n<div class=\"card-container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{'WITHOUT' | translate}} {{'SPINNER' | translate}}</h5>\n      <p class=\"card-text\">{{'THIS_REQ' | translate}} {{'DOESNT' | translate}} {{'USES' | translate}} <code>LoaderInterceptor</code></p>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"searchPeople()\"\n        translate\n      >SEARCH_PEOPLE</button>\n      <div class=\"results\" *ngIf=\"people?.length\">\n        <span\n          class=\"badge badge-pill badge-light\"\n          *ngFor=\"let p of people\"\n        >{{p.name}}</span>\n        <div>\n          <button\n            class=\"btn btn-outline-primary\"\n            (click)=\"people = []\"\n            translate\n          >CLEAR_PEOPLE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{'WITH' | translate}} {{'SPINNER' | translate}}</h5>\n      <p class=\"card-text\">{{'THIS_REQ' | translate}} {{'DOES' | translate}} {{'USES' | translate}} <code>LoaderInterceptor</code></p>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"searchPlanets()\"\n        translate\n      >SEARCH_PLANETS</button>\n      <div class=\"results\" *ngIf=\"planets?.length\">\n        <span\n          class=\"badge badge-pill badge-light\"\n          *ngFor=\"let p of planets\"\n        >{{p.name}}</span>\n        <div>\n          <button\n            class=\"btn btn-outline-primary\"\n            (click)=\"planets = []\"\n            translate\n          >CLEAR_PLANETS</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p>\n  <strong translate>POKEAPI</strong>: {{'TWO_REQ' | translate}} <code>PokeapiSecurityInterceptor</code> {{'ADD_HEADERS' | translate}} <code>Authentication</code>, <code>Custom-Header</code> {{'HEADERS' | translate}} {{'ALSO' | translate}} <code>LoaderInterceptor</code>\n</p>\n\n<div class=\"card-container\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{'WITHOUT' | translate}} {{'ALERT' | translate}}</h5>\n      <p class=\"card-text\">{{'THIS_REQ' | translate}} {{'DOESNT' | translate}} {{'USES' | translate}} <code>AlertInterceptor</code></p>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"searchPokemon()\"\n        translate\n      >SEARCH_POKEMON</button>\n      <div class=\"results\" *ngIf=\"pokemon?.length\">\n        <span\n          class=\"badge badge-pill badge-light\"\n          *ngFor=\"let p of pokemon\"\n        >{{p.name}}</span>\n        <div>\n          <button\n            class=\"btn btn-outline-primary\"\n            (click)=\"pokemon = []\"\n            translate\n          >CLEAR_POKEMON</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{'WITH' | translate}} {{'ALERT' | translate}}</h5>\n      <p class=\"card-text\">{{'THIS_REQ' | translate}} {{'DOES' | translate}} {{'USES' | translate}} <code>AlertInterceptor</code></p>\n      <button\n        class=\"btn btn-primary\"\n        (click)=\"searchBerries()\"\n        translate\n      >SEARCH_BERRIES</button>\n      <button\n        class=\"btn btn-danger\"\n        (click)=\"searchBerriesError()\"\n        translate\n      >SEARCH_BERRIES_ERROR</button>\n      <div class=\"results\" *ngIf=\"berries?.length\">\n        <span\n          class=\"badge badge-pill badge-light\"\n          *ngFor=\"let b of berries\"\n        >{{b.name}}</span>\n        <div>\n          <button\n            class=\"btn btn-outline-primary\"\n            (click)=\"berries = []\"\n            translate\n          >CLEAR_BERRIES</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/test-interceptors/test-interceptors-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/test-interceptors/test-interceptors-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TestInterceptorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInterceptorsRoutingModule", function() { return TestInterceptorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_interceptors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-interceptors.component */ "./src/app/test-interceptors/test-interceptors.component.ts");




var routes = [
    {
        path: '',
        component: _test_interceptors_component__WEBPACK_IMPORTED_MODULE_3__["TestInterceptorsComponent"],
    },
];
var TestInterceptorsRoutingModule = /** @class */ (function () {
    function TestInterceptorsRoutingModule() {
    }
    TestInterceptorsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TestInterceptorsRoutingModule);
    return TestInterceptorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/test-interceptors/test-interceptors.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/test-interceptors/test-interceptors.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 2rem;\n}\n\n.card-container {\n  display: flex;\n  margin-bottom: 2rem;\n}\n\n.card {\n  flex: 1 0 auto;\n  width: calc(50% - 1rem);\n}\n\n.card:first-child {\n  margin-right: 2rem;\n}\n\n.results {\n  margin-top: 1rem;\n}\n\n.badge {\n  margin-right: 0.5rem;\n}\n\n.btn-outline-primary {\n  margin-top: 1rem;\n}\n\n.btn-primary {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1pbnRlcmNlcHRvcnMvRDpcXGNvZGVcXGFuZ3VsYXItaW50ZXJjZXB0b3JzL3NyY1xcYXBwXFx0ZXN0LWludGVyY2VwdG9yc1xcdGVzdC1pbnRlcmNlcHRvcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rlc3QtaW50ZXJjZXB0b3JzL3Rlc3QtaW50ZXJjZXB0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtaW50ZXJjZXB0b3JzL3Rlc3QtaW50ZXJjZXB0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuXHJcbn1cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcclxufVxyXG4uY2FyZDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJyZW07XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jYXJkIHtcbiAgZmxleDogMSAwIGF1dG87XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDFyZW0pO1xufVxuXG4uY2FyZDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLnJlc3VsdHMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/test-interceptors/test-interceptors.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/test-interceptors/test-interceptors.component.ts ***!
  \******************************************************************/
/*! exports provided: TestInterceptorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInterceptorsComponent", function() { return TestInterceptorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/swapi.service */ "./src/app/core/services/swapi.service.ts");
/* harmony import */ var _core_services_pokeapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");




var TestInterceptorsComponent = /** @class */ (function () {
    function TestInterceptorsComponent(swapi, pokeapi) {
        this.swapi = swapi;
        this.pokeapi = pokeapi;
        this.people = [];
        this.planets = [];
        this.pokemon = [];
        this.berries = [];
    }
    TestInterceptorsComponent.prototype.searchPeople = function () {
        var _this = this;
        this.swapi.getPeople$().subscribe(function (people) {
            _this.people = people;
        });
    };
    TestInterceptorsComponent.prototype.searchPlanets = function () {
        var _this = this;
        this.swapi.getPlanets$().subscribe(function (planets) {
            _this.planets = planets;
        });
    };
    TestInterceptorsComponent.prototype.searchPokemon = function () {
        var _this = this;
        this.pokeapi.getPokemon$().subscribe(function (pokemon) {
            _this.pokemon = pokemon;
        });
    };
    TestInterceptorsComponent.prototype.searchBerries = function () {
        var _this = this;
        this.pokeapi.getBerries$().subscribe(function (berries) {
            _this.berries = berries;
        });
    };
    TestInterceptorsComponent.prototype.searchBerriesError = function () {
        this.pokeapi.getBerriesError$().subscribe();
    };
    TestInterceptorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-interceptors',
            template: __webpack_require__(/*! raw-loader!./test-interceptors.component.html */ "./node_modules/raw-loader/index.js!./src/app/test-interceptors/test-interceptors.component.html"),
            styles: [__webpack_require__(/*! ./test-interceptors.component.scss */ "./src/app/test-interceptors/test-interceptors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"],
            _core_services_pokeapi_service__WEBPACK_IMPORTED_MODULE_3__["PokeapiService"]])
    ], TestInterceptorsComponent);
    return TestInterceptorsComponent;
}());



/***/ }),

/***/ "./src/app/test-interceptors/test-interceptors.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/test-interceptors/test-interceptors.module.ts ***!
  \***************************************************************/
/*! exports provided: TestInterceptorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInterceptorsModule", function() { return TestInterceptorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _test_interceptors_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-interceptors-routing.module */ "./src/app/test-interceptors/test-interceptors-routing.module.ts");
/* harmony import */ var _test_interceptors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-interceptors.component */ "./src/app/test-interceptors/test-interceptors.component.ts");





var TestInterceptorsModule = /** @class */ (function () {
    function TestInterceptorsModule() {
    }
    TestInterceptorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_test_interceptors_component__WEBPACK_IMPORTED_MODULE_4__["TestInterceptorsComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _test_interceptors_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestInterceptorsRoutingModule"],
            ],
        })
    ], TestInterceptorsModule);
    return TestInterceptorsModule;
}());



/***/ })

}]);
//# sourceMappingURL=test-interceptors-test-interceptors-module-es5.js.map