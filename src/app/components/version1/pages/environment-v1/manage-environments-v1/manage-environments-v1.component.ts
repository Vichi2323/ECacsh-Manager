import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApplicationUserService } from '../../../backend/resources/application-user/application-user.service';
import { EnvironmentMockService } from '../../../backend/resources/environment/environment-mock.service';
import { EnvironmentService } from '../../../backend/resources/environment/environment.service';
import { NavigationService } from '../../../backend/resources/navigation-service';
import { ApplicationUser } from '../../../models/application-users-model';
import { Environment } from '../../../models/environment-model';






@Component({
  selector: 'app-environment-user-v1',
  templateUrl: './manage-environments-v1.component.html',
  styleUrls: ['./manage-environments-v1.component.scss']




})
export class ManageEnvironmentsV1Component implements OnInit {
  environment!: Environment;
  environmentId!: string
  constructor(private environmentService: EnvironmentService, private activatedRoute: ActivatedRoute, private navigate: NavigationService,
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe
      (params => {
        this.environmentId = params['id'];

        this.environmentService.get(this.environmentId).subscribe((res) => {
          if (res) {
            this.environment = res;
          }
        });

      })
  }

  back() {
    this.navigate.back()
  }
}

