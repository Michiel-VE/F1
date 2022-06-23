import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthToken } from '../../interfaces/authToken';
import { Role } from '../../interfaces/role';
import { User } from '../../interfaces/user';


@Injectable({ providedIn: 'root' })
export class LoginService {
  private baseUrl = environment.baseUrl;
  private currentUserSubject: BehaviorSubject<User>;
  token: any;
  user: User = {
    id: '',
    roles: [{
      id: '',
      name: '',
    }],
    username: '',
  };

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
  }

  public get getCurrentUser(): User {
    return this.currentUserSubject.getValue();
  }


  login(username: string, password: string): void {
    this.http.post<any>(`${this.baseUrl}/auth/login`, { username, password })
      .pipe(
        tap((token: AuthToken) => {
          localStorage.setItem('token', JSON.stringify(token));
          this.token = token;
        }),
        switchMap(() => this.getUser()),
        tap((user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSubject.next(user);
          if (this.hasRole('ROLE_OWNER')) {
            this.navigateAfterLogin();
          }
        }))
      .subscribe();
  }

  logout(): void {
    localStorage.clear();
    this.currentUserSubject.next(this.user);
    this.router.navigateByUrl('/');
  }

  navigateAfterLogin(): void {
    this.router.navigateByUrl('/overview');
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/auth/user`);
  }

  getToken(): AuthToken {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : undefined;
  }

  hasRole(name: string): boolean {
    if (Object.keys(this.getCurrentUser).length === 0) {
      return false;
    }
    const roles: Role[] = this.getCurrentUser.roles;
    return roles.some((role: Role) => role.name === name);
  }
}
