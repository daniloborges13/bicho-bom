import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyanimalperdidoPageRoutingModule } from './myanimalperdido-routing.module';

import { MyanimalperdidoPage } from './myanimalperdido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyanimalperdidoPageRoutingModule
  ],
  declarations: [MyanimalperdidoPage]
})
export class MyanimalperdidoPageModule {}
