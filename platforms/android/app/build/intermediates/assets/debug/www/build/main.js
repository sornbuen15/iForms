webpackJsonp([9],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureFieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(201);
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

/***/ 138:
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
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkin/checkin.module": [
		412,
		5
	],
	"../pages/device-register/device-register.module": [
		413,
		4
	],
	"../pages/edit-register/edit-register.module": [
		414,
		3
	],
	"../pages/login/login.module": [
		415,
		8
	],
	"../pages/luckydoor/luckydoor.module": [
		416,
		2
	],
	"../pages/modal/modal.module": [
		417,
		1
	],
	"../pages/qa/qa.module": [
		418,
		0
	],
	"../pages/register/register.module": [
		420,
		7
	],
	"../pages/signature-field/signature-field.module": [
		419,
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
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(67);
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
        var _this = this;
        this.platform = platform;
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.device = device;
        platform.ready().then(function () {
            if (!platform.is('browser')) {
                _this.devicePlatform = device.platform;
                _this.deviceManufacturer = device.manufacturer;
                _this.deviceUUID = device.platform;
                _this.deviceSerial = device.serial;
                _this.deviceVersion = device.version;
            }
            storage.get('token').then(function (val) {
                if (val === null) {
                }
                else {
                }
            }).catch();
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

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__ = __webpack_require__(68);
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
    function LoginPage(formBuilder, navCtrl, navParams, rest) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        if (this.loginForm.value.username !== undefined && this.loginForm.value.password !== undefined) {
            console.log(this.loginForm.value.username);
            console.log(this.loginForm.value.password);
            var data = {
                'username': this.loginForm.value.username,
                'password': this.loginForm.value.password,
            };
            var formData = new FormData();
            formData.append("username", this.loginForm.value.username);
            formData.append("password", this.loginForm.value.password);
            this.rest.authenticate(formData).subscribe();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\login\login.html"*/'<ion-content padding center text-content>\n  <ion-title></ion-title>\n  <form [formGroup]="loginForm" (ngSubmit)="login()">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Username" formControlName="username" [(ngModel)]="loginForm.username"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.username">\n          <div class="error-message" *ngIf="this.loginForm.get(\'username\').hasError(validation.type) && (this.loginForm.get(\'username\').dirty || this.loginForm.get(\'username\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-input placeholder="Password" formControlName="password" type="password" [(ngModel)]="loginForm.password"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.password">\n          <div class="error-message" *ngIf="this.loginForm.get(\'password\').hasError(validation.type) && (this.loginForm.get(\'password\').dirty || this.loginForm.get(\'password\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n    <button ion-button full type="submit">Log in</button>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_api_rest_api__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_search_searchbycompany__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_searchbyname__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_sort_sort__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_group_group__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signature_field_signature_field__ = __webpack_require__(128);
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
                __WEBPACK_IMPORTED_MODULE_18__pipes_group_group__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_search_searchbycompany__["a" /* SearchByCompanyPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_search_searchbyname__["a" /* SearchByNamePipe */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["d" /* SignatureModal */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signature_field_signature_field__["a" /* SignatureFieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["e" /* StatusModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* ChcekinModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["b" /* ConfirmEditModal */]
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
                __WEBPACK_IMPORTED_MODULE_19__pages_signature_field_signature_field__["a" /* SignatureFieldPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["e" /* StatusModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* ChcekinModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["b" /* ConfirmEditModal */]
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(67);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["c" /* RegisterPage */] }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\project\ionic\iForms\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage"  #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\project\ionic\iForms\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchByCompanyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
var SearchByCompanyPipe = /** @class */ (function () {
    function SearchByCompanyPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchByCompanyPipe.prototype.transform = function (items, searchResultCompany) {
        if (!items)
            return [];
        if (!searchResultCompany)
            return items;
        console.log("transform item: " + JSON.stringify(items));
        searchResultCompany = searchResultCompany.toLowerCase();
        return items.filter(function (it) {
            return it.key.toLowerCase().includes(searchResultCompany); // only filter country name
        });
    };
    SearchByCompanyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchbycompany',
        })
    ], SearchByCompanyPipe);
    return SearchByCompanyPipe;
}());

//# sourceMappingURL=searchbycompany.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchByNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
var SearchByNamePipe = /** @class */ (function () {
    function SearchByNamePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchByNamePipe.prototype.transform = function (items, searchResultName) {
        if (!items)
            return [];
        if (!searchResultName)
            return items;
        console.log("transform item: " + JSON.stringify(items));
        searchResultName = searchResultName.toLowerCase();
        return items.filter(function (it) {
            return it.firstname.toLowerCase().includes(searchResultName); // only filter country name
        });
    };
    SearchByNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchbyname',
        })
    ], SearchByNamePipe);
    return SearchByNamePipe;
}());

//# sourceMappingURL=searchbyname.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChcekinModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SignatureModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StatusModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConfirmEditModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signature_field_signature_field__ = __webpack_require__(128);
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
            _this.guestlist = guestlists;
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
            selector: 'page-register',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\register\register.html"*/'<ion-header >\n  <ion-navbar >\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons col-xl-5 col-lg-5 col-sm-5 style="padding-left: 70px;">\n      <button ion-button icon-only >\n        <img src="../../assets/imgs/long-logo.png" height="35">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid >\n    <ion-row >\n      <ion-col offset-xl-5 col-xl-6 offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-sm-12>\n        <ion-searchbar [(ngModel)]="searchResultCompany">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col offset-xl-5 col-xl-5 offset-lg-5 col-lg-7 offset-md-5 col-md-7 col-sm-12>\n        <ion-searchbar [(ngModel)]="searchResultName">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col col-xl-4 [hidden]="devWidth < 1024" style="text-align: right;">\n        <img src="../../assets/imgs/pongpara50th.logo.png">\n      </ion-col>\n      <ion-col  col-xl-6  offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-sm-12>\n        <ion-list>\n          <ion-item-group *ngFor="let group of guestlist | groupBy: \'organization\' | searchbycompany : searchResultCompany">\n            <ion-item-divider color="smoke">\n              <ion-label>{{ group.key }}</ion-label>\n            </ion-item-divider>\n            <ion-item *ngFor="let list of group.list">\n              <p ion-text *ngIf="list.is_register == \'Y\'" (click)="statusModal(list)" color="secondary">\n                <b>Name: </b> {{list.firstname}} {{list.lastname}},\n                &nbsp;&nbsp;<b>Phone: </b> {{list.phone}}\n              </p>\n              <ion-icon *ngIf="list.is_register === \'Y\'" style="cursor: pointer;" color="primary" name="create"\n                item-end (click)="confirmEditModal(list)">\n              </ion-icon>\n              <!-- <p ion-text *ngIf="list.is_register != \'Y\'" (click)="signatureModal(list.id)">\n                <b>Name: </b> {{list.firstname}} {{list.lastname}},\n                &nbsp;&nbsp;<b>Phone: </b> {{list.phone}}\n              </p> -->\n              <p ion-text *ngIf="list.is_register !== \'Y\'">\n                <b>Name: </b> {{list.firstname}} {{list.lastname}},\n                &nbsp;&nbsp;<b>Phone: </b> {{list.phone}}\n              </p>\n              <ion-icon *ngIf="list.is_register !== \'Y\'" style="cursor: pointer;" color="primary" name="pin" item-end\n                (click)="checkinModal(list)"></ion-icon>\n            </ion-item>\n          </ion-item-group>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

/* ChcekinModal */
var ChcekinModal = /** @class */ (function () {
    function ChcekinModal(viewCtrl, params, rest) {
        this.viewCtrl = viewCtrl;
        this.rest = rest;
        this.data = [];
        this.data = params.get('data');
        console.log(this.data);
    }
    ChcekinModal.prototype.registerByCheckin = function () {
        var _this = this;
        this.rest.registerByCheckin(this.data).subscribe(function (data) { _this.dismiss(data); });
    };
    ChcekinModal.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ChcekinModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm Checkin</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <b>Name :</b> {{data.firstname}} {{data.lastname}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <b>Company :</b> {{data.organization}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full color=\"primary\" (click)=\"registerByCheckin()\">Confirm</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
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
            template: "<ion-content padding>\n  <ion-grid style=\"margin-top:10vh\">\n    <ion-row>\n      <ion-col col-xl-5 col-lg-5 col-md-6 col-sm-6 style=\"text-align: center;\">\n        <img src=\"../../assets/imgs/pongpara50th.logo.png\">\n      </ion-col>\n      <ion-col offset-xl-1 col-xl-5 col-lg-5 col-md-6 col-sm-6 >\n        <img src=\"../../assets/imgs/long-logo.png\" style=\"margin-bottom:2vh\">\n        <ion-row>\n          <ion-col><b>Name:</b>&nbsp;&nbsp;{{data.firstname}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><b>Lastname:</b>&nbsp;&nbsp;{{data.lastname}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><b>Company:</b>&nbsp;&nbsp;{{data.organization}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><b>Table:</b>&nbsp;&nbsp;{{data.table_no}}</ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col><button ion-button full color=\"primary\" (click)='dismiss()'>Back to list</button></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StatusModal);
    return StatusModal;
}());

/* ChcekinModal */
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
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm Avoid Checkin</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <b>Name :</b> {{data.firstname}} {{data.lastname}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <b>Company :</b> {{data.organization}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full color=\"primary\" (click)=\"editRegister()\">Confirm</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Cancel</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], ConfirmEditModal);
    return ConfirmEditModal;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestApiProvider = /** @class */ (function () {
    //private apiUrl = 'http://192.168.1.102/backend/apis';
    function RestApiProvider(http) {
        this.http = http;
        // private apiUrl1 = 'https://restcountries.eu/rest/v2/all';
        this.apiUrl = 'http://pongpara.iform.online/backend/apis';
        // console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.authenticate = function (formData) {
        var api = this.apiUrl + "/authenticate.json";
        return this.http.post(api, formData).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.getGuestlist = function () {
        var api = this.apiUrl + "/getGuestList.json";
        return this.http.post(api, null).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.registerByCheckin = function (data) {
        var api = this.apiUrl + "/registerByCheckin.json";
        console.log(api);
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.registerBySignature = function (data) {
        var api = this.apiUrl + "/registerBySignature.json";
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.editRegister = function (data) {
        var api = this.apiUrl + "/editregister.json";
        return this.http.post(api, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.alreadyRegisterList = function () {
        var api = this.apiUrl + "/alreadyRegisterList.json";
        return this.http.post(api, null).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
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
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map