import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[appStyle2]'
})
export class Style2Directive {
  constructor(private el: ElementRef, private r: Renderer2) {

  }
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', 'black')
  }
}
