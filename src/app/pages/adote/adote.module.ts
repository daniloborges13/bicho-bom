import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdotePageRoutingModule } from './adote-routing.module';

import { AdotePage } from './adote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdotePageRoutingModule,
    PipesModule
  ],
  declarations: [AdotePage]
})
export class AdotePageModule {}
