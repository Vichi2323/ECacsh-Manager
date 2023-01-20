import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityUserService2 } from '../../backend/recources/identity-user2/identity-user2.service';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';
import { ErrorTracker2 } from '../../models2/errorTracker2';
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

  constructor(private router: Router, private userService: IdentityUserService2, private navigation: NavigationServiceV2, private route: ActivatedRoute
  ) { this.dataSource = new MatTableDataSource(this.users) }

  ngOnInit(): void {

    let resolvedData: IdentityUser2[] | ErrorTracker2 = this.route.snapshot.data['ResolvedIdentityUsers']
    if (resolvedData instanceof ErrorTracker2) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {
      this.users = resolvedData;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator
    }




    // this.userService.getAll()
    //   .subscribe((res) => {
    //     this.users = res;
    //     this.dataSource = new MatTableDataSource<any>(this.users);
    //     this.isListLoading = false;
    //     this.dataSource.paginator = this.paginator

    //   })
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
