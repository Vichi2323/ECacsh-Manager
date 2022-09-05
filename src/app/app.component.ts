import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { AppVersion1Component } from './components/pages/version1/app-version1/app-version1.component';
import { AppVersion2Component } from './components/pages/version2/app-version2/app-version2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeComponentRef: any;

  constructor(private router: Router) {

  }

  onRouterActivated(componentRef: any) {
    this.activeComponentRef = componentRef;
  }

  toggleSidenav() {
    var glupostin = this.router.url.split('/');
    if (glupostin[1] === 'v1') {
      (this.activeComponentRef as AppVersion1Component).toggleSidenav()
    }
    else if (glupostin[1] === 'v2') {
      (this.activeComponentRef as AppVersion2Component).toggleSidenav();
    }
  }
}
