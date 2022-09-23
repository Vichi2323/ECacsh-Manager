import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApplicationUser } from '../models/application-users-model';
import { ApplicationUserService } from '../backend/resources/application-user/application-user.service';
@Component({
  selector: 'app-application-users-v1',
  templateUrl: './application-users-v1.component.html',
  styleUrls: ['./application-users-v1.component.scss']
})
export class ApplicationUsersV1Component implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["userName", "email", "actions"];
  appUsers?: ApplicationUser[]
  currentUser: ApplicationUser = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private router: Router, private userService: ApplicationUserService,
  ) {
    this.dataSource = new MatTableDataSource(this.appUsers)
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngOnInit(): void {
    this.retrieveUsers()

  }


  retrieveUsers(): void {

    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.appUsers = data
          this.dataSource = new MatTableDataSource(this.appUsers);
        },
        error: (e) => console.error(e)
      })

  }







  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newAppUser() {
    var url = 'v1/app-users-create-editV1'
    this.router.navigateByUrl(url);
  }

  editAppUser(userId: number) {
    var url = 'v1/create-editV1/' + userId;
    this.router.navigateByUrl(url);
  }





}
