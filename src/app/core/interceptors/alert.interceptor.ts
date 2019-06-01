import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { throwError } from 'rxjs';

@Injectable()
export class AlertInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.alertService.success(`${res.url} - ${res.status} ${res.statusText}`);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.alertService.error(`${request.url} - ${error.status} ${error.statusText}`);
        return throwError(error);
      }),
    );
  }

}
