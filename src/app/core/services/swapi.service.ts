import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class SwapiService {

  private readonly url = 'https://swapi.co/api';

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getPeople$(): Observable<any[]> {
    return this.http.get(`${this.url}/people/`).pipe(
      pluck('results'),
    );
  }
  public getPlanets$(): Observable<any[]> {
    return this.http.get(`${this.url}/planets/`).pipe(
      pluck('results'),
    );
  }

}
