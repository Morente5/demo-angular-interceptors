import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TestInterceptorsRoutingModule } from './test-interceptors-routing.module';
import { TestInterceptorsComponent } from './test-interceptors.component';

@NgModule({
  declarations: [TestInterceptorsComponent],
  imports: [
    SharedModule,
    TestInterceptorsRoutingModule,
  ],
})
export class TestInterceptorsModule { }
