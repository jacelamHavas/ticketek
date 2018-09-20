import { Component, OnInit } from '@angular/core';
// this file calls the events.js JSON object from the root when built 

// THIS IS FOR PROD
// declare const eventCalendarList: any;

// THIS IS FOR DEV
const eventCalendarList = [
  {
    'venue': 'MCA',
    'venueString': 'Margaret Court Arena',
    'venueDescription': 'Margaret Court Arena Description',
    'dateString': 'Jan something',
    'btnClass': 'lime',
    'products': [
      {
        'title': 'Multiday Session',
        'product': 'Single Day Session',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'blue',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
      {
        'title': 'Multiday Night',
        'product': 'SDS',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'dark-blue',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
    ]
  },
  {
    'venue': 'GP',
    'venueString': 'Ground Pass',
    'venueDescription': 'Content',
    'dateString': 'Jan something',
    'btnClass': 'blue',
    'products': [
      {
        'title': '7pm',
        'product': 'SDS',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'lime',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
      {
        'title': '7pm',
        'product': 'SDS',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'lime',
        'btnLink': 'http://google.com',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
    ]
  },
  {
    'venue': 'MCA',
    'venueString': 'Ground',
    'venueDescription': 'Margaret Court Arena Description',
    'dateString': 'Jan something',
    'btnClass': 'orange',
    'products': [
      {
        'title': '7pm',
        'product': 'SDS',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'lime',
        'btnLink': 'http://google.com',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
      {
        'title': '7pm',
        'product': 'SDS',
        'dateString': '12 - 12 Jan',
        'btnTitle': 'Link Title Dynamic',
        'btnClass': 'lime',
        'btnLink': 'http://google.com',
        'times': [
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
          {
            'dateString': 'Mon 15 Jan',
            'description': 'test',
            'btnString': 'Get Tickets',
            'btnClass': 'dark-blue',
            'btnLink': 'google.com'
          },
        ]
      },
    ]
  },
];

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
