import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ErrorViewerComponent } from './components/error-viewer/error-viewer.component';
import { UsersChartComponent } from './components/users-chart/users-chart.component';

import { UsersService } from './services/users/users.service';
import { ErrorService } from './services/error/error.service';
import { SearchUserComponent } from './components/search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    ErrorViewerComponent,
    UsersChartComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DirectivesModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    UsersService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
