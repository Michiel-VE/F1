import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../shared/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens = this.loginService.getToken();

    // set access token in Authorization header
    if (tokens) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokens.token}`,
        },
      });
    }

    // continue with request
    return next.handle(req);
  }
}
