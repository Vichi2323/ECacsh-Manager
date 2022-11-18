import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss']
})
export class AreYouSureComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA,) public data: any, public dialogRef: MatDialogRef<AreYouSureComponent>) { }



  ngOnInit(): void {
  }

  yesHandler(): void {
    this.dialogRef.close(true);
  }

  noHandler(): void {
    this.dialogRef.close(false);
  }


}



