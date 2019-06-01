import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SwapiSecurityInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.tokenSwapi}`,
        'X-CSRFToken': 'testing-angular-interceptors',
      },
    });
    return next.handle(request);
  }
}
