import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// HTTP
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ForkableHttpClientModule, ForkableHttpClient, forkHttpClient } from 'ngx-forkable-http-client';
import {
  SwapiHttpClient,
  SwapiLoaderHttpClient,
  PokeapiLoaderHttpClient,
  PokeapiAlertLoaderHttpClient,
} from './http/http-client.injection-token';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AlertInterceptor } from './interceptors/alert.interceptor';
import { SwapiSecurityInterceptor } from './interceptors/swapi-security.interceptor';
import { PokeapiSecurityInterceptor } from './interceptors/pokeapi-security.interceptor';

// Translate
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Services
import { SwapiService } from './services/swapi.service';
import { PokeapiService } from './services/pokeapi.service';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';
import { AlertService } from './services/alert.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutModule } from './layout/layout.module';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ForkableHttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule,
    LayoutModule,
  ],
  declarations: [
    LoaderComponent,
    AlertComponent,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ForkableHttpClientModule,
    TranslateModule,
    LoaderComponent,
    AlertComponent,
    NgbModule,
    LayoutModule,
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private translate: TranslateService,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }

    const browserLang = this.translate.getBrowserLang();
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SwapiService,
        PokeapiService,
        AuthService,
        LoaderService,
        AlertService,
        TranslateService,
        // Define the providers for the non-global interceptors.
        LoaderInterceptor,
        AlertInterceptor,
        SwapiSecurityInterceptor,
        PokeapiSecurityInterceptor,
        // SWAPI Http Clients
        {
          provide: SwapiHttpClient,
          useFactory: forkHttpClient,
          deps: [ForkableHttpClient, SwapiSecurityInterceptor],
        },
        {
          provide: SwapiLoaderHttpClient,
          useFactory: forkHttpClient,
          deps: [SwapiHttpClient, LoaderInterceptor],
        },
        // PokeAPI Http Clients
        {
          provide: PokeapiLoaderHttpClient,
          useFactory: forkHttpClient,
          deps: [ForkableHttpClient, PokeapiSecurityInterceptor, LoaderInterceptor],
        },
        {
          provide: PokeapiAlertLoaderHttpClient,
          useFactory: forkHttpClient,
          deps: [PokeapiLoaderHttpClient, AlertInterceptor],
        },
      ],
    };
  }
}
