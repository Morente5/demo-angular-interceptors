import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable()
export class StapiService {

  private readonly url = `http://stapi.co/api/v1/rest`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getAnimals$(): Observable<any[]> {
    return this.http.get(`${this.url}/animal/search`).pipe(
      pluck('animals'),
    );
  }
  public getWeapons$(): Observable<any[]> {
    return this.http.get(`${this.url}/weapon/search`).pipe(
      pluck('weapons'),
    );
  }
  public getWeaponsError$(): Observable<any> {
    return this.http.get(`${this.url}/weapon/`);
  }
}
