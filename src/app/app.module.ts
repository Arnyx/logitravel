import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

import { UsersService } from './services/users/users.service';
import { UserService } from './services/user/user.service';
import { ErrorViewerComponent } from './components/error-viewer/error-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    ErrorViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
