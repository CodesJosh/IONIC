import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApitestPage } from './apitest.page';

const routes: Routes = [
  {
    path: '',
    component: ApitestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApitestPageRoutingModule {}
