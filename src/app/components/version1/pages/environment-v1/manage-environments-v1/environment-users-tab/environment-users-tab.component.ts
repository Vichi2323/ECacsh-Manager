import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApplicationUserService } from 'src/app/components/version1/backend/resources/application-user/application-user.service';
import { EnvironmentMockService } from 'src/app/components/version1/backend/resources/environment/environment-mock.service';
import { EnvironmentService } from 'src/app/components/version1/backend/resources/environment/environment.service';
import { NavigationService } from 'src/app/components/version1/backend/resources/navigation-service';
import { ApplicationUser } from 'src/app/components/version1/models/application-users-model';
import { Environment } from 'src/app/components/version1/models/environment-model';
// 
@Component({
  selector: 'app-environment-users-tab',
  templateUrl: './environment-users-tab.component.html',
  styleUrls: ['./environment-users-tab.component.scss']
})
export class EnvironmentUsersTabComponent implements OnInit {

  dataSource!: MatTableDataSource<ApplicationUser>;
  appUsers!: ApplicationUser[]
  searchAppUsersControl = new FormControl<string | ApplicationUser>('')
  filteredOptions?: Observable<ApplicationUser[]>

  displayedColumns: any[] = ["userName", "email"]
  appUser!: ApplicationUser | null


  @Input() environment!: Environment;

  constructor(private userService: ApplicationUserService, private environmentService: EnvironmentService, private navigate: NavigationService,
  ) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ApplicationUser>(this.environment.users);
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

  private _filter(name: string): ApplicationUser[] {
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

            this.dataSource = new MatTableDataSource<ApplicationUser>(this.environment.users);
          }
        }
      });

    }
  }



  back() {
    this.navigate.back()
  }
}
