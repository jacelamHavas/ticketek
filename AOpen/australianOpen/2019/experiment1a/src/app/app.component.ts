import { Component, OnInit } from '@angular/core';
// this file calls the events.js JSON object from the root when built 

// THIS IS FOR PROD
declare const eventCalendarList: any;

// THIS IS FOR DEV
// const eventCalendarList = [
//   {
//     'dayName': 'Mon',
//     'dayString': '13 Jan 2019',
//     'dayNo': 13,
//     'venues': [
//       {
//         'venue': 'RLA',
//         'venueString': 'Rod Laver Arena',
//         'venueDescription': 'The best players on the biggest stage - don\'t miss a minute of the centre court action on Rod Laver Arena, the heart of the tournament.',
//         'events': [
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'dark-blue',
//             'btnLink': 'http://google.com'
//           },
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'orange',
//             'btnLink': 'http://google.com'
//           },
//         ]
//       },
//       {
//         'venue': 'MCA',
//         'venueString': 'Margaret Court Arena',
//         'venueDescription': 'Margaret Court Arena Description',
//         'events': [
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//         ]
//       },
//       {
//         'venue': 'GP',
//         'venueString': 'Ground Pass',
//         'venueDescription': 'Content',
//         'events': [
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//         ]
//       }
//     ]
//   },
//   {
//     'dayName': 'Tue',
//     'dayString': '14 Jan 2019',
//     'dayNo': 14,
//     'venues': [
//       {
//         'venue': 'RLA',
//         'venueString': 'Rod Laver Arena',
//         'venueDescription': 'Rod Laver Arena Description',
//         'events': [
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//           {
//             'title': '7pm',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'dark-blue',
//             'btnLink': 'http://google.com'
//           },
//         ]
//       },
//       {
//         'venue': 'MCA',
//         'venueString': 'Margaret Court Arena',
//         'venueDescription': 'Margaret Court Arena Description',
//         'events': [
//           {
//             'title': 'Day Session - 2am',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'blue',
//             'btnLink': 'http://google.com'
//           },
//           {
//             'title': 'Day Session - 11am',
//             'product': 'SDS',
//             'btnTitle': 'Link Title Dynamic',
//             'btnClass': 'green',
//             'btnLink': 'http://google.com'
//           },
//         ]
//       }
//     ]
//   }
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  eventList: any;
  dateSelection: number;
  venueSelection: string;
  dateSelected: any;
  dateList: any;
  venueList: any;
  venueSelect: any;
  dateVenue: any;
  eventCalendarList: any;

  constructor() {
    this.eventList = eventCalendarList;
    console.log(eventCalendarList);
    this.dateSelected = eventCalendarList[0];
  }

  ngOnInit() {
    console.log(this.dateSelection);
  }

  changingDate(event) {
    this.dateSelected = eventCalendarList.find(x => x.dayString === event.target.value);
    delete this.dateVenue;
    delete this.venueSelect;
    console.log(this.dateSelected);
  }

  changingVenue(event) {
    this.venueSelect = event.target.value;
    if (this.venueSelect === 'null') {
      delete this.venueSelect;
      delete this.dateVenue;
      return;
    }
    this.dateVenue = this.dateSelected.venues.find(x => x.venueString === this.venueSelect);
    console.log(this.dateVenue);
    console.log(this.venueSelect);
  }

}
