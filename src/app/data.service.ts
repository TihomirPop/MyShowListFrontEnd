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

  getShows() {
    return this.http.get(`${environment.API_URL}/shows`);
  }

  getShow(id: number) {
    return this.http.get(`${environment.API_URL}/shows/${id}`);
  }

  addShow(show: any) {
    return this.http.post(`${environment.API_URL}/shows`, show);
  }

  updateShow(show: any) {
    return this.http.put(`${environment.API_URL}/shows/${show.id}`, show);
  }

  deleteShow(id: number) {
    return this.http.delete(`${environment.API_URL}/shows/${id}`);
  }

}
