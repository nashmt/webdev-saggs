import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { CookieService } from 'ngx-cookie-service';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AccessProductsComponent } from './access-products/access-products.component';
import { BootstrapRequestComponent } from './bootstrap-request/bootstrap-request.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ActionResultComponent } from './action-result/action-result.component';
import { AdminRequestedProductsComponent } from './admin-requested-products/admin-requested-products.component';
import { InMemoryDataService }  from './_services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { ManagePartnersComponent } from './manage-partners/manage-partners.component';
import { CallbackComponent } from './callback/callback.component';
import { CallbackBufferComponent } from './callback-buffer/callback-buffer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    AccessProductsComponent,
    BootstrapRequestComponent,
    PendingRequestsComponent,
    RequestFormComponent,
    ActionResultComponent,
    AdminRequestedProductsComponent,
    PartnerPageComponent,
    ManagePartnersComponent,
    CallbackComponent,
    CallbackBufferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,

    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
