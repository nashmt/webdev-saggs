import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { CookieService } from 'ngx-cookie-service';

// import { AlertComponent } from './_components';
// import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessProductsComponent } from './access-products/access-products.component';
import { BootstrapRequestComponent } from './bootstrap-request/bootstrap-request.component';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { ActionResultComponent } from './action-result/action-result.component';
import { AdminRequestedProductsComponent } from './admin-requested-products/admin-requested-products.component';
import { InMemoryDataService }  from './_services/in-memory-data.service';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { ManagePartnersComponent } from './manage-partners/manage-partners.component';
import { CallbackComponent } from './callback/callback.component';
import { CallbackBufferComponent } from './callback-buffer/callback-buffer.component';

import { ProductsPageComponent } from './products-page/products-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { CreateLeadComponent } from './create-lead/create-lead.component';

// import { AdminLayoutComponent } from './.admin/layouts/admin-layout/admin-layout.component';
import { AdminModule } from './admin/admin.module';

import { ComponentsModule } from './admin/components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // AlertComponent,
    RegisterComponent,
    DashboardComponent,
    // AdminLayoutComponent,
    AccessProductsComponent,
    BootstrapRequestComponent,
    PendingRequestsComponent,
    RequestFormComponent,
    ActionResultComponent,
    AdminRequestedProductsComponent,
    PartnerPageComponent,
    ManagePartnersComponent,
    CallbackComponent,
    CallbackBufferComponent,
    ProductsPageComponent,
    NavigationComponent,
    AdminNavigationComponent,
    CreateLeadComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    AdminModule,
    ComponentsModule
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,

    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
