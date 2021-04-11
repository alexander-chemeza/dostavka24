import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AgGridModule} from 'ag-grid-angular';
import {AdressComponent} from './adress.component';



@NgModule({
  declarations: [
    AdressComponent
  ],
  exports: [
    AdressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([])
  ]
})
export class AdressModule { }
