import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Alert {
  type?: AlertType;
  message?: string;
}

export enum AlertType {
  Success = 'success',
  Error = 'danger',
  Info = 'info',
  Warning = 'warning',
}

@Injectable()
export class AlertService {
  private alert$ = new Subject<Alert>();

  getAlert$(): Observable<any> {
    return this.alert$.asObservable();
  }

  success(message: string) {
    this.alert({ message, type: AlertType.Success });
  }

  error(message: string) {
    this.alert({ message, type: AlertType.Error });
  }

  info(message: string) {
    this.alert({ message, type: AlertType.Info });
  }

  warn(message: string) {
    this.alert({ message, type: AlertType.Warning });
  }

  // main alert method
  private alert(alert: Alert) {
    this.alert$.next(alert);
  }

  clear() {
    this.alert$.next({});
  }

}
