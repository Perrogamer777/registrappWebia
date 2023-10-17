import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaApiPage } from './vista-api.page';

const routes: Routes = [
  {
    path: '',
    component: VistaApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaApiPageRoutingModule {}
