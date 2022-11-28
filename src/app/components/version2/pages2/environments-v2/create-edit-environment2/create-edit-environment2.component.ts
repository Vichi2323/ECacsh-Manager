import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";
import { DatabaseServer2 } from '../../../models2/database-server-model2';
import { CreateEnvironmentRequest2, Environment2 } from '../../../models2/environment-model2';
import { DatabaseServerService2 } from '../../../backend/recources/database-server2/database-server2.service';
import { EnvironmentService2 } from '../../../backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from '../../../backend/recources/navigation2.service';

@Component({
  selector: 'app-create-edit-environment2',
  templateUrl: './create-edit-environment2.component.html',
  styleUrls: ['./create-edit-environment2.component.scss']
})
export class CreateEditEnvironment2Component implements OnInit {

  dbServers: DatabaseServer2[]
  searchEnvironmentControl = new FormControl<string | DatabaseServer2>('')
  filteredOptions?: Observable<DatabaseServer2[]>
  environment!: CreateEnvironmentRequest2
  environmentId?: any
  mode?: string

  constructor(private dbService: DatabaseServerService2, private environmentService: EnvironmentService2, private activatedRoute: ActivatedRoute, private navigation: NavigationServiceV2
    , @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.mode = ''
    this.environment = {}
    this.dbServers = []
  }

  ngOnInit(): void {
    this.dbService.getAll()
      .subscribe(res => {
        if (res) {
          this.dbServers = res
          this.filteredOptions = this.searchEnvironmentControl.valueChanges.pipe(
            startWith(''),
            map(value => {
              const name = typeof value === 'string' ? value : value?.name
              return name ? this._filter(name as string) : this.dbServers.slice()
            })
          )
        }
      })
    this.activatedRoute.params
      .subscribe(params => {
        this.environmentId = params['id']
      })
    if (this.environmentId) {
      this.mode = 'edit'
      this.environmentService.get(this.environmentId)
        .subscribe(res => {
          this.environment = res

        })
    } else {
      this.mode = 'create'
    }
  }


  displayFn(name: any) {
    return name ? name.name : '';
  }
  private _filter(name: string): Environment2[] {
    const filterValue = name.toLowerCase()

    return this.dbServers.filter(option => option.name?.toLowerCase().includes(filterValue))
  }

  onSearchEnvironmentSelectionChanged(event: MatAutocompleteSelectedEvent) {
    var option = event.option.value;
    this.environment.dbServerId = option.id
  }

  saveEnvironment() {
    if (this.mode === 'create') {
      this.environmentService.create(this.environment)
        .subscribe(res => {
          this.toastr.success("Environment successfully saved ")
          window.history.back()
        }, err => {
          this.toastr.error("Environment name already taken.", "Error")
        })
    }
    else if (this.mode === 'edit') {
      this.environmentService.update(this.environmentId, this.environment)
        .subscribe(res => {
          window.history.back()
        })
    }
  }


  back() {
    this.navigation.back()
  }


}
