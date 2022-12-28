import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IdentityUserService2 } from '../../backend/recources/identity-user2/identity-user2.service';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';
import { IdentityUser2 } from '../../models2/identity-user-model2';



@Component({
  selector: 'app-identity-users',
  templateUrl: './identity-users.component.html',
  styleUrls: ['./identity-users.component.scss']
})
export class IdentityUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["firstName", "lastName", "birthDate", "email", "phone", "gender", "createdAt", "active", "address", "actions"];
  users?: IdentityUser2[]
  currentUser: IdentityUser2 = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private userService: IdentityUserService2, private navigation: NavigationServiceV2,
  ) { this.dataSource = new MatTableDataSource(this.users) }

  ngOnInit(): void {
    this.retrieveUsers()
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data
          this.dataSource = new MatTableDataSource<any>(this.users);
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

  newUser() {
    var url = 'v2/identity-users/create'
    this.router.navigateByUrl(url);
  }

  editUser(userId: number) {
    var url = 'v2/identity-users/' + userId + '/edit'
    this.router.navigateByUrl(url);
  }


  back() {
    this.navigation.back()
  }

}
