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
import { ImportEnvironmentV1Component } from '../pages/environment-v1/import-environment-v1/import-environment-v1.component';
import { ApplicationUserResolver } from '../backend/resources/application-user/application-user-resolver.service';
import { IdentityUserResolver } from '../backend/resources/identity-user/identity-user-resolver.service';
import { EnvironmnetResolver } from '../backend/resources/environment/environment-resolver.service';
import { DatabaseServerResolver } from '../backend/resources/database-server/database-server-resolver.service';
const routes: Routes = [


  {
    path: 'v1', component: AppVersion1Component,
    children: [
      { path: 'dashboard', component: DashboardV1Component },
      { path: 'environments', component: EnvironmentsV1Component, resolve: { ResolvedEnvironments: EnvironmnetResolver } },
      { path: 'environments/create', component: CreateEnvironmentV1Component },
      { path: 'identity-users', component: IdentityUsersV1Component, resolve: { ResolvedIdentityUsers: IdentityUserResolver } },
      { path: 'identity-users/create', component: CreateEditIdentityUsersV1Component },
      { path: 'identity-users/:id/edit', component: CreateEditIdentityUsersV1Component },
      { path: 'application-users', component: ApplicationUsersV1Component, resolve: { ResolvedApplicationUsers: ApplicationUserResolver } },
      { path: 'application-users/create-user', component: CreateEditApplicationUsersV1Component },
      { path: 'application-users/:id/edit', component: CreateEditApplicationUsersV1Component },
      { path: 'database-server', component: DatabaseServerV1Component, resolve: { ResolvedDbServers: DatabaseServerResolver } },
      { path: 'database-server/create', component: CreateDatabaseServerV1Component },
      { path: 'environments/:id/manage', component: ManageEnvironmentsV1Component },
      { path: 'app-import-environment', component: ImportEnvironmentV1Component }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version1ModuleRoutingModule { }
