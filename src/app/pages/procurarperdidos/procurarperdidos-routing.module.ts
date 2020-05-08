import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurarperdidosPage } from './procurarperdidos.page';

const routes: Routes = [
  {
    path: '',
    component: ProcurarperdidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurarperdidosPageRoutingModule {}
