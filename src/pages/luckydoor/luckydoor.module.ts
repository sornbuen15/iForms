import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LuckydoorPage } from './luckydoor';

@NgModule({
  declarations: [
    LuckydoorPage,
  ],
  imports: [
    IonicPageModule.forChild(LuckydoorPage),
  ],
})
export class LuckydoorPageModule {}
