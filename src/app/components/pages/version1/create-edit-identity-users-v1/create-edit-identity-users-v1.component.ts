import { Component, Inject, OnInit } from "@angular/core";
import { identityUserService } from "../services/identity-users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "src/identityUserModel/model";
import { IdentityUser } from "../models/identity-user-model";
@Component({
  selector: 'app-create-edit-identity-users-v1',
  templateUrl: './create-edit-identity-users-v1.component.html',
  styleUrls: ['./create-edit-identity-users-v1.component.scss']
})
export class CreateEditIdentityUsersV1Component implements OnInit {

  user!: IdentityUser;
  userId: any;
  mode: string;
  constructor(private router: Router, private userService: identityUserService, private activatedRoute: ActivatedRoute) {
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







}
