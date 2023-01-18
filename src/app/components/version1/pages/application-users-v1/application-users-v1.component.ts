import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApplicationUserService } from '../../backend/resources/application-user/application-user.service';
import { NavigationService } from '../../backend/resources/navigation-service';
import { ApplicationUser } from '../../models/application-users-model';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../../models/errorTracker';


@Component({
  selector: 'app-application-users-v1',
  templateUrl: './application-users-v1.component.html',
  styleUrls: ['./application-users-v1.component.scss']
})
export class ApplicationUsersV1Component implements OnInit {

  displayedColumns = ["userName", "email", "actions"];
  appUsers?: ApplicationUser[]
  currentIndex = -1;
  dataSource!: MatTableDataSource<any>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private router: Router, private userService: ApplicationUserService, private navigate: NavigationService, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource(this.appUsers)
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngOnInit() {

    let resolvedData: ApplicationUser[] | ErrorTracker = this.route.snapshot.data['ResolvedApplicationUsers']
    if (resolvedData instanceof ErrorTracker) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {

      this.appUsers = resolvedData;
      this.dataSource = new MatTableDataSource(this.appUsers);
      this.dataSource.paginator = this.paginator
    }


    //   this.userService.getAll()
    //     .subscribe((res) => {
    //       this.appUsers = res
    //       this.dataSource = new MatTableDataSource(this.appUsers);
    //       this.dataSource.paginator = this.paginator

    //     })

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
