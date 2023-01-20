import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServerService2 } from '../../backend/recources/database-server2/database-server2.service';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';
import { DatabaseServer2 } from '../../models2/database-server-model2';
import { ErrorTracker2 } from '../../models2/errorTracker2';

@Component({
  selector: 'app-database-server-v2',
  templateUrl: './database-server-v2.component.html',
  styleUrls: ['./database-server-v2.component.scss']
})
export class DatabaseServerV2Component implements OnInit {

  displayedColumns: any[] = ["name", "connectionString", "maxEnvironments", "numberOfEnvironments", "isDefault"]
  dataSource!: MatTableDataSource<DatabaseServer2>
  dbServers?: DatabaseServer2[]

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private router: Router, private dbService: DatabaseServerService2, private navigate: NavigationServiceV2, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource(this.dbServers)
  }


  ngOnInit(): void {

    let resolvedData: DatabaseServer2[] | ErrorTracker2 = this.route.snapshot.data['ResolvedDbServers']
    if (resolvedData instanceof ErrorTracker2) {
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
    var url = 'v2/database-server/create'
    this.router.navigateByUrl(url);
  }

  toggleIsDefault(makeDefaultId: any, value: boolean) {
    this.dbService.makeDefault(makeDefaultId)
      .subscribe()

    var previouslyToggledElement = this.findToggledElement(makeDefaultId, this.dataSource.data);
    if (previouslyToggledElement)
      previouslyToggledElement.isDefault = false

  }


  findToggledElement(newToggledId: any, collection: DatabaseServer2[]): DatabaseServer2 | null {
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
