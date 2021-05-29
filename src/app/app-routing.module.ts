import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
