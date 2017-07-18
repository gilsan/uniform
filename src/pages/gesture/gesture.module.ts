import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gesture } from './gesture';

@NgModule({
  declarations: [
    Gesture,
  ],
  imports: [
    IonicPageModule.forChild(Gesture),
  ],
  exports: [
    Gesture
  ]
})
export class GestureModule {}
