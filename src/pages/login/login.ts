import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  validation_messages = {
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

  }
  constructor(private formBuilder: FormBuilder, public nav: Nav, public navCtrl: NavController
    , public navParams: NavParams, public rest: RestApiProvider, public storage: Storage
    , private toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(4),
        Validators.required
      ])],
      password: ['', Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    var username = this.loginForm.value.username
    var password = this.loginForm.value.password
    if (username !== undefined && password !== undefined && username.length >= 5 && username.length <= 10) {

      console.log(username.length)
      console.log(password)
      var data = {
        'User': {
          'username': username,
          'password': password,
        }
      }
      let formData: FormData = new FormData();
      formData.append("data[User][username]", username);
      formData.append("data[User][password]", password);
      this.rest.authenticate(formData).subscribe(
        result => {
          this.storage.set('username', result['username'])
          this.storage.set('pin', result['pin'])
          this.nav.setRoot(HomePage);
        }, error => {
          console.log(error)
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });

          toast.present();
        }
      )
    }

  }

}
