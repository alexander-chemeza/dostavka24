import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AgGridModule} from 'ag-grid-angular';
import {TemplateComponent} from './template.component';
import { WeightComponent } from './weight/weight.component';
import { OptionsComponent } from './options/options.component';
import {DeliveryModule} from "./delivery/delivery.module";



@NgModule({
  declarations: [
    TemplateComponent,
    WeightComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule,
    DeliveryModule
  ]
})
export class TemplateModule { }
