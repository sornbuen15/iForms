webpackJsonp([3],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRegisterPageModule", function() { return EditRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_register__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditRegisterPageModule = /** @class */ (function () {
    function EditRegisterPageModule() {
    }
    EditRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_register__["a" /* EditRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_register__["a" /* EditRegisterPage */]),
            ],
        })
    ], EditRegisterPageModule);
    return EditRegisterPageModule;
}());

//# sourceMappingURL=edit-register.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRegisterPage; });
/* unused harmony export ConfirmEditModal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register__ = __webpack_require__(88);
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
 * Generated class for the EditRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditRegisterPage = /** @class */ (function () {
    function EditRegisterPage(nav, navCtrl, navParams, rest, modalCtrl, platform) {
        this.nav = nav;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.alreadyList = [];
        this.alreadyRegisterList();
    }
    EditRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditRegisterPage');
    };
    EditRegisterPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.alreadyRegisterList();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    EditRegisterPage.prototype.alreadyRegisterList = function () {
        var _this = this;
        this.rest.alreadyRegisterList().subscribe(function (alreadyList) {
            _this.alreadyList = alreadyList;
        }, function (error) { return _this.errorMessage = error; });
    };
    EditRegisterPage.prototype.confirmEditModal = function (data) {
        var _this = this;
        var modal = this.modalCtrl.create(ConfirmEditModal, { 'data': data }, { 'cssClass': "modal-fullscreen" });
        modal.onDidDismiss(function (data) {
            if (data !== null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_register_register__["c" /* RegisterPage */]);
            }
        });
        modal.present();
    };
    EditRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-register',template:/*ion-inline-start:"D:\project\ionic\iForms\src\pages\edit-register\edit-register.html"*/'<!--\n  Generated template for the EditRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons col-xl-5 col-lg-5 col-sm-5 style="padding-left: 70px;">\n      <button ion-button icon-only>\n        <img src="../../assets/imgs/long-logo.png" height="35">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col offset-xl-5 col-xl-5 offset-lg-5 col-lg-7 offset-md-5 col-md-7 col-sm-12>\n        <ion-searchbar [(ngModel)]="searchResultCompany">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-xl-5 col-lg-5 col-md-5 hidden-sm style="text-align: center;">\n        <img src="../../assets/imgs/pongpara50th.logo.png">\n      </ion-col>\n      <ion-col col-xl-5 col-lg-7 col-md-7 col-sm-12>\n        <ion-list>\n          <ion-item-group *ngFor="let group of alreadyList | groupBy: \'organization\' | searchbycompany : searchResultCompany">\n            <ion-item-divider color="smoke">\n              <ion-label>{{ group.key }}</ion-label>\n            </ion-item-divider>\n            <ion-item *ngFor="let list of group.list">\n              <p ion-text color="secondary">\n                <b>Name: </b> {{list.firstname}} {{list.lastname}},\n                &nbsp;&nbsp;<b>Phone: </b> {{list.phone}}\n              </p>\n              <ion-icon style="cursor: pointer;" color="primary" name="create" item-end\n                (click)="confirmEditModal(list)">\n              </ion-icon>\n            </ion-item>\n          </ion-item-group>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\project\ionic\iForms\src\pages\edit-register\edit-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], EditRegisterPage);
    return EditRegisterPage;
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
            template: "<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm Avoid Checkin</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <b>Name :</b> {{data.firstname}} {{data.lastname}}\n      </ion-col>\n      <ion-col col-6>\n        <b>Company :</b> {{data.organization}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button full color=\"primary\" (click)=\"editRegister()\">Confirm</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button full color=\"danger\" (click)=\"dismiss(null)\">Clear</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
    ], ConfirmEditModal);
    return ConfirmEditModal;
}());

//# sourceMappingURL=edit-register.js.map

/***/ })

});
//# sourceMappingURL=3.js.map