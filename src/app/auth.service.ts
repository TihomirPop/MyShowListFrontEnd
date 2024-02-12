import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import {User} from "./models";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi = environment.API_URL + '/auth'
  private user: User | null = null;
  private token: string | null = null;

  errorEmitter: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string) {
    this.http.post(this.authApi, {username, password})
      .subscribe({
        next: (res: any) => {
          this.user = res.user;
          this.token = res.token;
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        error: (e: HttpErrorResponse) => {
          this.errorEmitter.next(e.error.message);
        }
      });
  }

}
