import { Directive ,ElementRef,Renderer} from '@angular/core';
 
@Directive({
  selector: '[singledoubletap]'
})
export class SingleDoubleTapDirective {
 constructor(
     public element: ElementRef,
     public renderer: Renderer,
    
   ) {}

  ngAfterViewInit() {
     let hammer = new window['Hammer'](this.element.nativeElement);
      hammer.get('doubletap').recognizeWith('singletap');
      hammer.get('singletap').requireFailure('doubletap');
      hammer.on('singletap doubletap', (ev)=> {        
        this.handleTap(ev);
      });
  }

    handleTap(ev) {
       console.log(ev);
    }
}