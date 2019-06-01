import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// HTTP
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AlertInterceptor } from './interceptors/alert.interceptor';

// Translate
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Services
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
        LoaderService,
        AlertService,
        TranslateService,
        LoaderInterceptor,
        AlertInterceptor,
      ],
    };
  }
}
