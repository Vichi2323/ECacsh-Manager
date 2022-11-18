import { Component, OnInit } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Environment } from '../../models/environment-model';
import { EnvironmentService } from '../../backend/resources/environment/environment.service';
import { NavigationService } from '../../backend/resources/navigation-service';

@Component({
  selector: 'app- environments-v1',
  templateUrl: './environment-v1.component.html',
  styleUrls: ['./environment-v1.component.scss']
})
export class EnvironmentsV1Component implements OnInit, AfterViewInit {

  displayedColumns: any[] = ["name", "environmentRegion", "actions"];
  environments?: Environment[]
  currentUser: Environment = {}

  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private router: Router, private userService: EnvironmentService, private navigation: NavigationService
  ) {
    this.dataSource = new MatTableDataSource(this.environments)
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  ngOnInit(): void {
    this.getEnvironments()

  }
  getEnvironments(): void {

    this.userService.getAll()
      .subscribe((data) => {
        this.environments = data;
        this.dataSource = new MatTableDataSource<any>(this.environments);

      })
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newEnvironment() {
    var url = 'v1/environments/create'
    this.router.navigateByUrl(url);
  }




  editEnvironment(id: string) {
    var url = 'v1/environmentsV1/' + id + '/manage';
    this.router.navigateByUrl(url);
  }


  back() {
    this.navigation.back()
  }

}




