import { Component, OnInit } from '@angular/core';
import { AlertService, Alert } from '../../services/alert.service';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(
    private readonly alertService: AlertService,
  ) { }

  ngOnInit() {
    this.alertService.getAlert$().pipe(
      tap((alert: Alert) => this.alerts = (alert.message ? [...this.alerts, alert] : [])),
      delay(3000),
      tap((alert: Alert) => this.removeAlert(alert)),
    ).subscribe();
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

}
