import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppVersion1Component } from '../app-version1/app-version1.component';

import { DashboardV1Component } from '../pages/dashboard-v1/dashboard-v1.component';
import { EnvironmentsV1Component } from '../pages/environment-v1/environment-v1.component';
import { CreateEnvironmentV1Component } from '../pages/environment-v1/create-environment-v1/create-environment-v1.component';
import { DatabaseServerV1Component } from '../pages/database-server-v1/database-server-v1.component';
import { ApplicationUsersV1Component } from '../pages/application-users-v1/application-users-v1.component';
import { CreateEditApplicationUsersV1Component } from '../pages/application-users-v1/create-edit-application-users-v1/create-edit-application-users-v1.component';
import { CreateEditIdentityUsersV1Component } from '../pages/identity-users-v1/create-edit-identity-users-v1/create-edit-identity-users-v1.component';
import { IdentityUsersV1Component } from '../pages/identity-users-v1/identity-users-v1.component';
import { CreateDatabaseServerV1Component } from '../pages/database-server-v1/create-database-server-v1/create-database-server-v1.component';
import { ManageEnvironmentsV1Component } from '../pages/environment-v1/manage-environments-v1/manage-environments-v1.component';

const routes: Routes = [


  {
    path: 'v1', component: AppVersion1Component,
    children: [
      { path: 'dashboardV1', component: DashboardV1Component },
      { path: 'environmentsV1', component: EnvironmentsV1Component },
      { path: 'identity-usersV1', component: IdentityUsersV1Component },
      { path: 'create-editV1', component: CreateEditIdentityUsersV1Component },
      { path: 'create-editV1/:id', component: CreateEditIdentityUsersV1Component },
      { path: 'application-usersV1', component: ApplicationUsersV1Component },
      { path: 'app-users-create-editV1', component: CreateEditApplicationUsersV1Component },
      { path: 'create-environmentV1', component: CreateEnvironmentV1Component },
      { path: 'database-serverV1', component: DatabaseServerV1Component },
      { path: 'create-dbserverV1', component: CreateDatabaseServerV1Component },
      { path: 'app-environment-user-v1/:id', component: ManageEnvironmentsV1Component },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version1ModuleRoutingModule { }
