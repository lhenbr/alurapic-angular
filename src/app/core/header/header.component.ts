import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.user$ = userService.getUser();
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
