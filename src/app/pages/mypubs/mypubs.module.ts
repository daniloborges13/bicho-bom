import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypubsPageRoutingModule } from './mypubs-routing.module';

import { MypubsPage } from './mypubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypubsPageRoutingModule
  ],
  declarations: [MypubsPage]
})
export class MypubsPageModule {}
