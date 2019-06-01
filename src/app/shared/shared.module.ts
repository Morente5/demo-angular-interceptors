import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule.forChild(),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
  ],
})
export class SharedModule { }
