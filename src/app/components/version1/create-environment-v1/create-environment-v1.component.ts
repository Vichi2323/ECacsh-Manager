import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../backend/resources/environment/environment.service';

@Component({
  selector: 'app-create-environment-v1',
  templateUrl: './create-environment-v1.component.html',
  styleUrls: ['./create-environment-v1.component.scss']
})
export class CreateEnvironmentV1Component implements OnInit {

  constructor(private environmentService: EnvironmentService) { }

  ngOnInit(): void {
  }

}
