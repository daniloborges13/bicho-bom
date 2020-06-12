import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurarperdidosPageRoutingModule } from './procurarperdidos-routing.module';

import { ProcurarperdidosPage } from './procurarperdidos.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurarperdidosPageRoutingModule,
    PipesModule
  ],
  declarations: [ProcurarperdidosPage]
})
export class ProcurarperdidosPageModule {}
