import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'signature-field',
  templateUrl: 'signature-field.html',
})
export class SignatureFieldPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public options: Object = {};

  public _signature: any = null;

  // public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    console.log('signature data :');
    console.log(this.signaturePad.toData());
    // this.propagateChange(this.signature);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePage');
  }
  public propagateChange(data){

  }
  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  // public registerOnChange(fn: any): void {
  //   this.propagateChange = fn;
  // }

  public registerOnTouched(): void {
    // no-op
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
  }

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL('image/png', 0.5);
  }

  public clear(): void {
    this.signaturePad.clear();
    this.signature = '';
  }
}
