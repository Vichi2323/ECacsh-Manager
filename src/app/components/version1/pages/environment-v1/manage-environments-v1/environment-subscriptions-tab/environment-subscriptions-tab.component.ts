import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EnvironmentService } from 'src/app/components/version1/backend/resources/environment/environment.service';
import { Environment } from 'src/app/components/version1/models/environment-model';
import { Subscription } from 'src/app/components/version1/models/subsciption-model';
import { SubscriptionEditDialog2Component } from 'src/app/components/version2/pages2/environments-v2/menage-environments-v2/subscription-edit-dialog2/subscription-edit-dialog2.component';

@Component({
  selector: 'app-environment-subscriptions-tab',
  templateUrl: './environment-subscriptions-tab.component.html',
  styleUrls: ['./environment-subscriptions-tab.component.scss']
})
export class EnvironmentSubscriptionsTabComponent implements OnInit {

  dataSource!: MatTableDataSource<Subscription>
  displayedColumns: any[] = ["startDate", "expiryDate", "cancelDate", "active", "actions"]
  newEnvironmentSubscrption!: Subscription


  @Input() environment!: Environment;
  constructor(private environmentService: EnvironmentService, public dialog: MatDialog) {
    this.newEnvironmentSubscrption = {
    }
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Subscription>(this.environment.subscriptions)
  }

  openDialog(entity: Subscription) {
    const dialogRef = this.dialog.open(SubscriptionEditDialog2Component, {
      autoFocus: false,
      data: entity
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  addSubscription() {

    console.log(this.newEnvironmentSubscrption);
    this.environmentService.addEnvironmentSubscription(this.environment.id, this.newEnvironmentSubscrption).subscribe((response) => {
      if (response) {

      }
    })
  }

}
