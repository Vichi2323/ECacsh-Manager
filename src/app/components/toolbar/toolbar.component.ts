import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() toggleSidenavEvent = new EventEmitter<void>();

  selectedVersion: string;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private router: Router) {
    this.selectedVersion = 'v1/dashboardV1';
  }


  switchVersions(url: EventTarget | null) {
    this.router.navigate([url]);
  }

  handleLogoClicked() {
    this.selectedVersion = 'v1/dashboardV1';
    this.router.navigate(['v1/dashboardV1']);
  }



}

