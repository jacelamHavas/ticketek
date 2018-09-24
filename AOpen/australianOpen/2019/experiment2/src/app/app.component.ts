import { Component, OnInit } from '@angular/core';
// this file calls the events.js JSON object from the root when built 

// THIS IS FOR PROD
declare const eventCalendarList: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  eventList: any;
  selectedVenue: any;
  selectedProduct: any;

  constructor() {
    this.eventList = eventCalendarList;
    console.log(eventCalendarList);
  }

  ngOnInit() {
  }

}
