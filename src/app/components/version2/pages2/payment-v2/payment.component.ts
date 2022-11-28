import { Component, OnInit } from '@angular/core';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private navigate: NavigationServiceV2) { }

  ngOnInit(): void {
  }

  back() {
    this.navigate.back()
  }

}
