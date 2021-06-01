import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { SingUpService } from './signup.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private singUpService: SingUpService) { }

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.singUpService.checkUserNameTaken(userName)
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    };
  }
}
