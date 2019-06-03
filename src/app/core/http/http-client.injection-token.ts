import { InjectionToken } from '@angular/core';
import { ForkableHttpClient } from 'ngx-forkable-http-client';

export const SwapiHttpClient =
  new InjectionToken<ForkableHttpClient>('SwapiHttpClient');

export const SwapiLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('SwapiLoaderHttpClient');

export const PokeapiLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('PokeapiLoaderHttpClient');

export const PokeapiAlertLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('PokeapiAlertLoaderHttpClient');
