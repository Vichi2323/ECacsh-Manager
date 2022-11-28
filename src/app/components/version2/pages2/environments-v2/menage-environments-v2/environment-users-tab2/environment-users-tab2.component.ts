import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { ApplicationUserService2 } from 'src/app/components/version2/backend/recources/application-user2/application-user2.service';
import { EnvironmentService2 } from 'src/app/components/version2/backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from 'src/app/components/version2/backend/recources/navigation2.service';
import { ApplicationUser2 } from 'src/app/components/version2/models2/application-users-model2';
import { Environment2 } from 'src/app/components/version2/models2/environment-model2';
@Component({
  selector: 'app-environment-users-tab2',
  templateUrl: './environment-users-tab2.component.html',
  styleUrls: ['./environment-users-tab2.component.scss']
})
export class EnvironmentUsersTab2Component implements OnInit {

  dataSource!: MatTableDataSource<ApplicationUser2>;
  appUsers!: ApplicationUser2[]
  searchAppUsersControl = new FormControl<string | ApplicationUser2>('')
  filteredOptions?: Observable<ApplicationUser2[]>

  displayedColumns: any[] = ["userName", "email"]
  appUser!: ApplicationUser2 | null


  @Input() environment!: Environment2;

  constructor(private userService: ApplicationUserService2, private environmentService: EnvironmentService2, private navigate: NavigationServiceV2,
  ) {

  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<ApplicationUser2>(this.environment.users);
    this.userService.getAll().subscribe((res) => {
      this.appUsers = res;

      if (this.environment.users && this.environment.users.length > 0) {
        let applicationUserIds = this.environment.users.map(x => x.id);
        this.appUsers = this.appUsers.filter(user => {
          return !applicationUserIds.includes(user.id);
        })
      }

      this.filteredOptions = this.searchAppUsersControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.userName;
          return name ? this._filter(name as string) : this.appUsers.slice();
        }),
      );
    });
  }

  displayFn(user: any) {
    return user ? user.userName : '';
  }

  private _filter(name: string): ApplicationUser2[] {
    const filterValue = name.toLowerCase();

    return this.appUsers.filter(option => option.userName?.toLowerCase().includes(filterValue) || option.email?.toLowerCase().includes(filterValue));
  }

  onSearchUserSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.appUser = event.option.value;;

  }

  onAddUserClicked() {
    if (this.appUser) {
      this.environmentService.assignUser(this.environment.id, this.appUser.id).subscribe(res => {
        if (res) {

          if (this.appUser) {
            this.environment.users?.push(this.appUser);


            this.appUsers = this.appUsers.filter(u => u.id !== this.appUser?.id)
            this.searchAppUsersControl.setValue(null);

            this.appUser = null;

            this.dataSource = new MatTableDataSource<ApplicationUser2>(this.environment.users);
          }
        }
      });

    }
  }



  back() {
    this.navigate.back()
  }
}
