import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {
    @Input() color = 'yellow';
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngAfterViewInit() {
        this.setBackgroudColor(this.color);
    }

    setBackgroudColor(color: string) {
        this.render.setStyle(this.el.nativeElement, 'background-color', color)
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBackgroudColor('lightgreen')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBackgroudColor(this.color)
    }

    @HostListener('click') onClick() {
        this.color = 'lightgreen';
    }
}