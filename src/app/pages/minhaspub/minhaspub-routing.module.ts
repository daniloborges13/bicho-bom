import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaspubPage } from './minhaspub.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaspubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaspubPageRoutingModule {}
