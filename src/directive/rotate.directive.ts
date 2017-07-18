import { Directive, HostListener,Output,EventEmitter } from '@angular/core';
 
@Directive({
  selector: '[rotateCustom]' // Attribute selector
})
export class RotateDirective {
   @Output() angleChange = new EventEmitter<any>();

  @HostListener('rotatemove',['$event']) protected onRotateMove(event) {
  
    event.preventDefault();
    console.log('돌리고....돌리고...');
   // console.log(event);
    this.angleChange.emit({ angle: event.angle});
 
  }
  constructor() {
    console.log('Hello Rotate Directive');
  }

}
