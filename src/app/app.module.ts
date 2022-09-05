import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/pages/version2/toolbar/toolbar.component';
import { CreateEditIdentityUsersComponent } from './components/pages/version2/create-edit-identity-users/create-edit-identity-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IdentityUsersComponent } from './components/pages/version2/identity-users/identity-users.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { EnviormentsComponent } from './components/pages/version2/enviorments/enviorments.component';
import { OrdersComponent } from './components/pages/version2/orders/orders.component';
import { PaymentComponent } from './components/pages/version2/payment/payment.component';
import { CreateEditIdentityUsersV1Component } from './components/pages/version1/create-edit-identity-users-v1/create-edit-identity-users-v1.component';
import { IdentityUsersV1Component } from './components/pages/version1/identity-users-v1/identity-users-v1.component'
import { SidenavV1Component } from './components/pages/version1/sidenav-v1/sidenav-v1.component';
import { AppVersion1Component } from './components/pages/version1/app-version1/app-version1.component';
import { AppVersion2Component } from './components/pages/version2/app-version2/app-version2.component';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CreateEditIdentityUsersComponent,
    IdentityUsersComponent,
    EnviormentsComponent,
    OrdersComponent,
    PaymentComponent,
    CreateEditIdentityUsersV1Component,
    IdentityUsersV1Component,
    SidenavV1Component,
    AppVersion1Component,
    AppVersion2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
