import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenavEvent = new EventEmitter<void>();

  selectedVersion?: string = 'v1/dashboard';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav


  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }

  switchVersions(url: EventTarget | null) {
    this.router.navigate([url]);
  }

  handleLogoClicked() {
    this.selectedVersion = 'v1/dashboard';
    this.router.navigate(['v1/dashboard']);
  }



}

