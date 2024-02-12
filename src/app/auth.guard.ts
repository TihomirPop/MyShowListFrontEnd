import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(next);

    if (this.authService.getUser()) {
      return true;
    }

    return this.authService.whoAmI().then(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }).catch(() => {
      this.router.navigate(['login']);
      return false;
    });
  }
}
