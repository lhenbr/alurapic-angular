import { isPlatformBrowser } from '@angular/common';
import { PlataformDetectorService } from './../../core/plataform-detector/platform.detector.service';
import { AuthService } from './../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.plataformDetectorService.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
  }
  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName]),
        err => {
          console.log(err);
          this.loginForm.reset();
          // tslint:disable-next-line: no-unused-expression
          this.plataformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        });
  }
}
