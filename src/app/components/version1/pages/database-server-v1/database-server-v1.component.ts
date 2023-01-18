import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DatabaseServerService } from '../../backend/resources/database-server/database-server.service';
import { NavigationService } from '../../backend/resources/navigation-service';
import { DatabaseServer } from '../../models/database-server-model';
import { ErrorTracker } from '../../models/errorTracker';

@Component({
  selector: 'app-database-server-v1',
  templateUrl: './database-server-v1.component.html',
  styleUrls: ['./database-server-v1.component.scss']
})
export class DatabaseServerV1Component implements OnInit {

  displayedColumns: any[] = ["name", "connectionString", "maxEnvironments", "numberOfEnvironments", "isDefault"]
  dataSource!: MatTableDataSource<DatabaseServer>
  dbServers?: DatabaseServer[]

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private dbService: DatabaseServerService, private navigate: NavigationService, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource(this.dbServers)
  }

  ngOnInit(): void {

    let resolvedData: DatabaseServer[] | ErrorTracker = this.route.snapshot.data['ResolvedDbServers']
    if (resolvedData instanceof ErrorTracker) {
      console.log(`Dashboard component error: ${resolvedData.friendlyMessage}`);
    }
    else {
      this.dbServers = resolvedData;
      this.dataSource = new MatTableDataSource(this.dbServers);
      this.dataSource.paginator = this.paginator
    }



    // this.dbService.getAll()
    //   .subscribe((data) => {
    //     this.dbServers = data
    //     this.dataSource = new MatTableDataSource<any>(this.dbServers)
    //     this.dataSource.paginator = this.paginator

    //   })
  }



  newDbServer() {
    var url = 'v1/database-server/create'
    this.router.navigateByUrl(url);
  }

  toggleIsDefault(makeDefaultId: any, value: boolean) {
    this.dbService.makeDefault(makeDefaultId)
      .subscribe()


    var previouslyToggledElement = this.findToggledElement(makeDefaultId, this.dataSource.data);
    if (previouslyToggledElement)
      previouslyToggledElement.isDefault = false;




  }

  findToggledElement(newToggledId: any, collection: DatabaseServer[]): DatabaseServer | null {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].isDefault && collection[i].id !== newToggledId) {
        return collection[i];
      }
    }
    return null
  }


  back() {
    this.navigate.back()
  }
}
