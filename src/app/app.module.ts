import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

import { UsersService } from './services/users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
