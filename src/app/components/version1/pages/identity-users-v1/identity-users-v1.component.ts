import { Component, OnInit } from '@angular/core';
import { IdentityUserService } from '../../backend/resources/identity-user/identity-users.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IdentityUser } from '../../models/identity-user-model';
import { NavigationService } from '../../backend/resources/navigation-service';

@Component({
  selector: 'app-identity-users-v1',
  templateUrl: './identity-users-v1.component.html',
  styleUrls: ['./identity-users-v1.component.scss']
})
export class IdentityUsersV1Component implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["email", "userName", "phoneNumber", "joinDate", "actions", "isActive",];
  users?: IdentityUser[]
  dataSource!: MatTableDataSource<any>;

  isListLoading = true;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  constructor(private router: Router, private userService: IdentityUserService, private navigation: NavigationService
  ) {
    this.dataSource = new MatTableDataSource(this.users)
  }

  ngOnInit(): void {
    this.retrieveUsers()

  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe((res) => {
        this.users = res;
        this.dataSource = new MatTableDataSource<any>(this.users);
        this.isListLoading = false;
        this.dataSource.paginator = this.paginator

      })
  }


  toggleUserActive(userId: any, value: boolean) {
    if (value === true) {
      this.userService.enableUser(userId).subscribe();
    }
    else if (value === false) {
      this.userService.disableUser(userId).subscribe();
    }
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newUser() {
    var url = 'v1/identity-users/create'
    this.router.navigateByUrl(url);
  }

  editUser(userId: number) {
    var url = 'v1/identity-users/' + userId + '/edit';
    this.router.navigateByUrl(url);
  }


  back() {
    this.navigation.back()
  }

}
