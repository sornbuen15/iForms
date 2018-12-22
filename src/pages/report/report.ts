import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  total:any = "";
  register:any = "";
  noregister:any = "";
  constructor(public nav: Nav, public navCtrl: NavController, public navParams: NavParams,
    public rest: RestApiProvider, public modalCtrl: ModalController, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    this.getReport();
  }

  getReport(){
    this.rest.report().subscribe(
      data => {
        this.total = JSON.stringify(data.total)
        this.register = JSON.stringify(data.register)
        this.noregister = JSON.stringify(data.noregister)
      }
    )
  }

}
