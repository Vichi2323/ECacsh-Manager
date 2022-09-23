import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Version2ModuleRoutingModule } from './version2-module-routing.module';
import { IdentityUserServiceV2 } from 'src/app/services/identity-user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Version2ModuleRoutingModule
  ],
  providers: [
    IdentityUserServiceV2
  ]
})
export class Version2ModuleModule { }
