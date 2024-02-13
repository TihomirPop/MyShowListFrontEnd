import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.whoAmI().then(user => {
      if (!user) {
        this.router.navigate(['login']);
        return false;
      }

      if (next.url.length > 0 && next.url[0].path === 'add-show' && !user.user.isAdmin) {
        this.router.navigate(['']);
        return false;
      }

      return true;
    }).catch(() => {
      this.router.navigate(['login']);
      return false;
    });
  }
}
