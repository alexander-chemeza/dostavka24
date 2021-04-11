import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ContragentsComponent} from './contragents.component';
import {AgGridModule} from 'ag-grid-angular';



@NgModule({
  declarations: [
    ContragentsComponent
  ],
  exports: [
    ContragentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([])
  ]
})
export class ContragentsModule { }
