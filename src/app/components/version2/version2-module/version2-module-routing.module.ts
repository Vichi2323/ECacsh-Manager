import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUsersCreateEditComponent } from '../pages2/application-users-v2/create-edit-application-users-v2/app-users-create-edit.component';
import { AppVersion2Component } from '../app-version2/app-version2.component';
import { ApplicationUsersComponent } from '../pages2/application-users-v2/application-users.component';
import { CreateEditIdentityUsersComponent } from '../pages2/identity-users-v2/create-edit-identity-users-v2/create-edit-identity-users.component';
import { DashboardV2Component } from '../pages2/dashboard-v2/dashboard-v2.component';
import { EnviormentsComponent } from '../pages2/environments-v2/enviorments.component';
import { IdentityUsersComponent } from '../pages2/identity-users-v2/identity-users.component';
import { OrdersComponent } from '../pages2/orders-v2/orders.component';
import { PaymentComponent } from '../pages2/payment-v2/payment.component';
import { ApplicationComponent } from '../pages2/application/application.component';
import { DatabaseServerV2Component } from '../pages2/database-server-v2/database-server-v2.component';
import { CreateDatabaseServerV2Component } from '../pages2/database-server-v2/create-database-server-v2/create-database-server-v2.component';
import { MessageQueueServersComponent } from '../pages2/message-queue-servers/message-queue-servers.component';
import { MediaLibraryComponent } from '../pages2/media-library/media-library.component';
import { CreateEditEnvironment2Component } from '../pages2/environments-v2/create-edit-environment2/create-edit-environment2.component';
import { MenageEnvironmentsV2Component } from '../pages2/environments-v2/menage-environments-v2/menage-environments-v2.component';
import { ApplicationUserResolver2 } from '../backend/recources/application-user2/application-user-resolver2.service';
import { IdentityUserResolver } from '../../version1/backend/resources/identity-user/identity-user-resolver.service';
import { EnvironmnetResolver2 } from '../backend/recources/environment2/environment-resolver.service2';
import { ImportEnvironmentV2Component } from '../pages2/environments-v2/import-environment-v2/import-environment-v2.component';
import { DatabaseServerResolver2 } from '../backend/recources/database-server2/database-server-resolver2';

const routes: Routes = [

  {
    path: 'v2', component: AppVersion2Component,
    children: [
      { path: 'dashboard', component: DashboardV2Component },
      { path: 'application-users', component: ApplicationUsersComponent, resolve: { ResolvedApplicationUsers: ApplicationUserResolver2 } },
      { path: 'application-users/create-user', component: AppUsersCreateEditComponent },
      { path: 'application-users/:id/edit', component: AppUsersCreateEditComponent },
      { path: 'environments', component: EnviormentsComponent, resolve: { ResolvedEnvironments: EnvironmnetResolver2 } },
      { path: 'environments/:id/manage', component: MenageEnvironmentsV2Component },
      { path: 'environments/create', component: CreateEditEnvironment2Component },
      { path: 'orders', component: OrdersComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'identity-users', component: IdentityUsersComponent, resolve: { ResolvedIdentityUsers: IdentityUserResolver } },
      { path: 'identity-users/create', component: CreateEditIdentityUsersComponent },
      { path: 'identity-users/:id/edit', component: CreateEditIdentityUsersComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'database-server', component: DatabaseServerV2Component, resolve: { ResolvedDbServers: DatabaseServerResolver2 } },
      { path: "database-server/create", component: CreateDatabaseServerV2Component },
      { path: 'app-message-queue-servers', component: MessageQueueServersComponent },
      { path: 'app-media-library', component: MediaLibraryComponent },
      { path: 'app-import-environment', component: ImportEnvironmentV2Component }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version2ModuleRoutingModule { }
