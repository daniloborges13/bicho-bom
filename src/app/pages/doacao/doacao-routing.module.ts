import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoacaoPage } from './doacao.page';

const routes: Routes = [
  {
    path: '',
    component: DoacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoacaoPageRoutingModule {}
