import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUsersCreateEditComponent } from '../create-edit-application-users-v2/app-users-create-edit.component';
import { AppVersion2Component } from '../app-version2/app-version2.component';
import { ApplicationUsersComponent } from '../application-users-v2/application-users.component';
import { CreateEditIdentityUsersComponent } from '../create-edit-identity-users-v2/create-edit-identity-users.component';
import { DashboardV2Component } from '../dashboard-v2/dashboard-v2.component';
import { EnviormentsComponent } from '../enviorments-v2/enviorments.component';
import { IdentityUsersComponent } from '../identity-users-v2/identity-users.component';
import { OrdersComponent } from '../orders-v2/orders.component';
import { PaymentComponent } from '../payment-v2/payment.component';

const routes: Routes = [

  {
    path: 'v2', component: AppVersion2Component,
    children: [
      { path: 'identity-users', component: IdentityUsersComponent },
      { path: 'enviorments', component: EnviormentsComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'create-edit', component: CreateEditIdentityUsersComponent },
      { path: 'create-edit/:id', component: CreateEditIdentityUsersComponent },
      { path: 'app-users-list', component: ApplicationUsersComponent },
      { path: 'app-users-create-edit', component: AppUsersCreateEditComponent },
      { path: 'dashboardV2', component: DashboardV2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version2ModuleRoutingModule { }
