import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServerService } from 'src/app/components/version1/backend/resources/database-server/database-server.service';
import { EnvironmentService } from 'src/app/components/version1/backend/resources/environment/environment.service';
import { NavigationService } from 'src/app/components/version1/backend/resources/navigation-service';
import { Environment } from 'src/app/components/version1/models/environment-model';
import { DatabaseServer } from 'src/app/components/version1/models/database-server-model';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';



@Component({
  selector: 'app-environment-general-tab',
  templateUrl: './environment-general-tab.component.html',
  styleUrls: ['./environment-general-tab.component.scss']
})
export class EnvironmentGeneralTabComponent implements OnInit {
  @Input() environment!: Environment;

  databaseServers!: DatabaseServer[]
  myControl = new FormControl<string | DatabaseServer>('')
  filteredOptions!: Observable<DatabaseServer[]>
  dbServer!: DatabaseServer | null



  constructor(private environmentService: EnvironmentService, private activatedRoute: ActivatedRoute, private navigate: NavigationService, private databaseService: DatabaseServerService) { }

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
    this.navigate.back()
  }

  private _filter(name: string): DatabaseServer[] {
    const filterValue = name.toLowerCase();

    return this.databaseServers.filter(option => option.name?.toLowerCase().includes(filterValue) || option.connectionString?.toLowerCase().includes(filterValue));
  }

  assignDatabaseServer() {

    this.environmentService.assignDbServerToEnvironment(this.environment.id, this.dbServer?.id)
      .subscribe(() => {
        this.environment.dbServer = this.dbServer
      })

  }

}

