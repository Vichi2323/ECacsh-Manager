import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApplicationUserService } from '../../backend/resources/application-user/application-user.service';
import { NavigationService } from '../../backend/resources/navigation-service';
import { ApplicationUser } from '../../models/application-users-model';

@Component({
  selector: 'app-application-users-v1',
  templateUrl: './application-users-v1.component.html',
  styleUrls: ['./application-users-v1.component.scss']
})
export class ApplicationUsersV1Component implements OnInit {

  displayedColumns = ["userName", "email", "actions"];
  appUsers?: ApplicationUser[]
  currentUser: ApplicationUser = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private router: Router, private userService: ApplicationUserService, private navigate: NavigationService) {
    this.dataSource = new MatTableDataSource(this.appUsers)
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
          this.dataSource.paginator = this.paginator
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
    var url = 'v1/application-users/create-user'
    this.router.navigateByUrl(url);
  }

  editAppUser(userId: number) {
    var url = 'v1/application-users/' + userId + '/edit';
    this.router.navigateByUrl(url);
  }

  back() {
    this.navigate.back()
  }





}
