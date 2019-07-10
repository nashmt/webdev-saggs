import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';
import { RegisterComponent } from './register';
import { AdminComponent }  from './admin/admin.component';
import { BootstrapRequestComponent } from './bootstrap-request/bootstrap-request.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
 {path: 'dashboard', redirectTo: '/dashboard/myAccess', pathMatch: 'full'},
 {path: 'dashboard/myAccess', component: DashboardComponent },
 {path: 'dashboard/products', component: BootstrapRequestComponent },
 {path: 'dashboard/documentation', component: RequestFormComponent },
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
