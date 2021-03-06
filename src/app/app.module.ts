import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { FileTransfer } from '@ionic-native/file-transfer';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage,SignatureModal, StatusModal, ChcekinModal, ConfirmEditModal } from '../pages/register/register';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { GroupByPipe } from '../pipes/group/group';
import { SignatureFieldPage } from '../pages/signature-field/signature-field';
import { ReportPage } from '../pages/report/report';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    RegisterPage,
    GroupByPipe,
    SearchPipe,
    SortPipe,
    LoginPage,
    SignatureModal,
    SignatureFieldPage,
    StatusModal,
    ChcekinModal,
    ConfirmEditModal,
    ReportPage
  ],
  imports: [
    SignaturePadModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    SignatureModal,
    SignatureFieldPage,
    StatusModal,
    ChcekinModal,
    ConfirmEditModal,
    ReportPage
  ],
  providers: [
    ModalController,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestApiProvider,
    Device,
    FileTransfer
  ]
})
export class AppModule { }
