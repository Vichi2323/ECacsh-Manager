import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvironmentService2 } from '../../../backend/recources/environment2/environment-service2';
import { NavigationServiceV2 } from '../../../backend/recources/navigation2.service';
import { Environment2 } from '../../../models2/environment-model2';
@Component({
  selector: 'app-menage-environments-v2',
  templateUrl: './menage-environments-v2.component.html',
  styleUrls: ['./menage-environments-v2.component.scss']
})
export class MenageEnvironmentsV2Component implements OnInit {
  environment!: Environment2;
  environmentId!: string
  constructor(private environmentService: EnvironmentService2, private activatedRoute: ActivatedRoute, private navigate: NavigationServiceV2,
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

