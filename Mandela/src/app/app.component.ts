import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  eventList: any;
  selectedVenue: any;
  selectedProduct: any;
  bannerImage: any;

  constructor() {
    const events = [
      { title = "string" }
      { title = "string" }
    ]
  }

  ngOnInit() {

  }

}
