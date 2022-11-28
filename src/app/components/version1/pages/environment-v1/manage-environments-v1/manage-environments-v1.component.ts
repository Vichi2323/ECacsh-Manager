import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvironmentService } from '../../../backend/resources/environment/environment.service';
import { NavigationService } from '../../../backend/resources/navigation-service';
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

