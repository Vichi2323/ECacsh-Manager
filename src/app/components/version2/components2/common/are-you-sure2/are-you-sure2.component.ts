import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure2',
  templateUrl: './are-you-sure2.component.html',
  styleUrls: ['./are-you-sure2.component.scss']
})
export class AreYouSure2Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public data: any, public dialogRef: MatDialogRef<AreYouSure2Component>) { }



  ngOnInit(): void {
  }

  yesHandler(): void {
    this.dialogRef.close(true);
  }

  noHandler(): void {
    this.dialogRef.close(false);
  }


}
