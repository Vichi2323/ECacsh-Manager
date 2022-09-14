import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppVersion1Component } from '../app-version1/app-version1.component';
import { ApplicationUsersV1Component } from '../application-users-v1/application-users-v1.component';
import { CreateEditApplicationUsersV1Component } from '../create-edit-application-users-v1/create-edit-application-users-v1.component';
import { CreateEditIdentityUsersV1Component } from '../create-edit-identity-users-v1/create-edit-identity-users-v1.component';
import { DashboardV1Component } from '../dashboard-v1/dashboard-v1.component';
import { EnviormentsV1Component } from '../enviorments-v1/enviorments-v1.component';
import { IdentityUsersV1Component } from '../identity-users-v1/identity-users-v1.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'v1/dashboardV1' },
  {
    path: 'v1', component: AppVersion1Component,
    children: [
      { path: 'dashboardV1', component: DashboardV1Component },
      { path: 'enviormentsV1', component: EnviormentsV1Component },
      { path: 'identity-usersV1', component: IdentityUsersV1Component },
      { path: 'create-editV1', component: CreateEditIdentityUsersV1Component },
      { path: 'create-editV1/:id', component: CreateEditIdentityUsersV1Component },
      { path: 'application-usersV1', component: ApplicationUsersV1Component },
      { path: 'app-users-create-editV1', component: CreateEditApplicationUsersV1Component }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Version1ModuleRoutingModule { }
