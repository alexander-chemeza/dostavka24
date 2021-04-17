import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RecoverComponent} from './pages/recover/recover.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {CalculatorComponent} from './pages/calculator/calculator.component';
import {BookComponent} from './pages/book/book.component';
import {DocsComponent} from './pages/docs/docs.component';
import {HomeComponent} from './pages/home/home.component';
import {InstructionsComponent} from './pages/instructions/instructions.component';
import {JournalComponent} from './pages/journal/journal.component';
import {OrderComponent} from './pages/order/order.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TemplateComponent} from './pages/template/template.component';
import {UsersComponent} from './pages/users/users.component';
import {AuthGuard} from '../auth.guard';
import {DeliveryComponent} from './pages/template/delivery/delivery.component';
import {WeightComponent} from './pages/template/weight/weight.component';
import {OptionsComponent} from './pages/template/options/options.component';

const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  // {path: 'recover', component: RecoverComponent},
  // {path: 'registration', component: RegistrationComponent},
  // {path: 'calculator', component: CalculatorComponent},
  // {path: 'book', component: BookComponent, canActivate: [AuthGuard]},
  // {path: 'docs', component: DocsComponent, canActivate: [AuthGuard]},
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'instructions', component: InstructionsComponent, canActivate: [AuthGuard]},
  // {path: 'journal', component: JournalComponent, canActivate: [AuthGuard]},
  // {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  // {path: 'template', component: TemplateComponent, canActivate: [AuthGuard]},
  // {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  // {path: '', redirectTo: 'login', pathMatch: 'full'}
  {path: 'login', component: LoginComponent},
  {path: 'recover', component: RecoverComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'book', component: BookComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'journal', component: JournalComponent},
  {path: 'order', component: OrderComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'template', component: TemplateComponent, pathMatch: 'full', children: [
      { path: '', component: TemplateComponent },
      {path: 'delivery/', component: DeliveryComponent},
      {path: 'weight/', component: WeightComponent},
      {path: 'options/', component: OptionsComponent}
    ]},
  {path: 'users', component: UsersComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
