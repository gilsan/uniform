import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-rotatehammer',
  templateUrl: 'rotatehammer.html',
})
export class Rotatehammer {
  angle: number;
  transformStyle: string;
  title ="회전";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform) {
     platform.ready().then((readySource)=> {
          console.log('Width: ' + platform.width());
           console.log('Height: ' + platform.height());
     })
      this.angle=0;
      this.transformStyle="rotate(0deg)";
  }

  onRotation(event: any) : void {
  //  console.log('각도 onRotation:'+  event.angle);
    this.angle= event.angle;
    this.transformStyle="rotate("+this.angle+"deg)";
  } 

 

}
