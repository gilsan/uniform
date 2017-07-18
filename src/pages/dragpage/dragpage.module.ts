import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dragpage } from './dragpage';

@NgModule({
  declarations: [
    Dragpage,
  ],
  imports: [
    IonicPageModule.forChild(Dragpage),
  ],
  exports: [
    Dragpage
  ]
})
export class DragpageModule {}
