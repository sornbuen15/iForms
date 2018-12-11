import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the EditRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-register',
  templateUrl: 'edit-register.html',
})
export class EditRegisterPage {
  alreadyList: string[];
  errorMessage: string;
  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams,
    public rest: RestApiProvider, public modalCtrl: ModalController, public platform: Platform) {
    this.alreadyList = [];
    this.alreadyRegisterList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRegisterPage');

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.alreadyRegisterList();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  alreadyRegisterList() {
    this.rest.alreadyRegisterList().subscribe(
      alreadyList => {
        this.alreadyList = alreadyList
      },
      error => this.errorMessage = <any>error
    );
  }

  confirmEditModal(data) {
    const modal = this.modalCtrl.create(ConfirmEditModal, { 'data': data }, { 'cssClass': "modal-fullscreen" });
    modal.onDidDismiss(data => {
      if (data !== null) {
        this.nav.setRoot(RegisterPage);
      }
    });
    modal.present();
  }

}

/* ChcekinModal */
@Component({
  template: `<ion-header>
  <ion-navbar>
    <ion-title>Confirm Avoid Checkin</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-grid>
    <ion-row>
      <ion-col col-6>
        <b>Name :</b> {{data.firstname}} {{data.lastname}}
      </ion-col>
      <ion-col col-6>
        <b>Company :</b> {{data.organization}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <button ion-button full color="primary" (click)="editRegister()">Confirm</button>
      </ion-col>
      <ion-col col-6>
        <button ion-button full color="danger" (click)="dismiss(null)">Clear</button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>`
})
export class ConfirmEditModal {
  data: any = [];
  constructor(public viewCtrl: ViewController, params: NavParams, public rest: RestApiProvider) {

    this.data = params.get('data');
    console.log(this.data);
  }

  editRegister() {
    this.rest.editRegister(this.data).subscribe(
      (data) => { this.dismiss(data) }
    )
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
