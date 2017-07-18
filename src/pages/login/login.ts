import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams,
   LoadingController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { Tabs} from '../tabs/tabs'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        private authService: AuthService,
        private loadingCtrl:LoadingController
        ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  onSignin(form: NgForm) {
      const loading=this.loadingCtrl.create({
      content: '진행중.....'
    });
     loading.present();    
  //  console.log('로그인:'+form.value.name+'  '+form.value.password);
     this.authService.signin(form.value.name,form.value.password)
     .subscribe( (result)=> {
      
         this.authService.isLogin=true;
        console.log('로그인:'+this.authService.isLogin);
        loading.dismiss();
        this.navCtrl.push(Tabs);
      
     });
     
  }

}
