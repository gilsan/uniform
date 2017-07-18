import { Component,ViewChild,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import   'fabric';
 declare let fabric: any; 

@IonicPage()
@Component({
  selector: 'page-canvas',
  templateUrl: 'canvas.html',
})
export class Canvas {

   @ViewChild('myCanvas') canvas: any;
   canvasElement: any;
   lastX: number;
   lastY: number;

   private convas; 
   private currentSrc: string;
   currentColor: any='#1abc9c';
   availableColors: any;

  public width: number;
  public height: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform, public renderer: Renderer, 
  ) {
     this.availableColors=[
       '#1abc9c',
       '#3498db',
       '#9b59b6',
       '#e67e22',
       '#e74c3c'
     ]
  }

  ngAfterViewInit() {
     
  //  this.width=this.platform.width();
  //  this.height=this.platform.height();
    
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setElementAttribute(this.canvasElement,'width',this.platform.width()+'');
    this.renderer.setElementAttribute(this.canvasElement,'height',this.platform.height()+'');
    
    this.convas = new fabric.Canvas('c');
    /*
    const rect =  new fabric.Rect({
        fill:'#06538e',
        width: 20,
        height: 25,
        stroke: 'red',
        strokeDashArray: [5,5]
    });
    this.convas.add(rect);
    */
  }
   
  imageMove(ev,position:number) {
     console.log(ev);
    /*
    this.lastX= ev.touches[0].pageX;
    this.lastY= ev.touches[0].pageY;
    */
    const url = ev._src;
    fabric.Image.fromURL(url, (oImg)=> {     
      this.convas.add(oImg);
    },{
      left: 10+position, top:10+position
    });
     
  }


changeColor(color:string) {
   this.currentColor = color;
}

   handleStart(ev) {
  
     this.lastX= ev.touches[0].pageX;
     this.lastY= ev.touches[0].pageY;
     console.log(this.lastX, this.lastY);
   }

    handleMove(ev) {
      //   console.log(ev);
     let ctx=this.canvasElement.getContext('2d');
     let currentX =ev.touches[0].pageX;
     let currentY = ev.touches[0].pageY;
     
     ctx.beginPath();
     ctx.lineJoin="round";
     ctx.moveTo(this.lastX,this.lastY);
     ctx.lineTo(currentX,currentY);
     ctx.closePath();
     ctx.strokeStyle=this.currentColor;
     ctx.lineWidth=5;
     ctx.stroke();

     this.lastX= currentX ;
     this.lastY= currentY;    
   }

    handleEnd(ev) {
   
 
     
   }


}
