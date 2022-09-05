import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviormentsComponent } from './components/pages/version2/enviorments/enviorments.component';
import { CreateEditIdentityUsersComponent } from './components/pages/version2/create-edit-identity-users/create-edit-identity-users.component';
import { IdentityUsersComponent } from './components/pages/version2/identity-users/identity-users.component';
import { OrdersComponent } from './components/pages/version2/orders/orders.component';
import { PaymentComponent } from './components/pages/version2/payment/payment.component';
import { IdentityUsersV1Component } from './components/pages/version1/identity-users-v1/identity-users-v1.component';
import { AppVersion1Component } from './components/pages/version1/app-version1/app-version1.component';
import { AppVersion2Component } from './components/pages/version2/app-version2/app-version2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'v2/identity-users' },

  // { path: 'sidenav', component: SidenavComponent },
  // { path: 'identity-users', component: IdentityUsersComponent },
  // { path: 'create-edit', component: CreateEditIdentityUsersComponent },
  // { path: 'create-edit/:id', component: CreateEditIdentityUsersComponent },
  // { path: 'enviorments', component: EnviormentsComponent },
  // { path: 'order', component: OrdersComponent },
  // { path: 'payment', component: PaymentComponent },

  // { path: 'identity-users-v1', component: IdentityUsersV1Component, outlet: 'version1' },

  {
    path: 'v1', component: AppVersion1Component,

  },
  {
    path: 'v2', component: AppVersion2Component,

    children: [
      { path: 'identity-users', component: IdentityUsersComponent },
      { path: 'enviorments', component: EnviormentsComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'create-edit', component: CreateEditIdentityUsersComponent },
      { path: 'create-edit/:id', component: CreateEditIdentityUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }