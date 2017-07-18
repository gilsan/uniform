import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rotatehammer } from './rotatehammer';

@NgModule({
  declarations: [
    Rotatehammer,
  ],
  imports: [
    IonicPageModule.forChild(Rotatehammer),
  ],
  exports: [
    Rotatehammer
  ]
})
export class RotatehammerModule {}
