import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { startWith, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DatabaseServerService } from '../../../backend/resources/database-server/database-server.service';
import { EnvironmentService } from '../../../backend/resources/environment/environment.service';
import { NavigationService } from '../../../backend/resources/navigation-service';
import { DatabaseServer } from '../../../models/database-server-model';
import { Environment } from '../../../models/environment-model';
import { ImportEnvironmentRequest } from '../../../models/import-environment-model';



@Component({
  selector: 'app-import-environment-v1',
  templateUrl: './import-environment-v1.component.html',
  styleUrls: ['./import-environment-v1.component.scss']
})
export class ImportEnvironmentV1Component implements OnInit {


  databaseServers!: DatabaseServer[]

  environment!: ImportEnvironmentRequest
  dbServer!: DatabaseServer | null
  filteredOptions!: Observable<DatabaseServer[]>
  myControl = new FormControl<string | DatabaseServer>('')


  constructor(private navigation: NavigationService, private activatedRoute: ActivatedRoute, private databaseService: DatabaseServerService, private environmentService: EnvironmentService) {
    this.environment = {}


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
    this.dbServer = event.option?.value;
  }


  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }


  back() {
    this.navigation.back()
  }

  private _filter(name: string): DatabaseServer[] {
    const filterValue = name.toLowerCase();

    return this.databaseServers.filter(option => option.name?.toLowerCase().includes(filterValue) || option.connectionString?.toLowerCase().includes(filterValue));
  }

  saveEnvironment() {
    this.environmentService.importEnvironmet(this.environment)
      .subscribe(res => {

      })
  }

}


