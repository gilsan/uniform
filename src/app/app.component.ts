
import { Component,ViewChild  } from '@angular/core';
import { Platform, NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { AuthService } from '../services/auth.service';

import { Login} from '../pages/login/login';
import { Welcome} from '../pages/welcome/welcome';
import { Canvas} from '../pages/canvas/canvas';
import { Hammer } from '../pages/hammer/hammer';
import { Rotatehammer} from '../pages/rotatehammer/rotatehammer';
import { Dragpage } from './../pages/dragpage/dragpage'; 
import { Gesture} from '../pages/gesture/gesture';
import { Mgnimage } from '../pages/manageimage/mgnimage/mgnimage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp   {
  rootPage:any = Welcome;
 // rootPage:any = Canvas;
  isLogin : boolean ;

  @ViewChild('nav') nav : NavController;
  constructor(
      platform: Platform, 
      statusBar: StatusBar, 
      splashScreen: SplashScreen,
     private menuCtrl: MenuController,
     private authService: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();      
    });
      this.isLogin= this.authService.isLogin; 
      console.log('app component:'+this.isLogin);
  }

 

  onLogOut() {
   // this.authService.isLogin= false;
   //  this.isLogin=false;  
   // console.log('로그아웃:'+this.authService.isLogin); 
    this.menuCtrl.close();
    this.nav.popToRoot();
  }

  onCanvas() {
    this.menuCtrl.close();
    this.nav.setRoot(Canvas);
  }

 onGesture() {
   this.menuCtrl.close();
   this.nav.setRoot(Gesture);
 }

 onRotate() {
    this.menuCtrl.close();
    this.nav.setRoot(Rotatehammer);
 }

 onDrag() {
   this.menuCtrl.close();
   this.nav.setRoot(Dragpage);
 }

 onManageImage() {
   this.menuCtrl.close();
   this.nav.setRoot(Mgnimage);
 }

}



