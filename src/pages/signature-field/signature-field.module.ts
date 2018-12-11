import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignatureFieldPage } from './signature-field';

@NgModule({
  declarations: [
    SignatureFieldPage,
  ],
  imports: [
    IonicPageModule.forChild(SignatureFieldPage),
  ],
})
export class SignaturePageModule {}
