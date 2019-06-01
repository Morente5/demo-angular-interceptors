import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestInterceptorsComponent } from './test-interceptors.component';

const routes: Routes = [
  {
    path: '',
    component: TestInterceptorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestInterceptorsRoutingModule { }
