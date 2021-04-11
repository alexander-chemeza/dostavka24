import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {BookComponent} from './book.component';
import {AdressModule} from './adress/adress.module';
import {ContactsModule} from './contacts/contacts.module';
import {ContragentsModule} from './contragents/contragents.module';

@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdressModule,
    ContactsModule,
    ContragentsModule
  ]
})
export class BookModule { }
