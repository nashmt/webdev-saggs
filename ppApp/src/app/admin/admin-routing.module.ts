import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from '../dashboard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [

  { path: '', component: AdminLayoutComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'table-list',     component: TableListComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'notifications',  component: NotificationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
