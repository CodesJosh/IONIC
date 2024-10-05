import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApitestPageRoutingModule } from './apitest-routing.module';

import { ApitestPage } from './apitest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApitestPageRoutingModule
  ],
  declarations: [ApitestPage]
})
export class ApitestPageModule {}
