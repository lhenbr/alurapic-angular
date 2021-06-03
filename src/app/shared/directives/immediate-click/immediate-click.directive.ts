import { PlataformDetectorService } from './../../../core/plataform-detector/platform.detector.service';
import { element } from 'protractor';

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private element: ElementRef,
    private platformDetector: PlataformDetectorService) { }
  // tslint:disable-next-line: no-unused-expression
  ngOnInit(): void {
    // tslint:disable-next-line: no-unused-expression
    this.platformDetector.isPlatformBrowser &&
      this.element.nativeElement.click();
  }
}
