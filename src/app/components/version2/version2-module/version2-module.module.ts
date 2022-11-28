import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Version2ModuleRoutingModule } from './version2-module-routing.module';
import { NavigationServiceV2 } from '../backend/recources/navigation2.service';
import { IdentityUserService2 } from '../backend/recources/identity-user2/identity-user2.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Version2ModuleRoutingModule
  ],
  providers: [
    IdentityUserService2,
    NavigationServiceV2
  ]
})
export class Version2ModuleModule { }
