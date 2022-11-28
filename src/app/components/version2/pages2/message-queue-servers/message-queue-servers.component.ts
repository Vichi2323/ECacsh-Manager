import { Component, OnInit } from '@angular/core';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';

@Component({
  selector: 'app-message-queue-servers',
  templateUrl: './message-queue-servers.component.html',
  styleUrls: ['./message-queue-servers.component.scss']
})
export class MessageQueueServersComponent implements OnInit {

  constructor(private navigation: NavigationServiceV2) { }

  ngOnInit(): void {
  }


  back() {
    this.navigation.back()
  }
}
