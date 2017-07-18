import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Canvas } from './canvas';

@NgModule({
  declarations: [
    Canvas,
  ],
  imports: [
    IonicPageModule.forChild(Canvas),
  ],
  exports: [
    Canvas
  ]
})
export class CanvasModule {}
