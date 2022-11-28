import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { DatabaseServer2 } from 'src/app/components/version2/models2/database-server-model2';
import { EnvironmentService2 } from 'src/app/components/version2/backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from 'src/app/components/version2/backend/recources/navigation2.service';
import { DatabaseServerService2 } from 'src/app/components/version2/backend/recources/database-server2/database-server2.service';
import { Environment2 } from 'src/app/components/version2/models2/environment-model2';



@Component({
  selector: 'app-environment-general-tab2',
  templateUrl: './environment-general-tab2.component.html',
  styleUrls: ['./environment-general-tab2.component.scss']
})
export class EnvironmentGeneralTab2Component implements OnInit {
  @Input() environment!: Environment2;

  databaseServers!: DatabaseServer2[]
  myControl = new FormControl<string | DatabaseServer2>('')
  filteredOptions!: Observable<DatabaseServer2[]>
  dbServer!: DatabaseServer2 | null



  constructor(private environmentService: EnvironmentService2, private activatedRoute: ActivatedRoute, private navigate: NavigationServiceV2, private databaseService: DatabaseServerService2) { }

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

  private _filter(name: string): DatabaseServer2[] {
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

