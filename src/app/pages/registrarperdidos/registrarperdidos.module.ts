import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarperdidosPageRoutingModule } from './registrarperdidos-routing.module';

import { RegistrarperdidosPage } from './registrarperdidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarperdidosPageRoutingModule
  ],
  declarations: [RegistrarperdidosPage]
})
export class RegistrarperdidosPageModule {}
