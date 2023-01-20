import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { startWith, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DatabaseServerService2 } from '../../../backend/recources/database-server2/database-server2.service';
import { EnvironmentService2 } from '../../../backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from '../../../backend/recources/navigation2.service';
import { DatabaseServer2 } from '../../../models2/database-server-model2';
import { ImportEnvironmentRequest2 } from '../../../models2/import-environmnet-model2';


@Component({
  selector: 'app-import-environment-v2',
  templateUrl: './import-environment-v2.component.html',
  styleUrls: ['./import-environment-v2.component.scss']
})
export class ImportEnvironmentV2Component implements OnInit {


  databaseServers!: DatabaseServer2[]

  importRequest!: ImportEnvironmentRequest2
  dbServer!: DatabaseServer2 | null
  filteredOptions!: Observable<DatabaseServer2[]>
  myControl = new FormControl<string | DatabaseServer2>('')


  constructor(private navigation: NavigationServiceV2, private activatedRoute: ActivatedRoute, private databaseService: DatabaseServerService2, private environmentService: EnvironmentService2) {
    this.importRequest = {}


  }

  ngOnInit(): void {
    this.databaseService.getAll()
      .subscribe(res => {

        if (res) {
          this.databaseServers = res
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => {
              const name = typeof value === 'string' ? value : value?.name;
              return name ? this._filter(name as string) : this.databaseServers.slice();
            })
          )
        }
      })
    this.activatedRoute.params
      .subscribe(params => {
        this.dbServer = params['dbServerId']
      })

  }


  onSearchdbServerSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.importRequest.dbServerId = this.dbServer?.id;
    this.dbServer = event.option?.value;
  }


  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }


  back() {
    this.navigation.back()
  }

  private _filter(name: string): DatabaseServer2[] {
    const filterValue = name.toLowerCase();

    return this.databaseServers.filter(option => option.name?.toLowerCase().includes(filterValue) || option.connectionString?.toLowerCase().includes(filterValue));
  }



  saveEnvironment() {
    this.environmentService.importEnvironmet(this.importRequest)
      .subscribe(res => {

      })
  }

}


