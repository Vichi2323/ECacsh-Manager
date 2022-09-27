import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Version1ModuleRoutingModule } from './version1-module-routing.module';

import { ApiService } from '../backend/resources/api-service';
import { ApplicationUserService } from '../backend/resources/application-user/application-user.service';
import { IdentityUserMapper } from '../backend/resources/identity-user/identity-user-mapper.service';
import { ApplicationUserMapper } from '../backend/resources/application-user/application-user-mapper.service';
import { IdentityUserService } from '../backend/resources/identity-user/identity-users.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Version1ModuleRoutingModule
  ],
  providers: [
    ApiService,
    IdentityUserService,
    ApplicationUserService,
    IdentityUserMapper,
    ApplicationUserMapper,

  ]
})
export class Version1ModuleModule { }