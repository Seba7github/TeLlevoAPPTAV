import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotoPage } from './piloto.page';

const routes: Routes = [
  {
    path: '',
    component: PilotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilotoPageRoutingModule {}
