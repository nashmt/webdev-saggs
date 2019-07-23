import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from '../dashboard';

const routes: Routes =[

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
  { path: 'dashboard', component: AdminLayoutComponent } //, children: [{ path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]}
  // {
  //   path: 'admin',
  //   redirectTo: 'admin/dashboard',
  //   pathMatch: 'full'
  // }, {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: 'admin',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //   }]
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule
  ],
})
export class AdminRoutingModule { }
