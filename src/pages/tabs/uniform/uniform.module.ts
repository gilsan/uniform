import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Uniform } from './uniform';

@NgModule({
  declarations: [
    Uniform,
  ],
  imports: [
    IonicPageModule.forChild(Uniform),
  ],
  exports: [
    Uniform
  ]
})
export class UniformModule {}
