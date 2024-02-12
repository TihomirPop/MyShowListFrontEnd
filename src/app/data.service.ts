import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersApi = environment.API_URL + '/users'

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.usersApi);
  }

  addUser(user: any) {
    return this.http.post(this.usersApi, user);
  }
}
