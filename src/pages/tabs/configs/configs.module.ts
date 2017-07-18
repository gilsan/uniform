import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Configs } from './configs';

@NgModule({
  declarations: [
    Configs,
  ],
  imports: [
    IonicPageModule.forChild(Configs),
  ],
  exports: [
    Configs
  ]
})
export class ConfigsModule {}
