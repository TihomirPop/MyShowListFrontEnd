import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comment} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersApi = environment.API_URL + '/users'
  showsApi = environment.API_URL + '/shows'
  myCommentsApi = environment.API_URL + '/me/comments'

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.usersApi);
  }

  addUser(user: any) {
    return this.http.post(this.usersApi, user);
  }

  getShows() {
    return this.http.get(this.showsApi);
  }

  getShow(id: number) {
    return this.http.get(`${this.showsApi}/${id}`);
  }

  addShow(show: any) {
    return this.http.post(this.showsApi, show);
  }

  updateShow(show: any) {
    return this.http.put(`${this.showsApi}`, show);
  }

  deleteShow(id: number) {
    return this.http.delete(`${this.showsApi}/${id}`);
  }


  getMyComments() {
    return this.http.get(this.myCommentsApi);
  }

  addComment(comment: Comment) {
    return this.http.post(this.myCommentsApi, comment);
  }

  updateComment(comment: Comment) {
    return this.http.put(`${this.myCommentsApi}`, comment);
  }

  deleteComment(id: number) {
    return this.http.delete(`${this.myCommentsApi}/${id}`);
  }
}
