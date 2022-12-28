import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApplicationUserService2 } from '../../backend/recources/application-user2/application-user2.service';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';
import { ApplicationUser2 } from '../../models2/application-users-model2';

@Component({
  selector: 'app-application-users',
  templateUrl: './application-users.component.html',
  styleUrls: ['./application-users.component.scss']
})
export class ApplicationUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["userName", "email", "actions"];
  appUsers?: ApplicationUser2[]
  currentUser: ApplicationUser2 = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private router: Router, private userService: ApplicationUserService2, private navigate: NavigationServiceV2) {
    this.dataSource = new MatTableDataSource(this.appUsers)
  }





  ngOnInit(): void {
    this.retrieveUsers()

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    var url = 'v2/application-users/create-user'
    this.router.navigateByUrl(url);
  }

  editAppUser(userId: number) {
    var url = 'v2/application-users/' + userId + '/edit';
    this.router.navigateByUrl(url);
  }

  back() {
    this.navigate.back()
  }

}
