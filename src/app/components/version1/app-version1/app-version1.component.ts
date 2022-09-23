import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-version1',
  templateUrl: './app-version1.component.html',
  styleUrls: ['./app-version1.component.scss']
})
export class AppVersion1Component {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, private router: Router) { }

  ngAfterViewInit() {
    this.observer.observe(['{max-width: 800px}']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over'
        this.sidenav.close()
      } else {
        this.sidenav.mode = 'side'
        this.sidenav.open()
      }
    })
  }

  toggleSidenav() {
    this.sidenav.opened = !this.sidenav.opened;
  }

  redirectTo(url: string) {
    this.router.navigate(['v1/' + url]);
  }

}
