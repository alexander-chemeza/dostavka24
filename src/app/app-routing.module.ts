import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RecoverComponent} from "./pages/recover/recover.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {CalculatorComponent} from "./pages/calculator/calculator.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'recover', component: RecoverComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
