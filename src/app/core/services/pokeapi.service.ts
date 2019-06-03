import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { PokeapiLoaderHttpClient, PokeapiAlertLoaderHttpClient } from '../http/http-client.injection-token';

@Injectable()
export class PokeapiService {

  private readonly url = `https://pokeapi.co/api/v2`;

  constructor(
    @Inject(PokeapiLoaderHttpClient)
      private readonly http: HttpClient,
    @Inject(PokeapiAlertLoaderHttpClient)
      private readonly httpAlert: HttpClient,
  ) { }

  public getPokemon$(): Observable<any[]> {
    return this.http.get(`${this.url}/pokemon`).pipe(
      pluck('results'),
    );
  }
  public getBerries$(): Observable<any[]> {
    return this.httpAlert.get(`${this.url}/berry`).pipe(
      pluck('results'),
    );
  }
  public getBerriesError$(): Observable<any> {
    return this.httpAlert.get(`${this.url}/berries`);
  }
}
