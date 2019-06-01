import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class StapiSecurityInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        Authentication: `TOKEN ${this.auth.tokenStapi}`,
        'Custom-Header': 'testing-angular-interceptors',
      },
    });
    return next.handle(request);
  }
}
