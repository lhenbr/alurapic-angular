import { OnInit, Renderer } from '@angular/core';
import { UserService } from './../../../core/user/user.service';
import { ElementRef } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[showifLogged]'
})
export class ShowIfLoggedDirective implements OnInit {


  constructor(
    private element: ElementRef<any>,
    // tslint:disable-next-line: deprecation
    private renderer: Renderer,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    if (!this.userService.isLogged()) {
      this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}
