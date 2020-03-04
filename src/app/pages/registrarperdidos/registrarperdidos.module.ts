import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { RegistrarperdidosPageRoutingModule } from './registrarperdidos-routing.module';

import { RegistrarperdidosPage } from './registrarperdidos.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarperdidosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarperdidosPage]
})
export class RegistrarperdidosPageModule {}
