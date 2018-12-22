import { Component, } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';
import { DeviceRegisterPage } from '../device-register/device-register'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private platform: Platform, public nav: Nav, public navCtrl: NavController, private storage: Storage, private device: Device) {
    platform.ready().then(() => {


    });
  }

  gestList() {
    this.nav.setRoot(RegisterPage);
  }
}
