import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hammer } from './hammer';

@NgModule({
  declarations: [
    Hammer,
  ],
  imports: [
    IonicPageModule.forChild(Hammer),
  ],
  exports: [
    Hammer
  ]
})
export class HammerModule {}
