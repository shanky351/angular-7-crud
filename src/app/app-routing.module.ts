import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {path: '', component: UsersComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'create/:id', component: CreateUserComponent},
  {path: 'print/:id', component: PrintComponent},
  {path: '**', redirectTo: '/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
