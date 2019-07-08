import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';
import { RegisterComponent } from './register';
import { AdminComponent }  from './admin/admin.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 {path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
