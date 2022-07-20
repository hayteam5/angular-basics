import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[appStyle2]'
})
export class Style2Directive {
  @Input()
  dStyles!: { color?: string; border?: string; borderRadius: string; fontWeight?: string; };

  constructor(private el: ElementRef, private r: Renderer2) {
  }
  @HostBinding('style.fontStyle') elFontStyle: any = null


  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }
  @HostListener('mouseenter') onEnter() {
    this.elFontStyle = 'italic'
    this.r.setStyle(this.el.nativeElement, 'color', this.dStyles.color)
    this.r.setStyle(this.el.nativeElement, 'font-weight', this.dStyles.fontWeight)
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    this.r.setStyle(this.el.nativeElement, 'border-radius', this.dStyles.borderRadius)

  }
  @HostListener('mouseleave') onLeave() {
    this.elFontStyle = null
    this.r.setStyle(this.el.nativeElement, 'color', null)
    this.r.setStyle(this.el.nativeElement, 'font-weight', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'border-radius', null)
  }
}
