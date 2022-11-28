import { Component, OnInit } from '@angular/core';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(private navigate: NavigationServiceV2) { }

  ngOnInit(): void {
  }

  back() {
    this.navigate.back()
  }

}
