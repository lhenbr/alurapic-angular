import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000';

@Injectable()
export class SingUpService {
  constructor(private httpCliente: HttpClient) { }

  checkUserNameTaken(userName) {
    return this.httpCliente.get(API_URL + '/user/exists/' + userName);
  }

  signup(newUser: NewUser) {
    return this.httpCliente.post(API_URL + '/user/signup', newUser);
  }
}
