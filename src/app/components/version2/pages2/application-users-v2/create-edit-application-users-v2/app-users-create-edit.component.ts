
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "src/identityUserModel/model";
import { NavigationServiceV2 } from "../../../backend/recources/navigation2.service";
import { IdentityUserService2 } from "../../../backend/recources/identity-user2/identity-user2.service";
@Component({
  selector: 'app-app-users-create-edit',
  templateUrl: './app-users-create-edit.component.html',
  styleUrls: ['./app-users-create-edit.component.scss']
})
export class AppUsersCreateEditComponent implements OnInit {

  user!: IUser;
  userId: any;
  mode: string;
  constructor(private router: Router, private userService: IdentityUserService2, private activatedRoute: ActivatedRoute, private navigate: NavigationServiceV2) {
    this.mode = '';
    this.user = {};
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id'];
      })

    if (this.userId) {

      this.mode = 'edit';
      this.userService.get(this.userId).subscribe(res => {
        this.user = res;
      });

    } else {
      this.mode = 'create';
      this.initUser();
    }

  }

  saveUser() {

    if (this.mode === 'create') {
      this.userService.create(this.user).subscribe(res => {
        window.history.back();
      });

    }
    else if (this.mode === 'edit') {
      this.userService.update(this.userId, this.user).subscribe(res => {
        window.history.back();
      });
    }


  }





  initUser() {
    this.user = { gender: 'male' }
  }


  back() {
    this.navigate.back()
  }

}
