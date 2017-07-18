import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mgnimage } from './mgnimage';

@NgModule({
  declarations: [
    Mgnimage,
  ],
  imports: [
    IonicPageModule.forChild(Mgnimage),
  ],
  exports: [
    Mgnimage
  ]
})
export class MgnimageModule {}
