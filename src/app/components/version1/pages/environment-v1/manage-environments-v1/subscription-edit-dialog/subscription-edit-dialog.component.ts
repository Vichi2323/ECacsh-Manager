import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from 'src/app/components/version1/backend/resources/subscription/subscribtion.service';
import { AreYouSureComponent } from 'src/app/components/version1/components/common/are-you-sure/are-you-sure.component';
import { Subscription } from 'src/app/components/version1/models/subsciption-model';

@Component({
  selector: 'app-subscription-edit-dialog',
  templateUrl: './subscription-edit-dialog.component.html',
  styleUrls: ['./subscription-edit-dialog.component.scss']
})
export class SubscriptionEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public data: Subscription, public dialogRef: MatDialogRef<SubscriptionEditDialogComponent>, private subscriptionService: SubscriptionService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEdit() {

    const dialogRef = this.dialog.open(AreYouSureComponent, {
      height: '20%',
      width: '30%',
      data: {
        title: "Title",
        message: "Message",
        confirmButton: "Confirm",
        cancelButton: "Cancel"
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subscriptionService.update(this.data.environmentId, this.data).subscribe((res) => {
          this.dialogRef.close();
        })
      }

    });
  }
}








