import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { SignaturePage } from '../pages/signature/signature';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    RegisterPage,
    SearchPipe,
    SortPipe,
    SignaturePage
  ],
  imports: [
    SignaturePadModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SignaturePage
  ],
  providers: [
    ModalController,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestApiProvider
  ]
})
export class AppModule { }
