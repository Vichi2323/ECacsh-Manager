import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUsersCreateEditComponent } from '../pages/application-users-v2/create-edit-application-users-v2/app-users-create-edit.component';
import { AppVersion2Component } from '../app-version2/app-version2.component';
import { ApplicationUsersComponent } from '../pages/application-users-v2/application-users.component';
import { CreateEditIdentityUsersComponent } from '../pages/identity-users-v2/create-edit-identity-users-v2/create-edit-identity-users.component';
import { DashboardV2Component } from '../pages/dashboard-v2/dashboard-v2.component';
import { EnviormentsComponent } from '../pages/enviorments-v2/enviorments.component';
import { IdentityUsersComponent } from '../pages/identity-users-v2/identity-users.component';
import { OrdersComponent } from '../pages/orders-v2/orders.component';
import { PaymentComponent } from '../payment-v2/payment.component';
import { ApplicationComponent } from '../pages/application/application.component';
import { DatabaseServerV2Component } from '../pages/database-server-v2/database-server-v2.component';
import { CreateDatabaseServerV2Component } from '../pages/database-server-v2/create-database-server-v2/create-database-server-v2.component';

const routes: Routes = [

  {
    path: 'v2', component: AppVersion2Component,
    children: [
      { path: 'identity-usersV2', component: IdentityUsersComponent },
      { path: 'environmentV2', component: EnviormentsComponent },
      { path: 'paymentV2', component: PaymentComponent },
      { path: 'orderV2', component: OrdersComponent },
      { path: 'create-edit-user-componentV2', component: CreateEditIdentityUsersComponent },
      { path: 'create-editV2/:id', component: CreateEditIdentityUsersComponent },
      { path: 'application-userV2', component: ApplicationUsersComponent },
      { path: 'app-users-create-editV2', component: AppUsersCreateEditComponent },
      { path: 'dashboardV2', component: DashboardV2Component },
      { path: 'application', component: ApplicationComponent },
      { path: 'database-serverV2', component: DatabaseServerV2Component },
      { path: "create-dbserverV2", component: CreateDatabaseServerV2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version2ModuleRoutingModule { }
