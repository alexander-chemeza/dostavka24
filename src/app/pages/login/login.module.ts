import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../shared/shared.module";
import {RestapiService} from "../../restapi.service";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [RestapiService]
})
export class LoginModule { }
