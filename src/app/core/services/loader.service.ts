import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

  public isLoading$ = new Subject<boolean>();

  start() {
    this.isLoading$.next(true);
  }

  stop() {
    this.isLoading$.next(false);
  }
}
