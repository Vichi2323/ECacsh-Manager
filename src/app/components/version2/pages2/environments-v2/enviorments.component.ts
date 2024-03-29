import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentService2 } from '../../backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';
import { Environment2 } from '../../models2/environment-model2';
import { ErrorTracker2 } from '../../models2/errorTracker2';
@Component({
  selector: 'app-enviorments',
  templateUrl: './enviorments.component.html',
  styleUrls: ['./enviorments.component.scss']
})
export class EnviormentsComponent implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["name", "environmentRegion", "actions"];
  environments?: Environment2[]
  currentUser: Environment2
    = {}

  dataSource!: MatTableDataSource<any>;


  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private navigation: NavigationServiceV2, private router: Router, private userService: EnvironmentService2, private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource(this.environments)
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngOnInit(): void {
    let resolvedData: Environment2[] | ErrorTracker2 = this.route.snapshot.data['ResolvedEnvironments']
    if (resolvedData instanceof ErrorTracker2) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {
      this.environments = resolvedData;
      this.dataSource = new MatTableDataSource(this.environments);
      this.dataSource.paginator = this.paginator
    }



    // this.userService.getAll()
    //   .subscribe((data) => {
    //     this.environments = data;
    //     this.dataSource = new MatTableDataSource<any>(this.environments);
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

  newEnvironment() {
    var url = 'v2/environments/create'
    this.router.navigateByUrl(url);
  }

  editEnvironment(id: number) {
    var url = 'v2/environments/' + id + '/manage';
    this.router.navigateByUrl(url);
  }



  back() {
    this.navigation.back()
  }


}
