import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Routes } from '@angular/router';


const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-app-version2',
  templateUrl: './app-version2.component.html',
  styleUrls: ['./app-version2.component.scss']
})
export class AppVersion2Component implements OnInit {

  public isScreenSmall!: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

  }

  toggleSidenav() {
    this.sidenav.opened = !this.sidenav.opened;
  }

  redirectTo(url: string) {
    this.router.navigate(['v2/' + url]);
  }
}
