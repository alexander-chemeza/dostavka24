import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RegistrationComponent} from './registration.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class RegistrationModule {
  constructor() {
  }
}
