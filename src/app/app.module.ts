import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { JournalComponent } from './pages/journal/journal.component';
import { TemplateComponent } from './pages/template/template.component';
import { BookComponent } from './pages/book/book.component';
import { UsersComponent } from './pages/users/users.component';
import { DocsComponent } from './pages/docs/docs.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderComponent } from './pages/order/order.component';
import {RegistrationModule} from './pages/registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RecoverComponent,
    CalculatorComponent,
    HomeComponent,
    JournalComponent,
    TemplateComponent,
    BookComponent,
    UsersComponent,
    DocsComponent,
    InstructionsComponent,
    ProfileComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
