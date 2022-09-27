import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DatabaseServerService } from '../../backend/resources/database-server/database-server.service';
import { DatabaseServer } from '../../models/database-server-model';

@Component({
  selector: 'app-database-server-v1',
  templateUrl: './database-server-v1.component.html',
  styleUrls: ['./database-server-v1.component.scss']
})
export class DatabaseServerV1Component implements OnInit {

  displayedColumns: any[] = ["name", "connectionString", "isDefault", "maxEnvironments", "numberOfEnvironments"]
  dataSource!: MatTableDataSource<any>
  dbServers?: DatabaseServer[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private dbService: DatabaseServerService) {
    this.dataSource = new MatTableDataSource(this.dbServers)
  }

  ngOnInit(): void {
    this.retriveDbServers()
  }

  retriveDbServers(): void {
    this.dbService.getAll()
      .subscribe((data) => {
        this.dbServers = data
        this.dataSource = new MatTableDataSource<any>(this.dbServers)
      })
  }



  newDbServer() {
    var url = 'v1/create-dbserverV1'
    this.router.navigateByUrl(url);
  }
}
