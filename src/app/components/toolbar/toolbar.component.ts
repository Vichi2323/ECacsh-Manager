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
  selectedVersion?: string = 'v1';


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav


  constructor(private router: Router) {


  }

  ngOnInit(): void {
    this.selectedVersion = this.router.url && this.router.url.indexOf('v1') !== -1 ? 'v1' : 'v2';
    this.router.navigate([`${this.selectedVersion}/dashboard`]);
  }

  switchVersions(versionId: EventTarget | null) {
    this.router.navigate([`${versionId}/dashboard`]);
  }

  handleLogoClicked() {
    this.selectedVersion = 'v1';
    this.router.navigate(['v1/dashboard']);
  }



}

