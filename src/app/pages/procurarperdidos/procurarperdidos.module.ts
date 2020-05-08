import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurarperdidosPageRoutingModule } from './procurarperdidos-routing.module';

import { ProcurarperdidosPage } from './procurarperdidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurarperdidosPageRoutingModule
  ],
  declarations: [ProcurarperdidosPage]
})
export class ProcurarperdidosPageModule {}
