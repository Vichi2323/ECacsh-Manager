import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EnvironmentService } from 'src/app/components/version1/backend/resources/environment/environment.service';
import { Environment } from 'src/app/components/version1/models/environment-model';
import { EnvironmentService2 } from 'src/app/components/version2/backend/recources/environment2/environment-service2';
import { Environment2 } from 'src/app/components/version2/models2/environment-model2';
import { Subscription2 } from 'src/app/components/version2/models2/subscruptions-model2';
import { SubscriptionEditDialog2Component } from '../subscription-edit-dialog2/subscription-edit-dialog2.component';

@Component({
  selector: 'app-environment-subscription-tab2',
  templateUrl: './environment-subscription-tab2.component.html',
  styleUrls: ['./environment-subscription-tab2.component.scss']
})
export class EnvironmentSubscriptionTab2Component implements OnInit {

  dataSource!: MatTableDataSource<Subscription2>
  displayedColumns: any[] = ["startDate", "expiryDate", "cancelDate", "active", "actions"]
  newEnvironmentSubscrption!: Subscription2


  @Input() environment!: Environment2;
  constructor(private environmentService: EnvironmentService2, public dialog: MatDialog) {
    this.newEnvironmentSubscrption = {
    }
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Subscription2>(this.environment.subscriptions)
  }

  openDialog(entity: Subscription2) {
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
