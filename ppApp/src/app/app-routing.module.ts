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
import { AdminRequestedProductsComponent } from './admin-requested-products/admin-requested-products.component';
import { InMemoryDataService } from './_services/in-memory-data.service';
import { CallbackComponent } from './callback/callback.component';
import { CallbackBufferComponent } from './callback-buffer/callback-buffer.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // I commented the below line out to try to retrieve the id_token that Cognito is passing back.
  // Right now, this redirect is erasing the token from the url-blank before the Angular can retrieve it.
  // {path: 'dashboard', redirectTo: '/dashboard/myAccess', pathMatch: 'full'},
  { path: 'callback', component: CallbackComponent},
  { path: 'callback-buffer', component: CallbackBufferComponent },
  { path: 'create-lead', component: CreateLeadComponent },
  { path: 'dashboard', component: DashboardComponent},
  // I commented out the below line for the same reason.
  // {path: 'dashboard/myAccess', component: DashboardComponent },
  { path: 'dashboard/products', component: BootstrapRequestComponent },
  { path: 'dashboard/documentation', component: RequestFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
 /*  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  { path: 'admin', component: AdminLayoutComponent, children: [{
      path: 'admin',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]
    }, */
 { path: 'admin', component: AdminComponent },
  // { path: 'admin/partners', component: AdminComponent },
  // { path: 'admin/requests', component: AdminRequestedProductsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
