import { Component, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { SignatureFieldPage } from '../signature-field/signature-field';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  guestlist: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';
  hiddenOnBrowser = false;
  statusColor = "";
  public devWidth = this.platform.width();
  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams,
    public rest: RestApiProvider, public modalCtrl: ModalController, public platform: Platform) {
      this.getGuestlist();

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getGuestlist();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  getGuestlist() {
    this.rest.getGuestlist().subscribe(
      guestlists => {
        this.guestlist = guestlists
      },
      error => this.errorMessage = <any>error
    );
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  statusModal(data) {
    const modal = this.modalCtrl.create(StatusModal, { 'data': data });
    modal.onDidDismiss(() => {
      // this.navCtrl.push(this.navCtrl.getActive().component);
      this.nav.setRoot(RegisterPage);
    });
    modal.present();
  }

  signatureModal(id) {
    const modal = this.modalCtrl.create(SignatureModal, { 'id': id });
    modal.onDidDismiss(data => {
      if (data !== null) {
        this.statusModal(data)
      }
    });
    modal.present();
  }

  checkinModal(data) {
    const modal = this.modalCtrl.create(ChcekinModal, { 'data': data }, { 'cssClass': "modal-fullscreen" });
    modal.onDidDismiss(data => {
      if (data !== null) {
        this.statusModal(data)
      }
    });
    modal.present();
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
    <ion-title>Confirm Checkin</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-grid>
    <ion-row>
      <ion-col col-6>
        <b>Name :</b> {{data.firstname}} {{data.lastname}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <b>Company :</b> {{data.organization}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <button ion-button full color="primary" (click)="registerByCheckin()">Confirm</button>
      </ion-col>
      <ion-col col-6>
        <button ion-button full color="danger" (click)="dismiss(null)">Cancel</button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>`
})
export class ChcekinModal {
  data: any = [];
  constructor(public viewCtrl: ViewController, params: NavParams, public rest: RestApiProvider) {

    this.data = params.get('data');
    console.log(this.data);
  }

  registerByCheckin() {
    this.rest.registerByCheckin(this.data).subscribe(
      (data) => { this.dismiss(data) }
    )
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}

/* SignatureModal */
@Component({
  template: `<ion-header>
  <ion-navbar>
    <ion-title>signature</ion-title>
  </ion-navbar>
  </ion-header>
<ion-content padding>
  <ion-grid>
    <ion-row>
      <ion-col style="align-content: center">
        <signature-field name="sigContainer1" id="sigContainer1"></signature-field>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-4>
        <button ion-button full color="danger" (click)="dismiss(null)">Cancel</button>
      </ion-col>
      <ion-col col-4>
        <button ion-button full color="light" (click)="clear()">Clear</button>
      </ion-col>
      <ion-col col-4>
        <button ion-button full color="secondary" (click)="save()" >Done</button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>`
})
export class SignatureModal {
  @ViewChildren(SignatureFieldPage) public sigs: QueryList<SignatureFieldPage>;
  @ViewChildren('sigContainer1') public sigContainer1: QueryList<ElementRef>;
  public canvasWidth: any = 541;
  public canvasHeight: any = 215;
  data: any;

  constructor(public viewCtrl: ViewController, params: NavParams, public rest: RestApiProvider) {
    this.data = params.get('id')
  }

  public ngAfterViewInit() {
    this.beResponsive();
    this.setOptions();
  }
  public beResponsive() {
    console.log('Resizing signature pad canvas to suit container size');
    this.size(this.sigs.first);
  }

  public size(sig: SignatureFieldPage) {
    sig.signaturePad.set('canvasWidth', this.canvasWidth);
    sig.signaturePad.set('canvasHeight', this.canvasHeight);
  }

  public setOptions() {
    this.sigs.first.signaturePad.set('penColor', 'rgb(0, 0, 0)');
  }

  public clear() {
    this.sigs.first.clear();
  }

  public save() {
    if (this.sigs.first.signature !== null) {
      var blob = this.dataURItoBlob(this.sigs.first.signature);

      this.registerBySignature(blob);
    }
  }


  public blobToFile = (theBlob: Blob, fileName: string): File => {
    var b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = new Date();
    b.name = fileName;

    //Cast to a File() type
    return <File>theBlob;
  }

  registerBySignature(blob) {
    let formData: FormData = new FormData();
    let filename = 'signature_' + this.data + '.png';
    let file = this.blobToFile(blob, filename);
    formData.append("File", file, filename);
    formData.append("id", this.data);
    this.rest.registerBySignature(formData).subscribe(
      (data) => { this.dismiss(data) }
    );
  }

  dismiss(data) {
    this.clear();
    this.viewCtrl.dismiss(data);
  }

  private dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
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
  }
}
/* StatusModal */
@Component({
  template: `<ion-content padding>
  <ion-grid style="margin-top:10vh">
    <ion-row>
      <ion-col col-xl-5 col-lg-5 col-md-6 col-sm-6 style="text-align: center;">
        <img src="../../assets/imgs/pongpara50th.logo.png">
      </ion-col>
      <ion-col offset-xl-1 col-xl-5 col-lg-5 col-md-6 col-sm-6 >
        <img src="../../assets/imgs/long-logo.png" style="margin-bottom:2vh">
        <ion-row>
          <ion-col><b>Name:</b>&nbsp;&nbsp;{{data.firstname}}</ion-col>
        </ion-row>
        <ion-row >
          <ion-col><b>Lastname:</b>&nbsp;&nbsp;{{data.lastname}}</ion-col>
        </ion-row>
        <ion-row >
          <ion-col><b>Company:</b>&nbsp;&nbsp;{{data.organization}}</ion-col>
        </ion-row>
        <ion-row >
          <ion-col><b>Table:</b>&nbsp;&nbsp;{{data.table_no}}</ion-col>
        </ion-row>
        <ion-row >
          <ion-col><button ion-button full color="primary" (click)='dismiss()'>Back to list</button></ion-col>
        </ion-row>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>`
})
export class StatusModal {
  data: any = [];
  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.data = params.get('data');
  }

  dismiss() {
    this.viewCtrl.dismiss();
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
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <b>Company :</b> {{data.organization}}
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col col-6>
        <button ion-button full color="primary" (click)="editRegister()">Confirm</button>
      </ion-col>
      <ion-col col-6>
        <button ion-button full color="danger" (click)="dismiss(null)">Cancel</button>
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
