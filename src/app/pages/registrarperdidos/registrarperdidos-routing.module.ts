import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarperdidosPage } from './registrarperdidos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarperdidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarperdidosPageRoutingModule {}
