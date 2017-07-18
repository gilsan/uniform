import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../../pages/login/login';
 
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
    private isLogin: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams      
     ) {
      this.isLogin= true;
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad Welcome');
  }
  signup() {
    this.navCtrl.push(Login);
  }

}
