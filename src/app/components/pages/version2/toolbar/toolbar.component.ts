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

  constructor(private observer: BreakpointObserver, private router: Router) {
    this.selectedVersion = 'v2/identity-users';
  }


  switchVersions(url: EventTarget | null) {
    this.router.navigate([url]);
  }

  redirectTo(url: string) {
    this.router.navigate(['v2/' + url]);
  }


  // ngAfterViewInit() {
  //   this.observer.observe(['{max-width: 800px}']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over'
  //       this.sidenav.close()
  //     } else {
  //       this.sidenav.mode = 'side'
  //       this.sidenav.open()
  //     }
  //   })
}

//   toggleSidenav() {

//   }
// }
