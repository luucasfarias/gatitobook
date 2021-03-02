import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const URL_API = 'http://localhost:3000/user/signup';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  createNewUser(newUser: NewUser) {
    return this.http.post(`${URL_API}`, newUser);
  }
}
