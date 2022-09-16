import { Component, OnInit } from '@angular/core';
import { identityUserService } from '../services/identity-users.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IdentityUser } from '../models/identity-user-model';
@Component({
  selector: 'app-identity-users-v1',
  templateUrl: './identity-users-v1.component.html',
  styleUrls: ['./identity-users-v1.component.scss']
})
export class IdentityUsersV1Component implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["email", "userName", "phoneNumber", "isActive", "joinDate", "actions"];
  users?: IdentityUser[]
  currentUser: IdentityUser = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private userService: identityUserService,
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
        },
        error: (e) => console.error(e)
      })
  }

  onDelete(userId: number) {
    this.userService.delete(userId).subscribe(res => {
      this.users = this.users?.filter(u => {
        return u.id !== userId
      }
      )
      this.dataSource = new MatTableDataSource<any>(this.users);

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
    var url = 'v1/create-editV1'
    this.router.navigateByUrl(url);
  }

  editUser(userId: number) {
    var url = 'v1/create-editV1/' + userId;
    this.router.navigateByUrl(url);
  }




}
