import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedefinirSenhaPageRoutingModule } from './redefinir-senha-routing.module';

import { RedefinirSenhaPage } from './redefinir-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RedefinirSenhaPageRoutingModule
  ],
  declarations: [RedefinirSenhaPage]
})
export class RedefinirSenhaPageModule {}
