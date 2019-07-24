import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';


import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
  ]
})
export class AdminModule { }
