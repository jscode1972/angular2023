import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { LinkType } from 'src/app/core';

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective implements OnInit {

  @Input() link !: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

 ngOnInit(): void {
  console.log( this.el.nativeElement );
  //console.log( 'href', this.link );
  //this.el.nativeElement.innerText = this.link.text;
  //this.el.nativeElement.href = this.link.href;
  this.renderer.setAttribute(this.el.nativeElement, 'href', this.link);
  // this.renderer.setValue(this.el.nativeElement, this.link.text);
 }

}
