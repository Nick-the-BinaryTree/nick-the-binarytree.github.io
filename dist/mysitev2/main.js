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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: GOTO_BIO_PAGE, GOTO_CONNECT_PAGE, GOTO_LANDING_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_BIO_PAGE", function() { return GOTO_BIO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_CONNECT_PAGE", function() { return GOTO_CONNECT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_LANDING_PAGE", function() { return GOTO_LANDING_PAGE; });
var GOTO_BIO_PAGE = 'GOTO_BIO_PAGE';
var GOTO_CONNECT_PAGE = 'GOTO_CONNECT_PAGE';
var GOTO_LANDING_PAGE = 'GOTO_LANDING_PAGE';


/***/ }),

/***/ "./src/app/animation.service.ts":
/*!**************************************!*\
  !*** ./src/app/animation.service.ts ***!
  \**************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-bg/game.util */ "./src/app/game-bg/game.util.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BLUE = 'rgb(83,109,254,0.1)';
var GREEN = 'rgb(105,240,174,0.1)';
var RED = 'rgb(255,82,82,0.1)';
var MAX_RADIUS = 20;
var MIN_RADIUS = 10;
var MID_RADIUS = (MAX_RADIUS + MIN_RADIUS) / 2;
var MAX_VELOCITY = 80;
var MIN_VELOCITY = 40;
var MID_VELOCITY = (MAX_VELOCITY + MIN_VELOCITY) / 2;
var BURST_OFFSET = 140;
var FOLLOW_SPEED_DRAG = 0.02;
var NUM_TRAIL_OBJS = 3;
var WITHER = 120;
var AnimationService = /** @class */ (function () {
    function AnimationService(ngRedux) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.pageChange = this.page$.subscribe(function (x) { _this.pageString = x; });
    }
    AnimationService.prototype.getBgColor = function () {
        switch (this.pageString) {
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].CONNECT:
                return '#000';
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].LANDING:
                return '#1c2328';
        }
    };
    AnimationService.prototype.getCustomInit = function (ctx) {
        switch (this.pageString) {
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].CONNECT:
                ctx.globalCompositeOperation = 'destination-out';
                break;
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].LANDING:
                ctx.globalCompositeOperation = 'source-over';
                break;
        }
    };
    AnimationService.prototype.getInitObjs = function (boundaries) {
        switch (this.pageString) {
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].CONNECT:
                return Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["trailObjGen"])(NUM_TRAIL_OBJS, BURST_OFFSET, boundaries, MIN_RADIUS, MID_VELOCITY, BLUE, GREEN, RED);
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].LANDING:
                return [__assign({}, Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartPos"])(boundaries, MAX_RADIUS), { radius: MAX_RADIUS, velocity: Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartVelocityDir"])(MIN_VELOCITY), color: BLUE }), __assign({}, Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartPos"])(boundaries, MID_RADIUS), { radius: MID_RADIUS, velocity: Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartVelocityDir"])(MID_VELOCITY), color: GREEN }), __assign({}, Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartPos"])(boundaries, MIN_RADIUS), { radius: MIN_RADIUS, velocity: Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomStartVelocityDir"])(MAX_VELOCITY), color: RED })];
        }
    };
    AnimationService.prototype.getRender = function (ctx, state) {
        ctx.fillStyle = 'rgba(0,0,0,0.005)';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        state['objects'].forEach(function (obj) {
            ctx.fillStyle = obj.color;
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.closePath();
        });
    };
    AnimationService.prototype.getUpdate = function (boundaries, deltaTime, mouseClicked, mousePos, state) {
        if (state['objects'] == null) {
            state['objects'] = this.getInitObjs(boundaries);
        }
        switch (this.pageString) {
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].CONNECT:
                state['objects'].forEach(function (obj) {
                    var xDist = mousePos.x - obj.x;
                    var yDist = mousePos.y - obj.y;
                    if (mouseClicked) {
                        obj.offsetX = Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomOffset"])(BURST_OFFSET);
                        obj.offsetY = Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["randomOffset"])(BURST_OFFSET);
                    }
                    obj.x += deltaTime * (xDist * FOLLOW_SPEED_DRAG * Math.abs(obj.velocity.dx)
                        + obj.offsetX);
                    obj.y += deltaTime * (yDist * FOLLOW_SPEED_DRAG * Math.abs(obj.velocity.dy)
                        + obj.offsetY);
                    obj = Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["decreaseOffset"])(deltaTime, obj, WITHER);
                });
                return state;
            case _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"].LANDING:
                state['objects'].forEach(function (obj) {
                    var hitBoundary = Object(_game_bg_game_util__WEBPACK_IMPORTED_MODULE_4__["runBoundaryCheck"])(obj, boundaries);
                    if (hitBoundary != null) {
                        if (hitBoundary === 'right' || hitBoundary === 'left') {
                            obj.velocity.dx *= -1;
                        }
                        else {
                            obj.velocity.dy *= -1;
                        }
                    }
                    obj.x += obj.velocity.dx * deltaTime;
                    obj.y += obj.velocity.dy * deltaTime;
                });
                return state;
        }
    };
    AnimationService.prototype.ngOnDestroy = function () {
        this.pageChange.unsubscribe();
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AnimationService.prototype, "page$", void 0);
    AnimationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], AnimationService);
    return AnimationService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bio-page *ngIf=\"(page | async)===PAGE.BIO\"></app-bio-page>\n<app-connect-page *ngIf=\"(page | async)===PAGE.CONNECT\"></app-connect-page>\n<app-landing-page *ngIf=\"(page | async)===PAGE.LANDING\"></app-landing-page>"

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
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
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
    function AppComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.PAGE = _store__WEBPACK_IMPORTED_MODULE_3__["PAGE"]; // so template can use enum
        this.title = 'Nicholas Hartunian';
    }
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AppComponent.prototype, "page", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
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
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_bg_game_bg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-bg/game-bg.component */ "./src/app/game-bg/game-bg.component.ts");
/* harmony import */ var _name_title_name_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-title/name-title.component */ "./src/app/name-title/name-title.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _bio_page_bio_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bio-page/bio-page.component */ "./src/app/bio-page/bio-page.component.ts");
/* harmony import */ var _connect_page_connect_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./connect-page/connect-page.component */ "./src/app/connect-page/connect-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_3__["INITIAL_STATE"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _game_bg_game_bg_component__WEBPACK_IMPORTED_MODULE_5__["GameBgComponent"],
                _name_title_name_title_component__WEBPACK_IMPORTED_MODULE_6__["NameTitleComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _bio_page_bio_page_component__WEBPACK_IMPORTED_MODULE_8__["BioPageComponent"],
                _connect_page_connect_page_component__WEBPACK_IMPORTED_MODULE_9__["ConnectPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgReduxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio-page/bio-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: white;\n    text-decoration: inherit;\n}\n\nh2 {\n    font-size: 36px;\n\n    -webkit-animation: fadeInAndUp 4s forwards;\n\n            animation: fadeInAndUp 4s forwards;\n}\n\np {\n    font-size: 20px;\n\n    -webkit-animation: fadeInAndUp 4s forwards;\n\n            animation: fadeInAndUp 4s forwards;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n}\n\n.bio-page-bg {\n    display: none;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.bio-page-bg-overlay, .bio-page-container {\n    background-color: #000;\n}\n\n.bio-text-container {\n    position: absolute;\n    left: 44px;\n    top: 20px;\n\n    line-height: 30px;\n    max-width: 500px;\n}\n\n.bio-text-element {\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n    margin: 12px;\n    opacity: 0;\n    padding: 12px;\n    transform: translateY(36px);\n}\n\n/* Camel case forced by Angular syntax in template */\n\n.bgLoaded {\n    display: block;\n}\n\n.fadeInPhotoCredits {\n    -webkit-animation: fadeInAndUp 6s forwards;\n            animation: fadeInAndUp 6s forwards;\n    -webkit-animation-delay: 8s;\n            animation-delay: 8s;\n}\n\n.overlayFadeOut {\n    -webkit-animation: fadeOut 6s forwards;\n            animation: fadeOut 6s forwards;\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n}\n\n.picture-credits {\n    position: absolute;\n    bottom: 0px;\n    right: 8px;\n\n    color: #fff;\n    font-size: 10px;\n\n    opacity: 0;\n}\n\n@media (max-width: 800px) {\n    h2 {\n        font-size: 24px;\n    }\n    \n    p {\n        font-size: 14px;\n    }\n\n    .bio-text-container {\n        left: 4%;    \n        max-width: 72%;\n    }\n}\n\n@media (max-height: 400px) {\n    .bio-text-container {\n        max-width: 92%;\n    }\n}\n\n@-webkit-keyframes fadeInAndUp {\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes fadeInAndUp {\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes fadeOut {\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeOut {\n    100% {\n        opacity: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvLXBhZ2UvYmlvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlOztJQUVmLDBDQUFrQzs7WUFBbEMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTs7SUFFZiwwQ0FBa0M7O1lBQWxDLGtDQUFrQztJQUNsQywyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUzs7SUFFVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUEsb0RBQW9EOztBQUNwRDtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7O0lBRVYsV0FBVztJQUNYLGVBQWU7O0lBRWYsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKOztBQUxBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUpBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Jpby1wYWdlL2Jpby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5BbmRVcCA0cyBmb3J3YXJkcztcbn1cblxucCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5BbmRVcCA0cyBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uYmlvLXBhZ2UtYmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYmlvLXBhZ2UtYmctb3ZlcmxheSwgLmJpby1wYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmJpby10ZXh0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ0cHg7XG4gICAgdG9wOiAyMHB4O1xuXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmJpby10ZXh0LWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMnB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzZweCk7XG59XG5cbi8qIENhbWVsIGNhc2UgZm9yY2VkIGJ5IEFuZ3VsYXIgc3ludGF4IGluIHRlbXBsYXRlICovXG4uYmdMb2FkZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmFkZUluUGhvdG9DcmVkaXRzIHtcbiAgICBhbmltYXRpb246IGZhZGVJbkFuZFVwIDZzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogOHM7XG59XG5cbi5vdmVybGF5RmFkZU91dCB7XG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDZzIGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG59XG5cbi5waWN0dXJlLWNyZWRpdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICByaWdodDogOHB4O1xuXG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgb3BhY2l0eTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmJpby10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIGxlZnQ6IDQlOyAgICBcbiAgICAgICAgbWF4LXdpZHRoOiA3MiU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XG4gICAgLmJpby10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogOTIlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5BbmRVcCB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bio-page/bio-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bio-page-container full-page\">\n  <img\n    alt=\"Background image\"\n    class=\"bio-page-bg full-page\"\n    (load)=\"onBgLoad()\"\n    [ngClass]=\"{bgLoaded: bgLoaded}\"\n    [src]=\"bgURL\" />\n  <div\n    alt=\"Background image\"\n    class=\"bio-page-bg-overlay full-page\"\n    [ngClass]=\"{overlayFadeOut: bgLoaded}\">\n</div>\n<p \n    class=\"picture-credits\"\n    [ngClass]=\"{fadeInPhotoCredits: bgLoaded}\"\n    [style.display]=\"bgLoaded ? 'block' : 'none'\">\n    Photography by\n    <a [href]='photographerURL'>{{photographerName}}</a>\n    on\n    <a href=\"https://unsplash.com\">Unsplash</a>\n  </p>\n  <div class=\"bio-text-container\">\n    <h2 class=\"bio-text-element\">About Me</h2>\n    <p class=\"bio-text-element\">\n      Hi, I'm Nick. I work as a software engineer.\n      <br><br>\n      Interests: Medical research, writing, Italian food.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bio-page/bio-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.ts ***!
  \************************************************/
/*! exports provided: BioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioPageComponent", function() { return BioPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var APP_NAME = 'nicholashartunian.com';
var CLIENT_ID = '813f1db96865d9d36ff6e9d5623b0da770d4b7bd4c05e6a764161e3460135296';
var BG_COLLECTION_ID = '3732344';
var DEFAULT_BG_INFO = {
    urls: {
        full: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgL.jpg',
        regular: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgM.jpg',
        small: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgS.jpg'
    },
    user: {
        name: 'Rebe Adelaida',
        links: {
            html: 'https://unsplash.com/@rrebba?utm_source=' + APP_NAME + '&utm_medium=referral'
        }
    }
};
var MEDIUM_WIDTH = 1080;
var MOBILE_WIDTH = 400;
var BioPageComponent = /** @class */ (function () {
    function BioPageComponent(navigationService, windowService) {
        this.navigationService = navigationService;
        this.windowService = windowService;
        this.bgLoaded = false;
        this.bgURL = null;
        this.photographerName = '';
        this.photographerURL = '';
        this.windowWidthCategory = 0;
    }
    BioPageComponent.prototype.ngOnInit = function () {
        this.fetchBackground();
    };
    BioPageComponent.prototype.fetchBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, query, response, _b, e_1, _c, html, name, urls;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        query = 'https://api.unsplash.com/photos/random/'
                            + '?collections=' + BG_COLLECTION_ID
                            + '&client_id=' + CLIENT_ID;
                        return [4 /*yield*/, fetch(query)];
                    case 1:
                        response = _d.sent();
                        _b = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _b.bgInfo = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        this.windowWidthCategory = this.getWindowWidthCategory();
                        _c = this.getBgData(this.bgInfo), html = _c.html, name = _c.name, urls = _c.urls;
                        if (urls == null || name == null) {
                            this.bgInfo = DEFAULT_BG_INFO;
                            (_a = this.getBgData(this.bgInfo), html = _a.html, name = _a.name, urls = _a.urls);
                        }
                        this.bgURL = this.getSizedBg(this.windowWidthCategory, urls);
                        this.photographerName = name;
                        this.photographerURL = this.getUTMURL(html);
                        this.initWindowResizeHandler();
                        return [2 /*return*/];
                }
            });
        });
    };
    BioPageComponent.prototype.getBgData = function (bgInfo) {
        if (bgInfo == null) {
            return { html: null, name: null, urls: null };
        }
        var urls = bgInfo.urls, user = bgInfo.user;
        var html, links, name;
        if (user != null) {
            links = user.links;
            name = user.name;
            if (links != null) {
                html = links.html;
            }
        }
        return { html: html, name: name, urls: urls };
    };
    BioPageComponent.prototype.getUTMURL = function (url) {
        return url + '?utm_source=' + APP_NAME + '&utm_medium=referral';
    };
    BioPageComponent.prototype.getWindowWidthCategory = function () {
        if (this.windowService.getWidth() > MEDIUM_WIDTH) {
            return 3;
        }
        else if (this.windowService.getWidth() > MOBILE_WIDTH) {
            return 2;
        }
        return 1;
    };
    BioPageComponent.prototype.getSizedBg = function (windowWidthCategory, urls) {
        if (windowWidthCategory === 1) {
            return urls.regular;
        }
        else if (windowWidthCategory === 0) {
            return urls.small;
        }
        return urls.full;
    };
    BioPageComponent.prototype.initWindowResizeHandler = function () {
        var _this = this;
        this.resizeHandler = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize')
            .subscribe(function () {
            var curWindowWidthCategory = _this.getWindowWidthCategory();
            if (curWindowWidthCategory != _this.windowWidthCategory) {
                _this.windowWidthCategory = curWindowWidthCategory;
                _this.bgURL = _this.getSizedBg(_this.windowWidthCategory, _this.bgInfo.urls);
            }
        });
    };
    BioPageComponent.prototype.onBgLoad = function () {
        this.bgLoaded = this.bgURL != null;
    };
    BioPageComponent.prototype.ngOnDestroy = function () {
        this.resizeHandler.unsubscribe();
    };
    BioPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio-page',
            template: __webpack_require__(/*! ./bio-page.component.html */ "./src/app/bio-page/bio-page.component.html"),
            styles: [__webpack_require__(/*! ./bio-page.component.css */ "./src/app/bio-page/bio-page.component.css")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"]])
    ], BioPageComponent);
    return BioPageComponent;
}());



/***/ }),

/***/ "./src/app/connect-page/connect-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/connect-page/connect-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n    width: 15vw;\n    max-width: 138px;\n    height: auto;\n\n    opacity: .72;\n    user-drag: none; \n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\n.connect-container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 12px;\n}\n\n@media (max-width: 800px) {\n    svg {\n        filter: invert(80%);\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdC1wYWdlL2Nvbm5lY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZOztJQUVaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QtcGFnZS9jb25uZWN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gICAgd2lkdGg6IDE1dnc7XG4gICAgbWF4LXdpZHRoOiAxMzhweDtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBvcGFjaXR5OiAuNzI7XG4gICAgdXNlci1kcmFnOiBub25lOyBcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29ubmVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBzdmcge1xuICAgICAgICBmaWx0ZXI6IGludmVydCg4MCUpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/connect-page/connect-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/connect-page/connect-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game-bg></app-game-bg>\n<div class='full-page connect-container'\n    [style.display]=\"getOrientationChanged() ? 'none' : 'flex'\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" \n        width=\"24\" \n        height=\"24\" \n        viewBox=\"0 0 24 24\">\n        <path fill=\"none\" d=\"M0 0h24v24H0z\"/>\n        <a href=\"https://github.com/Nick-the-BinaryTree\"\n            rel=\"noopener noreferrer\"\n            target=\"_blank\">\n            <path d=\"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z\"/>\n        </a>\n    </svg>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\">\n        <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n        <a href=\"https://medium.com/@nick.hartunian\"\n            rel=\"noopener noreferrer\"\n            target=\"_blank\">\n            <path d=\"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z\"/>\n        </a>\n    </svg>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"24\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\">\n        <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\n        <a href=\"https://www.linkedin.com/in/nicholashartunian/\"\n            rel=\"noopener noreferrer\"\n            target=\"_blank\">\n            <path d=\"M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z\"/>\n        </a>\n    </svg>\n</div>"

/***/ }),

/***/ "./src/app/connect-page/connect-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/connect-page/connect-page.component.ts ***!
  \********************************************************/
/*! exports provided: ConnectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageComponent", function() { return ConnectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectPageComponent = /** @class */ (function () {
    function ConnectPageComponent(windowService) {
        this.windowService = windowService;
    }
    ConnectPageComponent.prototype.ngOnInit = function () { };
    ConnectPageComponent.prototype.getOrientationChanged = function () {
        return this.windowService.getOrientationChanged();
    };
    ConnectPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect-page',
            template: __webpack_require__(/*! ./connect-page.component.html */ "./src/app/connect-page/connect-page.component.html"),
            styles: [__webpack_require__(/*! ./connect-page.component.css */ "./src/app/connect-page/connect-page.component.css")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_1__["WindowService"]])
    ], ConnectPageComponent);
    return ConnectPageComponent;
}());



/***/ }),

/***/ "./src/app/game-bg/game-bg.component.css":
/*!***********************************************!*\
  !*** ./src/app/game-bg/game-bg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtYmcvZ2FtZS1iZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/game-bg/game-bg.component.html":
/*!************************************************!*\
  !*** ./src/app/game-bg/game-bg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas \n    class=\"full-page\"\n    [style.backgroundColor]=\"bgColor\"\n    #gameArea>\n</canvas>\n"

/***/ }),

/***/ "./src/app/game-bg/game-bg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/game-bg/game-bg.component.ts ***!
  \**********************************************/
/*! exports provided: GameBgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBgComponent", function() { return GameBgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation.service */ "./src/app/animation.service.ts");
/* harmony import */ var _game_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.util */ "./src/app/game-bg/game.util.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameBgComponent = /** @class */ (function () {
    function GameBgComponent(animationService, windowService) {
        var _this = this;
        this.animationService = animationService;
        this.windowService = windowService;
        this.boundaries = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        };
        this.mouseClicked = false;
        this.mousePos = { x: 500, y: 500 };
        this.frames$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined)
            .pipe(
        // emits value of calculateStep
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["expand"])(function (val) { return _this.calculateStep(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (frame) { return frame !== undefined; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (frame) { return frame.deltaTime; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.gameState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
    }
    GameBgComponent.prototype.ngOnInit = function () {
        var _this = this;
        // triggered before DOM updates
        this.bgColor = this.animationService.getBgColor();
        this.ctx = this.gameArea.nativeElement.getContext('2d');
        var mouseClick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'click');
        var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'mousemove');
        this.mouseAction = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseClick$, mouseMove$)
            .subscribe(function (e) {
            if (e.type === 'click') {
                _this.mouseClicked = true;
            }
            _this.mousePos = { x: e.clientX, y: e.clientY };
        });
        this.animationService.getCustomInit(this.ctx);
    };
    GameBgComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.updateDimensions();
        this.resize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'orientationChange'))
            .subscribe(function () {
            _this.updateDimensions();
        });
        // run game
        this.frames = this.frames$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.gameState$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var deltaTime = _a[0], gameState = _a[1];
            return _this.update(deltaTime, gameState);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (gameState) { return _this.gameState$.next(gameState); })).subscribe(function (gameState) {
            _this.render(gameState);
        });
    };
    GameBgComponent.prototype.calculateStep = function (prevFrame) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            requestAnimationFrame(function (frameStartTime) {
                var deltaTime = prevFrame
                    ? (frameStartTime - prevFrame.frameStartTime) / 1000
                    : 0;
                observer.next({
                    frameStartTime: frameStartTime,
                    deltaTime: deltaTime
                });
            });
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_game_util__WEBPACK_IMPORTED_MODULE_4__["clampTo30FPS"]));
    };
    GameBgComponent.prototype.render = function (state) {
        this.animationService.getRender(this.ctx, state);
    };
    ;
    GameBgComponent.prototype.update = function (deltaTime, state) {
        var click = this.mouseClicked;
        if (click) {
            this.mouseClicked = false;
        }
        return this.animationService.getUpdate(this.boundaries, deltaTime, click, this.mousePos, state);
    };
    GameBgComponent.prototype.updateDimensions = function () {
        this.gameArea.nativeElement.width = this.boundaries.right = this.windowService.getWidth();
        this.gameArea.nativeElement.height = this.boundaries.bottom = this.windowService.getHeight();
        // console.log(this.windowService.getWidth() + ' x ' + this.windowService.getHeight() + '\n')
    };
    GameBgComponent.prototype.ngOnDestroy = function () {
        this.frames.unsubscribe();
        this.mouseAction.unsubscribe();
        this.resize.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gameArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GameBgComponent.prototype, "gameArea", void 0);
    GameBgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-bg',
            template: __webpack_require__(/*! ./game-bg.component.html */ "./src/app/game-bg/game-bg.component.html"),
            styles: [__webpack_require__(/*! ./game-bg.component.css */ "./src/app/game-bg/game-bg.component.css")]
        }),
        __metadata("design:paramtypes", [_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"], _window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]])
    ], GameBgComponent);
    return GameBgComponent;
}());



/***/ }),

/***/ "./src/app/game-bg/game.util.ts":
/*!**************************************!*\
  !*** ./src/app/game-bg/game.util.ts ***!
  \**************************************/
/*! exports provided: clampMag, clampTo30FPS, decreaseOffset, decreaseOffset1D, randomOffset, randomStartPos, randomStartVal, randomStartVelocity, randomStartVelocityDir, randomStartVelocityVal, randomVelocityDir, runBoundaryCheck, trailObjGen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampMag", function() { return clampMag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampTo30FPS", function() { return clampTo30FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseOffset", function() { return decreaseOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseOffset1D", function() { return decreaseOffset1D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomOffset", function() { return randomOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartPos", function() { return randomStartPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVal", function() { return randomStartVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocity", function() { return randomStartVelocity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocityDir", function() { return randomStartVelocityDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocityVal", function() { return randomStartVelocityVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVelocityDir", function() { return randomVelocityDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runBoundaryCheck", function() { return runBoundaryCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailObjGen", function() { return trailObjGen; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var clampMag = function (value, min, max) {
    var val = Math.abs(value);
    var sign = value < 0 ? -1 : 1;
    if (min <= val && val <= max) {
        return value;
    }
    return sign * min;
};
// prevents frames jumping ahead too far
var clampTo30FPS = function (frame) {
    if (frame.deltaTime > (1 / 30)) {
        frame.deltaTime = 1 / 30;
    }
    return frame;
};
var decreaseOffset = function (dt, obj, wither) {
    obj.offsetX = decreaseOffset1D(dt, obj.offsetX, wither);
    obj.offsetY = decreaseOffset1D(dt, obj.offsetY, wither);
    return obj;
};
var decreaseOffset1D = function (dt, offset, wither) {
    if (offset > 0) {
        offset -= dt * wither;
        return offset < 0 ? 0 : offset;
    }
    offset += dt * wither;
    return offset > 0 ? 0 : offset;
};
var randomOffset = function (baseOffset) {
    return (Math.random() > 0.5 ? 1 : -1) * (baseOffset + baseOffset * Math.random());
};
var randomStartPos = function (boundaries, min) { return ({
    x: Math.random() * (boundaries.right - min) + min,
    y: Math.random() * (boundaries.bottom - min) + min
}); };
var randomStartVal = function (baseVal, min) {
    return Math.random() * (baseVal - min) + min;
};
var randomStartVelocity = function (baseVal, min) {
    return ({ dx: randomStartVelocityVal(baseVal, min), dy: randomStartVelocityVal(baseVal, min) });
};
var randomStartVelocityDir = function (val) {
    return ({ dx: randomVelocityDir(val), dy: randomVelocityDir(val) });
};
var randomStartVelocityVal = function (baseVal, min) {
    return randomVelocityDir(randomStartVal(baseVal, min));
};
var randomVelocityDir = function (val) { return val * (Math.random() < 0.5 ? -1 : 1); };
var runBoundaryCheck = function (obj, boundaries) {
    var boundaryHit = null;
    if (obj.x + obj.radius > boundaries.right) {
        boundaryHit = 'right';
    }
    else if (obj.x - obj.radius < boundaries.left) {
        boundaryHit = 'left';
    }
    else if (obj.y + obj.radius > boundaries.bottom) {
        boundaryHit = 'bottom';
    }
    else if (obj.y - obj.radius < boundaries.top) {
        boundaryHit = 'top';
    }
    return boundaryHit;
};
var trailObjGen = function (count, burstOffset, boundaries, r, v, BLUE, GREEN, RED) {
    var res = [];
    for (var i = 0; i < count; i++) {
        var color = BLUE;
        if (i % 3 === 0) {
            color = RED;
        }
        else if (i % 2 === 0) {
            color = GREEN;
        }
        res.push(__assign({}, randomStartPos(boundaries, r), { color: color, offsetX: 0, offsetY: 0, radius: r, velocity: randomStartVelocityDir(v) }));
    }
    return res;
};


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game-bg></app-game-bg>\n<app-name-title></app-name-title>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(navigationService) {
        this.navigationService = navigationService;
    }
    LandingPageComponent.prototype.ngOnInit = function () { };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/name-title/name-title.component.css":
/*!*****************************************************!*\
  !*** ./src/app/name-title/name-title.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: white;\n    font-size: 5rem;\n    font-weight: 100;\n    text-align: center;\n\n    -webkit-animation: fadeIn 5s forwards;\n\n            animation: fadeIn 5s forwards;\n}\n\n.hide {\n    display: none;\n}\n\n.title-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (max-width: 500px) {\n    h1 {\n        font-size: 3rem;\n    }\n}\n\n@media (max-height: 400px) {\n    h1 {\n        font-size: 2rem;\n    }\n}\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS10aXRsZS9uYW1lLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLHFDQUE2Qjs7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hbWUtdGl0bGUvbmFtZS10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBhbmltYXRpb246IGZhZGVJbiA1cyBmb3J3YXJkcztcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDQwMHB4KSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/name-title/name-title.component.html":
/*!******************************************************!*\
  !*** ./src/app/name-title/name-title.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page title-container\">\n    <h1\n    [style.display]=\"getOrientationChanged() ? 'none' : 'block'\"\n    #myname>\n        Nicholas Hartunian\n    </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/name-title/name-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/name-title/name-title.component.ts ***!
  \****************************************************/
/*! exports provided: NameTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameTitleComponent", function() { return NameTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NameTitleComponent = /** @class */ (function () {
    function NameTitleComponent(windowService) {
        this.windowService = windowService;
    }
    NameTitleComponent.prototype.ngOnInit = function () { };
    NameTitleComponent.prototype.getOrientationChanged = function () {
        return this.windowService.getOrientationChanged();
    };
    NameTitleComponent.prototype.ngOnDestroy = function () {
        this.windowService.clearOrientationChanged();
    };
    NameTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-name-title',
            template: __webpack_require__(/*! ./name-title.component.html */ "./src/app/name-title/name-title.component.html"),
            styles: [__webpack_require__(/*! ./name-title.component.css */ "./src/app/name-title/name-title.component.css")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_1__["WindowService"]])
    ], NameTitleComponent);
    return NameTitleComponent;
}());



/***/ }),

/***/ "./src/app/navigation.service.ts":
/*!***************************************!*\
  !*** ./src/app/navigation.service.ts ***!
  \***************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationService = /** @class */ (function () {
    function NavigationService(ngRedux) {
        var _this = this;
        this.ngRedux = ngRedux;
        this.pageChange = this.page$.subscribe(function (x) { _this.pageString = x; });
        var keyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'keyup');
        var mouseClick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'click');
        var touch$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'touchend');
        this.userAction = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(keyUp$, mouseClick$, touch$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe(function (e) {
            if (_this.pageString === _store__WEBPACK_IMPORTED_MODULE_5__["PAGE"].LANDING) {
                _this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["GOTO_BIO_PAGE"] });
            }
            else {
                _this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_4__["GOTO_CONNECT_PAGE"] });
            }
        });
    }
    NavigationService.prototype.ngOnDestroy = function () {
        this.pageChange.unsubscribe();
        this.userAction.unsubscribe();
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], NavigationService.prototype, "page$", void 0);
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: PAGE, rootReducer, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");

// TypeScript enum
var PAGE;
(function (PAGE) {
    PAGE["BIO"] = "BIO";
    PAGE["CONNECT"] = "CONNECT";
    PAGE["LANDING"] = "LANDING";
})(PAGE || (PAGE = {}));
;
function rootReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_BIO_PAGE"]:
            return { page: PAGE.BIO };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_CONNECT_PAGE"]:
            return { page: PAGE.CONNECT };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_LANDING_PAGE"]:
            return { page: PAGE.LANDING };
    }
    return state;
}
var INITIAL_STATE = {
    page: PAGE.LANDING
};


/***/ }),

/***/ "./src/app/window.service.ts":
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.orientationChanged = false;
        this.orientation = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'orientationchange')
            .subscribe(function () {
            _this.orientationChanged = true;
        });
    }
    WindowService.prototype.clearOrientationChanged = function () {
        this.orientationChanged = false;
    };
    WindowService.prototype.getOrientationChanged = function () {
        return this.orientationChanged;
    };
    WindowService.prototype.getWidth = function () {
        return window.innerWidth ? window.innerWidth
            : document.documentElement.clientWidth;
    };
    WindowService.prototype.getHeight = function () {
        return window.innerHeight ? window.innerHeight
            : document.documentElement.clientHeight;
    };
    WindowService.prototype.ngOnDestroy = function () {
        this.orientation.unsubscribe();
    };
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowService);
    return WindowService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nick/Desktop/nick-the-binarytree.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map