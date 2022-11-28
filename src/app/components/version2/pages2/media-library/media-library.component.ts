import { Component, OnInit } from '@angular/core';
import { NavigationServiceV2 } from '../../backend/recources/navigation2.service';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {

  constructor(private navigation: NavigationServiceV2) { }

  ngOnInit(): void {
  }

  back() {
    this.navigation.back()
  }

}
