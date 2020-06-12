import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypubsPage } from './mypubs.page';

const routes: Routes = [
  {
    path: '',
    component: MypubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypubsPageRoutingModule {}
