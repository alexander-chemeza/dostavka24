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

const routes: Routes = [
  {path: 'login', component: LoginComponent, children: [
      {path: 'calculator', component: CalculatorComponent},
      {path: 'book', component: BookComponent, canActivate: [AuthGuard]},
      {path: 'docs', component: DocsComponent, canActivate: [AuthGuard]},
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'instructions', component: InstructionsComponent, canActivate: [AuthGuard]},
      {path: 'journal', component: JournalComponent, canActivate: [AuthGuard]},
      {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'template', component: TemplateComponent, canActivate: [AuthGuard]},
      {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
    ]},
  {path: 'recover', component: RecoverComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
