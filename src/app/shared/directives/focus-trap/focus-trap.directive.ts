import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {
  private firstElement: HTMLElement = null;
  private lastElement: HTMLElement = null;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll(`
      [tabindex]:not([tabindex="-1"]),
      a[href]:not([disabled]),
      button:not([disabled]),
      textarea:not([disabled]),
      input:not([disabled]),
      select:not([disabled])`) as HTMLElement[];
    this.firstElement = elements[0];
    this.lastElement = elements[elements.length - 1];
    this.firstElement.focus();
  }

  @HostListener('keydown', ['$event'])
  handleTabClick(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === this.firstElement) {
        this.lastElement.focus();
        event.preventDefault();
      } else if (document.activeElement === this.lastElement) {
        this.firstElement.focus();
        event.preventDefault();
      }
    }
  }
}
