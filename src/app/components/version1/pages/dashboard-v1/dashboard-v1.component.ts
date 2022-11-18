import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AreYouSureComponent } from '../../components/common/are-you-sure/are-you-sure.component';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.scss']
})
export class DashboardV1Component implements OnInit {


  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate(['v1/' + url]);
  }

  openDialog() {
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
      console.log(`Dialog result: ${result}`);
    });
  }

}



