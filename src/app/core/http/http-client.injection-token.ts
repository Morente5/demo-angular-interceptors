import { InjectionToken } from '@angular/core';
import { ForkableHttpClient } from 'ngx-forkable-http-client';

export const SwapiHttpClient =
  new InjectionToken<ForkableHttpClient>('SwapiHttpClient');

export const SwapiLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('SwapiLoaderHttpClient');

export const StapiLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('StapiLoaderHttpClient');

export const StapiAlertLoaderHttpClient =
  new InjectionToken<ForkableHttpClient>('StapiAlertLoaderHttpClient');
