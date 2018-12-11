import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
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
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' }
    ],

  }
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public rest: RestApiProvider) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])],
      password: ['', Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if (this.loginForm.value.username !== undefined && this.loginForm.value.password !== undefined) {

      console.log(this.loginForm.value.username);
      console.log(this.loginForm.value.password);
      var data = {
        'username': this.loginForm.value.username,
        'password': this.loginForm.value.password,

      }
      let formData: FormData = new FormData();
      formData.append("username", this.loginForm.value.username);
      formData.append("password", this.loginForm.value.password);
      this.rest.authenticate(formData).subscribe(

      )
    }

  }

}
