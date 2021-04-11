import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AgGridModule} from 'ag-grid-angular';
import {ContactsComponent} from './contacts.component';



@NgModule({
  declarations: [
    ContactsComponent
  ],
  exports: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule.withComponents([])
  ]
})
export class ContactsModule { }
