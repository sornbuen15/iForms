import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
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
  countries: string[];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = 'name';
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.getCountries();
  }
  getCountries() {
    this.rest.getCountries().subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error
    );
  }
  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
}
