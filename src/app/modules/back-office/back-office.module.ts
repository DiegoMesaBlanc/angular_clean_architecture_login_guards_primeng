import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';


@NgModule({
  declarations: [
    BackOfficeLayoutComponent,
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
