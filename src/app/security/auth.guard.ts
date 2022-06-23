import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { isEmpty } from 'rxjs';

import { User } from '../../interfaces/user';
import { LoginService } from '../shared/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  user!: User;

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loginService.getCurrentUser ||Object.keys(this.loginService.getCurrentUser).length === 0) {
      this.router.navigateByUrl('/login');
      return false;
    }
    const roles: string[] = Array.isArray(route.data['role']) ? route.data['role'] : [route.data['role']];


    // check if user has at least one of the roles
    const valid = roles.some((role: string) => this.loginService.hasRole(role));

    // redirect user if necessary
    if (!valid) {
      console.log('in valid if');
      this.router.navigateByUrl('/login');
    }

    return valid;
  }

}
