import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaApiPageRoutingModule } from './vista-api-routing.module';

import { VistaApiPage } from './vista-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaApiPageRoutingModule
  ],
  declarations: [VistaApiPage]
})
export class VistaApiPageModule {}
