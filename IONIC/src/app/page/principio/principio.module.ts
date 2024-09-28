import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipioPageRoutingModule } from './principio-routing.module';

import { PrincipioPage } from './principio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipioPageRoutingModule
  ],
  declarations: [PrincipioPage]
})
export class PrincipioPageModule {}
