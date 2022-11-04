import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from 'src/app/components/version1/backend/resources/subscription/subscribtion.service';
import { Subscription } from 'src/app/components/version1/models/subsciption-model';

@Component({
  selector: 'app-subscription-edit-dialog',
  templateUrl: './subscription-edit-dialog.component.html',
  styleUrls: ['./subscription-edit-dialog.component.scss']
})
export class SubscriptionEditDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public data: Subscription, public dialogRef: MatDialogRef<SubscriptionEditDialogComponent>, private subscriptionService: SubscriptionService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEdit() {
    this.subscriptionService.update(this.data.environmentId, this.data).subscribe((res) => {
      this.dialogRef.close();
    })

  }

}
