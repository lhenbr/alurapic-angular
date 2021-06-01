import { PlataformDetectorService } from './../../core/plataform-detector/platform.detector.service';
import { Router } from '@angular/router';
import { SingUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SingUpComponent implements OnInit {
  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SingUpService,
    private router: Router,
    private plataformDetectorService: PlataformDetectorService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ],
      ],
    });
    // tslint:disable-next-line: no-unused-expression
    this.plataformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }
  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(newUser)
      .subscribe(() => this.router.navigate(['']),
        err => console.log(err));
  }
}
