import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
/**
 * Generated class for the Dragpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dragpage',
  templateUrl: 'dragpage.html',
})
export class Dragpage {
  pinchW: number=100;
  pinchH: number=100;
  width: number= 100;
  height: number =100;
   timeout;
  rotation: number= 0;
  src: string="assets/img/avatar-ts-barbie.png";
  constructor(public navCtrl: NavController, public navParams: NavParams,
      
  ) {
  
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dragpage');
  }

}
