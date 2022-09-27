import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.scss']
})
export class DashboardV1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate(['v1/' + url]);
  }

}
