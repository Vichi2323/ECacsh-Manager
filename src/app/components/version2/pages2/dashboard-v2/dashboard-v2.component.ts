import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';


@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.scss']
})
export class DashboardV2Component implements OnInit {

  constructor(private navigate: NavigationServiceV2, private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    this.router.navigate(['v2/' + url]);
  }


  back() {
    this.navigate.back()
  }

}


