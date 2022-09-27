import { Component, Inject, OnInit } from "@angular/core";
import { IdentityUserService } from "../../../backend/resources/identity-user/identity-users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { IdentityUser, CreateIdentityUserRequest } from "../../../models/identity-user-model";
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";

@Component({
  selector: 'app-create-edit-identity-users-v1',
  templateUrl: './create-edit-identity-users-v1.component.html',
  styleUrls: ['./create-edit-identity-users-v1.component.scss']
})
export class CreateEditIdentityUsersV1Component implements OnInit {

  user!: CreateIdentityUserRequest;
  userId: any;
  mode: string;
  constructor(private router: Router, private userService: IdentityUserService, private activatedRoute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
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
        if (res) {
          this.user.email = res.email,
            this.user.userName = res.userName,
            this.user.phoneNumber = res.phoneNumber
        }
      });

    } else {
      this.mode = 'create';

    }

  }

  saveUser() {

    if (this.mode === 'create') {
      this.userService.create(this.user).subscribe(res => {

        this.toastr.success("User successfully saved ")
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
