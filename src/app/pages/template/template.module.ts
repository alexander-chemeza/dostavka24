import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AgGridModule} from 'ag-grid-angular';
import {TemplateComponent} from './template.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { WeightComponent } from './weight/weight.component';
import { OptionsComponent } from './options/options.component';



@NgModule({
  declarations: [
    TemplateComponent,
    DeliveryComponent,
    WeightComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgGridModule
  ]
})
export class TemplateModule { }
