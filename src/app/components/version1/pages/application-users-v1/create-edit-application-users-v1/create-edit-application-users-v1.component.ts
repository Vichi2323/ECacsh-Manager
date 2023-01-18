import { Component, inject, Inject, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable, startWith } from "rxjs";
import { ApplicationUserService } from "../../../backend/resources/application-user/application-user.service";
import { IdentityUserService } from "../../../backend/resources/identity-user/identity-users.service";
import { ApplicationUser, CreateApplicationUserRequest } from "../../../models/application-users-model";
import { IdentityUser } from "../../../models/identity-user-model";
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";
import { NavigationService } from "../../../backend/resources/navigation-service";




@Component({
  selector: 'app-create-edit-application-users-v1',
  templateUrl: './create-edit-application-users-v1.component.html',
  styleUrls: ['./create-edit-application-users-v1.component.scss']
})
export class CreateEditApplicationUsersV1Component implements OnInit {

  identityUsers: IdentityUser[];
  searchIdentityUsersControl = new FormControl<string | IdentityUser>('');
  filteredOptions?: Observable<IdentityUser[]>;
  appUser!: CreateApplicationUserRequest;
  userId: any;
  mode: string;

  constructor(private identityUserservice: IdentityUserService, private userService: ApplicationUserService, private activatedRoute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr, private navigate: NavigationService) {
    this.mode = '';
    this.appUser = {};
    this.identityUsers = [];
  }

  ngOnInit(): void {
    this.identityUserservice.getAll()
      .subscribe(res => {
        if (res) {
          this.identityUsers = res;
          this.filteredOptions = this.searchIdentityUsersControl.valueChanges.pipe(
            startWith(''),
            map(value => {
              const name = typeof value === 'string' ? value : value?.userName;
              return name ? this._filter(name as string) : this.identityUsers.slice();
            }),
          );
        }
      })
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id'];
      })

    if (this.userId) {
      this.mode = 'edit';
      this.userService.get(this.userId)
        .subscribe(res => {
          this.appUser = res;
        });

    } else {
      this.mode = 'create';
    }

  }

  displayFn(user: any) {
    return user ? user.userName : '';
  }

  private _filter(name: string): ApplicationUser[] {
    const filterValue = name.toLowerCase();

    return this.identityUsers.filter(option => option.userName?.toLowerCase().includes(filterValue) || option.email?.toLowerCase().includes(filterValue));
  }

  onSearchUserSelectionChanged(event: MatAutocompleteSelectedEvent) {
    var user = event.option.value;

    this.appUser.identityId = user.id;
    this.appUser.email = user.email;
    this.appUser.phoneNumber = user.phoneNumber;
    this.appUser.userName = user.userName;
  }

  saveUser() {

    if (this.mode === 'create') {
      this.userService.create(this.appUser)
        .subscribe(res => {
          this.toastr.success("User successfully saved ")
          window.history.back();
        }, err => {
          this.toastr.error("Username of email already taken.", "Error");
        });

    }
    else if (this.mode === 'edit') {
      this.userService.update(this.userId, this.appUser)
        .subscribe(res => {
          window.history.back();
        });
    }


  }

  back() {
    this.navigate.back()
  }



}
