import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mgnimages } from './mgnimages';

@NgModule({
  declarations: [
    Mgnimages,
  ],
  imports: [
    IonicPageModule.forChild(Mgnimages),
  ],
  exports: [
    Mgnimages
  ]
})
export class MgnimagesModule {}
