import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {BookComponent} from './book.component';
import {AgGridModule} from 'ag-grid-angular';



@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([])
  ]
})
export class BookModule { }
