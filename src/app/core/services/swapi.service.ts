import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { SwapiHttpClient, SwapiLoaderHttpClient } from '../http/http-client.injection-token';

@Injectable()
export class SwapiService {

  private readonly url = 'https://swapi.co/api';

  constructor(
    @Inject(SwapiHttpClient)
      private readonly http: HttpClient,
    @Inject(SwapiLoaderHttpClient)
      private readonly httpLoader: HttpClient,
  ) { }

  public getPeople$(): Observable<any[]> {
    return this.http.get(`${this.url}/people/`).pipe(
      pluck('results'),
    );
  }
  public getPlanets$(): Observable<any[]> {
    return this.httpLoader.get(`${this.url}/planets/`).pipe(
      pluck('results'),
    );
  }

}
