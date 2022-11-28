import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreYouSureComponent } from 'src/app/components/version1/components/common/are-you-sure/are-you-sure.component';
import { SubscriptionService2 } from 'src/app/components/version2/backend/recources/subscription2/subscription2.service';
import { Subscription2 } from 'src/app/components/version2/models2/subscruptions-model2';

@Component({
  selector: 'app-subscription-edit-dialog2',
  templateUrl: './subscription-edit-dialog2.component.html',
  styleUrls: ['./subscription-edit-dialog2.component.scss']
})
export class SubscriptionEditDialog2Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public data: Subscription2, public dialogRef: MatDialogRef<SubscriptionEditDialog2Component>, private subscriptionService: SubscriptionService2, public dialog: MatDialog) {
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








