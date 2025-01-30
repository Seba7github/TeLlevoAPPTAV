import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilotoPageRoutingModule } from './piloto-routing.module';

import { PilotoPage } from './piloto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilotoPageRoutingModule
  ],
  declarations: [PilotoPage]
})
export class PilotoPageModule {}
