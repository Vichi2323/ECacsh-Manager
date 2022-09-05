import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from 'src/identityUserModel/model';


@Component({
  selector: 'app-identity-users',
  templateUrl: './identity-users.component.html',
  styleUrls: ['./identity-users.component.scss']
})
export class IdentityUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["firstName", "lastName", "birthDate", "email", "phone", "gender", "createdAt", "active", "address", "actions"];
  users?: IUser[]
  currentUser: IUser = {}
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;
  IUser: any = []

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private apiService: ApiService, private router: Router, private userService: ApiService,
  ) { }

  ngOnInit(): void {
    this.retrieveUsers()
  }

  retrieveUsers(): void {
    this.apiService.getAll()
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
    var url = 'v2/create-edit'
    this.router.navigateByUrl(url);
  }

  editUser(userId: number) {
    var url = 'v2/create-edit/' + userId;
    this.router.navigateByUrl(url);
  }


  toastrMessage() {

  }

}
