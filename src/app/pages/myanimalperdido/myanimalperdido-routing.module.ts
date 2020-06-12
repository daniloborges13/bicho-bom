import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyanimalperdidoPage } from './myanimalperdido.page';

const routes: Routes = [
  {
    path: '',
    component: MyanimalperdidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyanimalperdidoPageRoutingModule {}
