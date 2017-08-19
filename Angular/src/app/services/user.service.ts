import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { User } from '../users/user';

@Injectable()

export class UserService{

  users;

  constructor(private http: Http) {}

  private baseUrl = "http://localhost:3000";

  private handleError(error: any): Promise<any> {
    console.error('FUCK, some error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsers(): Promise<User[]>{
    return this.http.get(this.baseUrl + '/users.json')
      .toPromise()
      .then(res => this.users = res.json());
  }

  // getUser(): Promise<User[]>{
  //   return this.http.get(this.baseUrl + '/users.json')
  //     .toPromise()
  //     .then(res => this.users = res.json());
  // }
}
