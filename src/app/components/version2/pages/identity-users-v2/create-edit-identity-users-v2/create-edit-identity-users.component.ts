
import { Component, Inject, OnInit } from "@angular/core";
import { IdentityUserServiceV2 } from 'src/app/services/identity-user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { IUser } from "src/identityUserModel/model";

@Component({
  selector: 'app-create-edit-identity-users',
  templateUrl: './create-edit-identity-users.component.html',
  styleUrls: ['./create-edit-identity-users.component.scss']
})
export class CreateEditIdentityUsersComponent implements OnInit {

  user!: IUser;
  userId: any;
  mode: string;
  constructor(private router: Router, private userService: IdentityUserServiceV2, private activatedRoute: ActivatedRoute) {
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

}
