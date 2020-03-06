import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { DoacaoPageRoutingModule } from './doacao-routing.module';

import { DoacaoPage } from './doacao.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DoacaoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrMaskerModule
  ],
  declarations: [DoacaoPage]
})
export class DoacaoPageModule {}
