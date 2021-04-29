import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private render: Renderer2) {

  }
  ngOnInit() {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }

  @HostListener('drag') drag() {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    window.alert('Hello Gokul Krishna');
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // this.keypressed = event.keyCode;
    window.alert('Hello Gokul Krishna'+event.keyCode);
  }
}
