import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersComponent } from './pages/users/users.component';
import { DocsComponent } from './pages/docs/docs.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderComponent } from './pages/order/order.component';
import {RegistrationModule} from './pages/registration/registration.module';
import {BookModule} from './pages/book/book.module';
import {JournalModule} from './pages/journal/journal.module';
import {HomeModule} from './pages/home/home.module';
import {TemplateModule} from './pages/template/template.module';
import {LoginModule} from "./pages/login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RecoverComponent,
    CalculatorComponent,
    UsersComponent,
    DocsComponent,
    InstructionsComponent,
    ProfileComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    BookModule,
    HomeModule,
    JournalModule,
    TemplateModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
