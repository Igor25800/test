import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[columnWidth]',
  standalone: true
})
export class ColumnStyleWidthDirective implements OnInit {
  @Input() size!: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.size) {
      this.renderer.setStyle(this.el.nativeElement, 'width', `${this.size}px`);
      this.renderer.setStyle(this.el.nativeElement, 'minWidth', `${this.size}px`);
      this.renderer.setStyle(this.el.nativeElement, 'maxWidth', `${this.size}px`);
    }
  }
}
