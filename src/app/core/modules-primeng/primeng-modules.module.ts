import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';


const ModulesPrimeng = [
  ButtonModule,
  CalendarModule,
  MenubarModule,
  InputTextModule,
  CardModule,
  ToastModule,
  CheckboxModule,
  DividerModule,
];


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ModulesPrimeng,
  ],
})
export class PrimengModule { }
