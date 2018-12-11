import { Component,  } from '@angular/core';
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
  devicePlatform: any;
  deviceManufacturer: any;
  deviceUUID: any;
  deviceSerial: any;
  deviceVersion: any;
  token: any;
  constructor(private platform: Platform, public nav:Nav, public navCtrl: NavController, private storage: Storage, private device: Device) {
    platform.ready().then(() => {

      if (!platform.is('browser')) {
        this.devicePlatform = device.platform;
        this.deviceManufacturer = device.manufacturer;
        this.deviceUUID = device.platform;
        this.deviceSerial = device.serial;
        this.deviceVersion = device.version;
      }
      storage.get('token').then(
        (val) => {
          if (val === null) {

          } else {

          }
        }
      ).catch()
    });
  }

  gestList() {
    this.nav.setRoot(RegisterPage);
  }
}
