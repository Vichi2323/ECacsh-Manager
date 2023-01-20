import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CreateEditIdentityUsersComponent } from './components/version2/pages2/identity-users-v2/create-edit-identity-users-v2/create-edit-identity-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IdentityUsersComponent } from './components/version2/pages2/identity-users-v2/identity-users.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { EnviormentsComponent } from './components/version2/pages2/environments-v2/enviorments.component';
import { OrdersComponent } from './components/version2/pages2/orders-v2/orders.component';
import { PaymentComponent } from './components/version2/pages2/payment-v2/payment.component';
import { CreateEditIdentityUsersV1Component } from './components/version1/pages/identity-users-v1/create-edit-identity-users-v1/create-edit-identity-users-v1.component';
import { IdentityUsersV1Component } from './components/version1/pages/identity-users-v1/identity-users-v1.component'
import { AppVersion1Component } from './components/version1/app-version1/app-version1.component';
import { AppVersion2Component } from './components/version2/app-version2/app-version2.component';
import { ApplicationUsersComponent } from './components/version2/pages2/application-users-v2/application-users.component';
import { AppUsersCreateEditComponent } from './components/version2/pages2/application-users-v2/create-edit-application-users-v2/app-users-create-edit.component';
import { DashboardV2Component } from './components/version2/pages2/dashboard-v2/dashboard-v2.component';
import { Version2ModuleModule } from './components/version2/version2-module/version2-module.module';
import { Version1ModuleModule } from './components/version1/version1-module/version1-module.module';
import { DashboardV1Component } from './components/version1/pages/dashboard-v1/dashboard-v1.component';
import { EnvironmentsV1Component } from './components/version1/pages/environment-v1/environment-v1.component';
import { CreateEditApplicationUsersV1Component } from './components/version1/pages/application-users-v1/create-edit-application-users-v1/create-edit-application-users-v1.component';
import { Toastr, TOASTR_TOKEN } from './toastr.service';
import { IdentityUserService } from './components/version1/backend/resources/identity-user/identity-users.service';
import { CreateEnvironmentV1Component } from './components/version1/pages/environment-v1/create-environment-v1/create-environment-v1.component';
import { DatabaseServerV1Component } from './components/version1/pages/database-server-v1/database-server-v1.component';
import { ApplicationUsersV1Component } from './components/version1/pages/application-users-v1/application-users-v1.component';
import { CreateDatabaseServerV1Component } from './components/version1/pages/database-server-v1/create-database-server-v1/create-database-server-v1.component';
import { ApplicationComponent } from './components/version2/pages2/application/application.component';
import { DatabaseServerV2Component } from './components/version2/pages2/database-server-v2/database-server-v2.component';
import { CreateDatabaseServerV2Component } from './components/version2/pages2/database-server-v2/create-database-server-v2/create-database-server-v2.component';
import { ManageEnvironmentsV1Component } from './components/version1/pages/environment-v1/manage-environments-v1/manage-environments-v1.component';
import { EnvironmentUsersTabComponent } from './components/version1/pages/environment-v1/manage-environments-v1/environment-users-tab/environment-users-tab.component';
import { EnvironmentSubscriptionsTabComponent } from './components/version1/pages/environment-v1/manage-environments-v1/environment-subscriptions-tab/environment-subscriptions-tab.component';
import { SubscriptionEditDialogComponent } from './components/version1/pages/environment-v1/manage-environments-v1/subscription-edit-dialog/subscription-edit-dialog.component';
import { AreYouSureComponent } from './components/version1/components/common/are-you-sure/are-you-sure.component';
import { EnvironmentGeneralTabComponent } from './components/version1/pages/environment-v1/manage-environments-v1/environment-general-tab/environment-general-tab.component';
import { ImportEnvironmentV1Component } from './components/version1/pages/environment-v1/import-environment-v1/import-environment-v1.component';
import { MessageQueueServersComponent } from './components/version2/pages2/message-queue-servers/message-queue-servers.component';
import { MediaLibraryComponent } from './components/version2/pages2/media-library/media-library.component';
import { MenageEnvironmentsV2Component } from './components/version2/pages2/environments-v2/menage-environments-v2/menage-environments-v2.component';
import { EnvironmentSubscriptionTab2Component } from './components/version2/pages2/environments-v2/menage-environments-v2/environment-subscription-tab2/environment-subscription-tab2.component';
import { EnvironmentGeneralTab2Component } from './components/version2/pages2/environments-v2/menage-environments-v2/environment-general-tab2/environment-general-tab2.component';
import { EnvironmentUsersTab2Component } from './components/version2/pages2/environments-v2/menage-environments-v2/environment-users-tab2/environment-users-tab2.component';
import { SubscriptionEditDialog2Component } from './components/version2/pages2/environments-v2/menage-environments-v2/subscription-edit-dialog2/subscription-edit-dialog2.component';
import { CreateEditEnvironment2Component } from './components/version2/pages2/environments-v2/create-edit-environment2/create-edit-environment2.component';
import { AreYouSure2Component } from './components/version2/components2/common/are-you-sure2/are-you-sure2.component';
import { ImportEnvironmentV2Component } from './components/version2/pages2/environments-v2/import-environment-v2/import-environment-v2.component';



// @ts-ignore
let toastr: Toastr = window['toastr'];


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
    AppVersion1Component,
    AppVersion2Component,
    ApplicationUsersComponent,
    AppUsersCreateEditComponent,
    DashboardV2Component,
    DashboardV1Component,
    EnvironmentsV1Component,
    ApplicationUsersV1Component,
    CreateEditApplicationUsersV1Component,
    CreateEnvironmentV1Component,
    DatabaseServerV1Component,
    CreateDatabaseServerV1Component,
    ApplicationComponent,
    DatabaseServerV2Component,
    CreateDatabaseServerV2Component,
    ManageEnvironmentsV1Component,
    EnvironmentUsersTabComponent,
    EnvironmentSubscriptionsTabComponent,
    SubscriptionEditDialogComponent,
    AreYouSureComponent,
    EnvironmentGeneralTabComponent,
    ImportEnvironmentV1Component,
    MessageQueueServersComponent,
    MediaLibraryComponent,
    MenageEnvironmentsV2Component,
    EnvironmentSubscriptionTab2Component,
    EnvironmentGeneralTab2Component,
    EnvironmentUsersTab2Component,
    SubscriptionEditDialog2Component,
    CreateEditEnvironment2Component,
    AreYouSure2Component,
    ImportEnvironmentV2Component,


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
    Version2ModuleModule,
    Version1ModuleModule,


  ],
  providers: [IdentityUserService,
    { provide: TOASTR_TOKEN, useValue: toastr }],
  bootstrap: [AppComponent]
})
export class AppModule { }


