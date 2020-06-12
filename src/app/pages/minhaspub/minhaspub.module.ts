import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaspubPageRoutingModule } from './minhaspub-routing.module';

import { MinhaspubPage } from './minhaspub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaspubPageRoutingModule
  ],
  declarations: [MinhaspubPage]
})
export class MinhaspubPageModule {}
