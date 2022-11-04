import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { DatabaseServerService } from '../../../backend/resources/database-server/database-server.service';
import { EnvironmentService } from '../../../backend/resources/environment/environment.service';
import { DatabaseServer } from '../../../models/database-server-model';
import { CreateEnvironmentRequest, Environment } from '../../../models/environment-model';
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";
import { NavigationService } from '../../../backend/resources/navigation-service';


@Component({
  selector: 'app-create-environment-v1',
  templateUrl: './create-environment-v1.component.html',
  styleUrls: ['./create-environment-v1.component.scss']
})
export class CreateEnvironmentV1Component implements OnInit {

  dbServers: DatabaseServer[]
  searchEnvironmentControl = new FormControl<string | DatabaseServer>('')
  filteredOptions?: Observable<DatabaseServer[]>
  environment!: CreateEnvironmentRequest
  environmentId?: any
  mode?: string

  constructor(private dbService: DatabaseServerService, private environmentService: EnvironmentService, private activatedRoute: ActivatedRoute, private navigation: NavigationService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
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
  private _filter(name: string): Environment[] {
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
