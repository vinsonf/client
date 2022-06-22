import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LastnamePipe } from './pipes/lastname.pipe';
import { UppercasedPipe } from './pipes/uppercased.pipe';
import { UserByIdPipe } from './pipes/user-by-id.pipe';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { StyleTitlePipe } from './pipes/style-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    LastnamePipe,
    UppercasedPipe,
    UserByIdPipe,
    CapitalizedPipe,
    StyleTitlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
