import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appGreenHighlighter]'
})
export class GreenHighlighterDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer:Renderer2) { }

  @Input() DefaultColor:string = 'transparent';
  @Input() DefaultHighLightColor:string = 'yellow';
  @HostBinding('style.background-color') BackgroundColor:string; //Binding directly to the element property

  ngOnInit()
  {
    //this approach is better than access DOM directly
    // like this # this.eleRef.nativeElement.style.backgroundColor = 'greenyellow';
    // Remember, https://angular.io/api/core/Renderer2 is required for manipulating the DOM
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'greenyellow');
    this.BackgroundColor = this.DefaultColor;
    this.renderer.setStyle(this.eleRef.nativeElement, 'font-size','22px');
  }

  @HostListener('mouseenter') MouseEnter(eventData: Event)
  {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'darkseagreen');
    this.BackgroundColor = this.DefaultHighLightColor;
  }
  @HostListener('mouseleave') MouseLeave(eventData: Event)
  {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'greenyellow');
    this.BackgroundColor = this.DefaultColor;
  }
}
