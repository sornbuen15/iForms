webpackJsonp([10],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(platform, nav, navCtrl, storage, device) {
        this.platform = platform;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.device = device;
        platform.ready().then(function () {
        });
    }
    HomePage.prototype.gestList = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["c" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar >\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-buttons col-xl-6 col-lg-6 col-md-6 col-sm-6 style="padding-left: 70px;">\n        <button ion-button icon-only>\n          <img src="../../assets/imgs/long-logo.png" height="35">\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid style="margin-top:20vh">\n    <ion-row>\n      <ion-col col-xl-6 col-lg-6 col-md-6 col-sm-6 style="text-align: center;">\n        <img src="../../assets/imgs/pongpara50th.logo.png">\n      </ion-col>\n      <ion-col col-xl-5 col-lg-6 col-md-6 col-sm-6 style="text-align: center;">\n        <img src="../../assets/imgs/long-logo.png" style="margin-bottom:13vh">\n        <button ion-button full (click)=\'gestList()\'>Guest List</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureFieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignatureFieldPage = /** @class */ (function () {
    function SignatureFieldPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.options = {};
        this._signature = null;
    }
    Object.defineProperty(SignatureFieldPage.prototype, "signature", {
        // public propagateChange: Function = null;
        get: function () {
            return this._signature;
        },
        set: function (value) {
            this._signature = value;
            console.log('set signature to ' + this._signature);
            console.log('signature data :');
            console.log(this.signaturePad.toData());
            // this.propagateChange(this.signature);
        },
        enumerable: true,
        configurable: true
    });
    SignatureFieldPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignaturePage');
    };
    SignatureFieldPage.prototype.propagateChange = function (data) {
    };
    SignatureFieldPage.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this._signature = value;
        this.signaturePad.fromDataURL(this.signature);
    };
    // public registerOnChange(fn: any): void {
    //   this.propagateChange = fn;
    // }
    SignatureFieldPage.prototype.registerOnTouched = function () {
        // no-op
    };
    SignatureFieldPage.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
    };
    SignatureFieldPage.prototype.drawBegin = function () {
        console.log('Begin Drawing');
    };
    SignatureFieldPage.prototype.drawComplete = function () {
        this.signature = this.signaturePad.toDataURL('image/png', 0.5);
    };
    SignatureFieldPage.prototype.clear = function () {
        this.signaturePad.clear();
        this.signature = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignatureFieldPage.prototype, "signaturePad", void 0);
    SignatureFieldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'signature-field',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\signature-field\signature-field.html"*/'<signature-pad [options]="options" (onBeginEvent)="drawBegin()" (onEndEvent)="drawComplete()"></signature-pad>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\signature-field\signature-field.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignatureFieldPage);
    return SignatureFieldPage;
}());

//# sourceMappingURL=signature-field.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, nav, navCtrl, navParams, rest, storage, toastCtrl) {
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 10 characters long.' }
            ],
            'pin': [
                { type: 'required', message: 'Pin is required.' },
                { type: 'minlength', message: 'Pin must be at least 6 digit' },
                { type: 'maxlength', message: 'Pin must be at least 6 digit' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        if (username !== undefined && password !== undefined && username.length >= 5 && username.length <= 10) {
            console.log(username.length);
            console.log(password);
            var data = {
                'User': {
                    'username': username,
                    'password': password,
                }
            };
            var formData = new FormData();
            formData.append("data[User][username]", username);
            formData.append("data[User][password]", password);
            this.rest.authenticate(formData).subscribe(function (result) {
                _this.storage.set('username', result['username']);
                _this.storage.set('pin', result['pin']);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            }, function (error) {
                console.log(error);
                var toast = _this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\login\login.html"*/'<ion-content padding center text-content>\n  <div offset-xl-4 col-xl-4 style="margin-top:25vh;">\n    <img src="../../assets/imgs/long-logo.png">\n    <br>\n    <br>\n    <br>\n    <form [formGroup]="loginForm" (ngSubmit)="login()">\n      <ion-list>\n        <ion-item>\n          <ion-input placeholder="Username" formControlName="username" [(ngModel)]="loginForm.username"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.username">\n            <div class="error-message" *ngIf="this.loginForm.get(\'username\').hasError(validation.type) && (this.loginForm.get(\'username\').dirty || this.loginForm.get(\'username\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-input placeholder="Password" formControlName="password" type="password" [(ngModel)]="loginForm.password"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.password">\n            <div class="error-message" *ngIf="this.loginForm.get(\'password\').hasError(validation.type) && (this.loginForm.get(\'password\').dirty || this.loginForm.get(\'password\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-list>\n      <button ion-button full type="submit">Log in</button>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(nav, navCtrl, navParams, rest, modalCtrl, platform) {
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.total = "";
        this.register = "";
        this.noregister = "";
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
        this.getReport();
    };
    ReportPage.prototype.getReport = function () {
        var _this = this;
        this.rest.report().subscribe(function (data) {
            _this.total = JSON.stringify(data.total);
            _this.register = JSON.stringify(data.register);
            _this.noregister = JSON.stringify(data.noregister);
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\report\report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons col-xl-5 col-lg-5 col-sm-5 style="padding-left: 70px;">\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/long-logo.png" height="35">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n    <ion-item  ><p><b>Total Guest:</b> {{total}}</p></ion-item>\n    <ion-item><p ion-text color="primary"><b>Checkin Guest:</b> {{register}}</p></ion-item>\n    <ion-item><p ion-text color="danger"><b>Uncheckin Guest:</b> {{noregister}}</p></ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkin/checkin.module": [
		688,
		5
	],
	"../pages/device-register/device-register.module": [
		689,
		4
	],
	"../pages/edit-register/edit-register.module": [
		690,
		3
	],
	"../pages/login/login.module": [
		691,
		9
	],
	"../pages/luckydoor/luckydoor.module": [
		692,
		2
	],
	"../pages/modal/modal.module": [
		693,
		1
	],
	"../pages/qa/qa.module": [
		694,
		0
	],
	"../pages/register/register.module": [
		697,
		8
	],
	"../pages/report/report.module": [
		695,
		7
	],
	"../pages/signature-field/signature-field.module": [
		696,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_api_rest_api__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_sort_sort__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_group_group__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signature_field_signature_field__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_report_report__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["c" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_group_group__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["d" /* SignatureModal */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signature_field_signature_field__["a" /* SignatureFieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["e" /* StatusModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* ChcekinModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["b" /* ConfirmEditModal */],
                __WEBPACK_IMPORTED_MODULE_19__pages_report_report__["a" /* ReportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checkin/checkin.module#CheckinPageModule', name: 'CheckinPage', segment: 'checkin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device-register/device-register.module#DeviceRegisterPageModule', name: 'DeviceRegisterPage', segment: 'device-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-register/edit-register.module#EditRegisterPageModule', name: 'EditRegisterPage', segment: 'edit-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/luckydoor/luckydoor.module#LuckydoorPageModule', name: 'LuckydoorPage', segment: 'luckydoor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qa/qa.module#QaPageModule', name: 'QaPage', segment: 'qa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signature-field/signature-field.module#SignaturePageModule', name: 'SignatureFieldPage', segment: 'signature-field', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["c" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["d" /* SignatureModal */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signature_field_signature_field__["a" /* SignatureFieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["e" /* StatusModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* ChcekinModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["b" /* ConfirmEditModal */],
                __WEBPACK_IMPORTED_MODULE_19__pages_report_report__["a" /* ReportPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_api_rest_api__["a" /* RestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable,  } from 'rxjs/Observable';


/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestApiProvider = /** @class */ (function () {
    //  private apiUrl = 'http://192.168.43.56/backend/apis';
    function RestApiProvider(http) {
        this.http = http;
        // private apiUrl1 = 'https://restcountries.eu/rest/v2/all';
        this.apiUrl = 'http://pongpara.iform.online/backend/apis';
        // console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.authenticate = function (data) {
        var api = this.apiUrl + "/authenticate.json";
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.getGuestlist = function () {
        var api = this.apiUrl + "/getGuestList.json";
        return this.http.post(api, null).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.registerByCheckin = function (data) {
        var api = this.apiUrl + "/registerByCheckin.json";
        console.log(api);
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.registerBySignature = function (data) {
        var api = this.apiUrl + "/registerBySignature.json";
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.editRegister = function (data) {
        var api = this.apiUrl + "/editregister.json";
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.alreadyRegisterList = function () {
        var api = this.apiUrl + "/alreadyRegisterList.json";
        return this.http.post(api, null).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.report = function () {
        var api = this.apiUrl + "/report.json";
        return this.http.post(api, null).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.extractData = function (res) {
        var result = res['result']['success'];
        var message = res['result']['message'];
        var data = res['result']['data'];
        console.log('response:' + JSON.stringify(res));
        if (result) {
            if (!isEmpty(data)) {
                return data;
            }
            else {
                return {};
            }
        }
        else {
            throw message;
        }
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }
    };
    RestApiProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_report__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["c" /* RegisterPage */] },
            { title: 'Report', component: __WEBPACK_IMPORTED_MODULE_7__pages_report_report__["a" /* ReportPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        console.log("===== logout =====");
        this.storage.remove('username').then(function (result) {
            console.log(result);
            _this.storage.remove('pin').then(function (result) {
                console.log(result);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\project\ionic\iForms\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n        \n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n            <button ion-item (click)="logout()">Logout</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage"  #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\project\ionic\iForms\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, searchResult) {
        if (!items)
            return [];
        if (!searchResult)
            return items;
        searchResult = searchResult.toLowerCase();
        return items.filter(function (item) {
            return item.fullname.toLowerCase().includes(searchResult)
                || item.organization.toLowerCase().includes(searchResult) || item.table_no.toLowerCase().includes(searchResult); // only filter country name
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, groupByKey) {
        var company = [];
        var groupedElements = {};
        console.log('value' + JSON.stringify(value));
        if (isEmpty(value)) {
            return [];
        }
        value.forEach(function (obj) {
            if (!(obj[groupByKey] in groupedElements)) {
                groupedElements[obj[groupByKey]] = [];
            }
            groupedElements[obj[groupByKey]].push(obj);
        });
        for (var prop in groupedElements) {
            if (groupedElements.hasOwnProperty(prop)) {
                company.push({
                    key: prop,
                    list: groupedElements[prop]
                });
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        return company;
    };
    GroupByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'groupBy',
        })
    ], GroupByPipe);
    return GroupByPipe;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChcekinModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SignatureModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StatusModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConfirmEditModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_field_signature_field__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, navCtrl, navParams, rest, modalCtrl, platform) {
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.descending = false;
        this.column = 'name';
        this.hiddenOnBrowser = false;
        this.statusColor = "";
        this.devWidth = this.platform.width();
        this.getGuestlist();
    }
    RegisterPage_1 = RegisterPage;
    RegisterPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getGuestlist();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.getGuestlist = function () {
        var _this = this;
        this.rest.getGuestlist().subscribe(function (guestlists) {
            _this.guestlists = guestlists;
        }, function (error) { return _this.errorMessage = error; });
    };
    RegisterPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    RegisterPage.prototype.statusModal = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(StatusModal, { 'data': data });
        modal.onDidDismiss(function () {
            // this.navCtrl.push(this.navCtrl.getActive().component);
            _this.nav.setRoot(RegisterPage_1);
        });
        modal.present();
    };
    RegisterPage.prototype.signatureModal = function (id) {
        var _this = this;
        var modal = this.modalCtrl.create(SignatureModal, { 'id': id });
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                _this.statusModal(data);
            }
        });
        modal.present();
    };
    RegisterPage.prototype.checkinModal = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(ChcekinModal, { 'data': data }, { 'cssClass': "modal-fullscreen" });
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                _this.statusModal(data);
            }
        });
        modal.present();
    };
    RegisterPage.prototype.confirmEditModal = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(ConfirmEditModal, { 'data': data }, { 'cssClass': "modal-fullscreen" });
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                _this.nav.setRoot(RegisterPage_1);
            }
        });
        modal.present();
    };
    RegisterPage = RegisterPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons col-xl-5 col-lg-5 col-sm-5 style="padding-left: 70px;">\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/long-logo.png" height="35">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-xl-5 col-xl-6 col-lg-12 col-md-12 col-sm-12>\n        <ion-searchbar [(ngModel)]="searchResult">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-xl-5 [hidden]="devWidth < 1400" style="text-align: center;">\n        <img src="../../assets/imgs/pongpara50th.logo.png">\n      </ion-col>\n      <ion-col col-xl-6 col-lg-12 col-md-12 col-sm-12>\n        <ion-list >\n          <ion-grid *ngFor="let list of guestlists | search: searchResult" font-color="primary">\n            <ion-row ion-text [color]="list.is_register === \'Y\'? \'secondary\':\'\'" style="border-bottom:1px gray solid">\n              <ion-col col-4><b>Name: </b> {{list.fullname}} </ion-col>\n              <ion-col col-2><b>Table: </b> {{list.table_no}}</ion-col>  \n              <ion-col col-4><b>Company: </b> {{list.organization}}</ion-col>\n              <ion-col col-2>\n                <ion-icon *ngIf="list.is_register === \'Y\'" style="cursor: pointer;" color="primary" name="create"\n                  item-end (click)="confirmEditModal(list)"></ion-icon>\n                <ion-icon *ngIf="list.is_register !== \'Y\'" style="cursor: pointer;" color="primary" name="pin" item-end\n                  (click)="checkinModal(list)"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

/* ChcekinModal */
var ChcekinModal = /** @class */ (function () {
    function ChcekinModal(viewCtrl, params, rest, storage) {
        this.viewCtrl = viewCtrl;
        this.rest = rest;
        this.storage = storage;
        this.data = [];
        this.data = params.get('data');
        // console.log(this.data);
    }
    ChcekinModal.prototype.registerByCheckin = function () {
        var _this = this;
        this.storage.get('username').then(function (value) {
            var username = value;
            console.log(username);
            _this.data['username'] = username;
            _this.rest.registerByCheckin(_this.data).subscribe(function (data) { _this.dismiss(data); });
        });
    };
    ChcekinModal.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ChcekinModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm Checkin</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <b>Name :</b> {{data.fullname}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <b>Company :</b> {{data.organization}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full color=\"primary\" (click)=\"registerByCheckin()\">Confirm</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ChcekinModal);
    return ChcekinModal;
}());

/* SignatureModal */
var SignatureModal = /** @class */ (function () {
    function SignatureModal(viewCtrl, params, rest) {
        this.viewCtrl = viewCtrl;
        this.rest = rest;
        this.canvasWidth = 541;
        this.canvasHeight = 215;
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
        this.data = params.get('id');
    }
    SignatureModal.prototype.ngAfterViewInit = function () {
        this.beResponsive();
        this.setOptions();
    };
    SignatureModal.prototype.beResponsive = function () {
        console.log('Resizing signature pad canvas to suit container size');
        this.size(this.sigs.first);
    };
    SignatureModal.prototype.size = function (sig) {
        sig.signaturePad.set('canvasWidth', this.canvasWidth);
        sig.signaturePad.set('canvasHeight', this.canvasHeight);
    };
    SignatureModal.prototype.setOptions = function () {
        this.sigs.first.signaturePad.set('penColor', 'rgb(0, 0, 0)');
    };
    SignatureModal.prototype.clear = function () {
        this.sigs.first.clear();
    };
    SignatureModal.prototype.save = function () {
        if (this.sigs.first.signature !== null) {
            var blob = this.dataURItoBlob(this.sigs.first.signature);
            this.registerBySignature(blob);
        }
    };
    SignatureModal.prototype.registerBySignature = function (blob) {
        var _this = this;
        var formData = new FormData();
        var filename = 'signature_' + this.data + '.png';
        var file = this.blobToFile(blob, filename);
        formData.append("File", file, filename);
        formData.append("id", this.data);
        this.rest.registerBySignature(formData).subscribe(function (data) { _this.dismiss(data); });
    };
    SignatureModal.prototype.dismiss = function (data) {
        this.clear();
        this.viewCtrl.dismiss(data);
    };
    SignatureModal.prototype.dataURItoBlob = function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = decodeURI(dataURI.split(',')[1]);
        }
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_3__signature_field_signature_field__["a" /* SignatureFieldPage */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SignatureModal.prototype, "sigs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('sigContainer1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SignatureModal.prototype, "sigContainer1", void 0);
    SignatureModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>signature</ion-title>\n  </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"align-content: center\">\n        <signature-field name=\"sigContainer1\" id=\"sigContainer1\"></signature-field>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Cancel</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full color=\"light\" (click)=\"clear()\">Clear</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full color=\"secondary\" (click)=\"save()\" >Done</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], SignatureModal);
    return SignatureModal;
}());

/* StatusModal */
var StatusModal = /** @class */ (function () {
    function StatusModal(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.data = [];
        this.data = params.get('data');
    }
    StatusModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    StatusModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n  <ion-header>\n  <ion-navbar>\n    <ion-title>Welcome \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A</ion-title>\n  </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n  <ion-grid style=\"margin-top:10vh\">\n    <ion-row>\n      <ion-col col-xl-5 col-lg-5 col-md-6 col-sm-6 style=\"text-align: center;\">\n        <img src=\"../../assets/imgs/pongpara50th.logo.png\">\n      </ion-col>\n      <ion-col offset-xl-1 col-xl-5 col-lg-5 col-md-6 col-sm-6 >\n        <img src=\"../../assets/imgs/long-logo.png\" style=\"margin-bottom:2vh\">\n        <ion-row>\n          <ion-col><b>Name:</b>&nbsp;&nbsp;{{data.fullname}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><b>Company:</b>&nbsp;&nbsp;{{data.organization}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><b>Table:</b>&nbsp;&nbsp;{{data.table_no}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><button ion-button full color=\"primary\" (click)='dismiss()'>Back to list</button></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StatusModal);
    return StatusModal;
}());

/* ConfirmEditModal */
var ConfirmEditModal = /** @class */ (function () {
    function ConfirmEditModal(viewCtrl, params, rest) {
        this.viewCtrl = viewCtrl;
        this.rest = rest;
        this.data = [];
        this.data = params.get('data');
        console.log(this.data);
    }
    ConfirmEditModal.prototype.editRegister = function () {
        var _this = this;
        this.rest.editRegister(this.data).subscribe(function (data) { _this.dismiss(data); });
    };
    ConfirmEditModal.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ConfirmEditModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm Remove Checkin</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <b>Name :</b> {{data.fullname}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <b>Company :</b> {{data.organization}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full color=\"primary\" (click)=\"editRegister()\">Confirm</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], ConfirmEditModal);
    return ConfirmEditModal;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map