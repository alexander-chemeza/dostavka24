import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeliveryComponent} from "./delivery.component";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../../../shared/shared.module";



@NgModule({
  declarations: [DeliveryComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    SharedModule
  ]
})
export class DeliveryModule { }
