import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../../../backend/resources/environment/environment.service';
import { NavigationService } from '../../../backend/resources/navigation-service';
import { ImportEnvironmentRequest } from '../../../models/import-environment-model';



@Component({
  selector: 'app-import-environment-v1',
  templateUrl: './import-environment-v1.component.html',
  styleUrls: ['./import-environment-v1.component.scss']
})
export class ImportEnvironmentV1Component implements OnInit {


  environment!: ImportEnvironmentRequest

  constructor(private navigation: NavigationService, private environmentService: EnvironmentService) {
    this.environment = {}


  }

  ngOnInit(): void {

  }




  back() {
    this.navigation.back()
  }
  saveEnvironment() {
    this.environmentService.create(this.environment)
      .subscribe(res => {

      })
  }

}


