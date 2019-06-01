import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
  ],
})
export class LayoutModule { }
