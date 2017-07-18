import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-gesture',
  templateUrl: 'gesture.html',
})
export class Gesture {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
   
  pinchW: number=100;
  pinchH: number=100;
  width: number= 100;
  height: number =100;
   timeout;
  rotation: number= 0;
  src: string="assets/img/avatar-ts-barbie.png";
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pinchEvent(e) {
    console.log(' 핀치 .......');
     
    this.width = this.pinchW * e.scale;
    this.height = this.pinchH * e.scale;

    if(this.timeout == null){
        this.timeout = setTimeout(() => {
            this.timeout = null;
            this.updateWidthHeightPinch();
        }, 1000);
    } else {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.timeout = null;
            this.updateWidthHeightPinch();
        }, 1000);
    }
    console.log('폭:'+this.width+'  높이:'+this.height+'  '+e.scale);  
}

updateWidthHeightPinch() {
    this.pinchW = this.width;
    this.pinchH = this.height;
}

onRotation(event: any) : void {
    console.log(event);
    console.log('각도 onRotation:'+  event.angle);
    this.rotation= event.angle;
}


  onPinch(ev) {
    console.log(ev);
    ev.target.attribute.style.
    console.log('핀치 !!!!!!!');
  }

  onRotate(ev) {
    console.log(ev);
    console.log('로테이트  !!!!!!!');
  }
 pressEvent(e) {
   console.log(e);
    this.press++
  }
  panEvent(e) {
    console.log(e);
    this.pan++
  }
  swipeEvent(e) {
    console.log(e);
    this.swipe++
  }
  tapEvent(e) {
    console.log(e);
    this.tap++
  }

}
