import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { StapiLoaderHttpClient, StapiAlertLoaderHttpClient } from '../http/http-client.injection-token';

@Injectable()
export class StapiService {

  private readonly url = `http://stapi.co/api/v1/rest`;

  constructor(
    @Inject(StapiLoaderHttpClient)
      private readonly http: HttpClient,
    @Inject(StapiAlertLoaderHttpClient)
      private readonly httpAlert: HttpClient,
  ) { }

  public getAnimals$(): Observable<any[]> {
    return this.http.get(`${this.url}/animal/search`).pipe(
      pluck('animals'),
    );
  }
  public getWeapons$(): Observable<any[]> {
    return this.httpAlert.get(`${this.url}/weapon/search`).pipe(
      pluck('weapons'),
    );
  }
  public getWeaponsError$(): Observable<any> {
    return this.httpAlert.get(`${this.url}/weapon/`);
  }
}
