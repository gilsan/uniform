import { Rotatehammer } from './../pages/rotatehammer/rotatehammer';
import { BrowserModule, HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { IonicStorageModule} from '@ionic/storage';
import { File} from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import 'hammerjs';
 

import { AuthService} from '../services/auth.service';
import {  UniformService} from '../services/uniform.service';

import { MyApp } from './app.component'; 
import { Login} from '../pages/login/login';
import { Welcome} from '../pages/welcome/welcome';
import { Tabs} from '../pages/tabs/tabs';
import { Configs} from '../pages/tabs/configs/configs';
import { Uniform} from '../pages/tabs/uniform/uniform';
import { Canvas } from '../pages/canvas/canvas';
import { Hammer} from '../pages/hammer/hammer';
import { Dragpage } from '../pages/dragpage/dragpage';
import { Gesture } from '../pages/gesture/gesture';


import { AbsoluteDragDirective}  from  '../directive/absoluteDrag'; 
import { RotateDirective}  from  '../directive/rotate.directive';
import { SingleDoubleTapDirective}  from  '../directive/singledoubletap';
import { PressDirective}  from  '../directive/pressdirective';
 
import { Mgnimages } from '../pages/manageimage/mgnimages/mgnimages';
import { Mgnimage } from '../pages/manageimage/mgnimage/mgnimage';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'rotate': { enable: true }, //rotate is disabled by default, so we need to enable it
    'pinch' : { enable: true}
  }
}


@NgModule({
  declarations: [
    MyApp,
    Login,Welcome,Tabs,Configs,Uniform,
    Canvas,Hammer, RotateDirective,Rotatehammer,
    AbsoluteDragDirective, Dragpage,PressDirective ,Gesture,
    Mgnimages,Mgnimage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, 
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   Login,Welcome,Tabs, Configs, Uniform,
   Canvas, Hammer,Rotatehammer, Dragpage,Gesture,
    Mgnimages,Mgnimage
 ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService, UniformService,
    {
        provide: HAMMER_GESTURE_CONFIG,
         useClass: CustomHammerConfig
     },File,FileTransfer, FileTransferObject
  ]
})
export class AppModule {}
