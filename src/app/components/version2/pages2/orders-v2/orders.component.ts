import { Component, OnInit } from '@angular/core';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private navigation: NavigationServiceV2) { }

  ngOnInit(): void {
  }



  back() {
    this.navigation.back()
  }

}
