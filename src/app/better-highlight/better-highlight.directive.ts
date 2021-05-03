import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() highlightedColor: string = 'blue';

  // @HostBinding('style.backgroundColor') background: string = 'red';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private elRef: ElementRef, private render: Renderer2) {

  }
  ngOnInit() {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
    // this.background = 'purple';
    this.background = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // this.background = 'transparent';
    this.background = this.defaultColor;
  }

  @HostListener('drag') drag() {
    // this.render.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    window.alert('Hello Gokul Krishna');
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // this.keypressed = event.keyCode;
    // window.alert('Hello Gokul Krishna'+event.keyCode);
  }
}