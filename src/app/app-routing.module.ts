import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

const APP_ROUTES: Routes = [
  { path: 'users/:username', component: UsersComponent },
  { path: 'user/:username', component: UserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
