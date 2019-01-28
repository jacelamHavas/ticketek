import { Component, OnInit } from '@angular/core';
import { HttpProxyService } from './http-proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token: string;
  eventList: any;
  selectedVenue: any;
  bannerImage: any;
  selectedProduct: any;
  content: object = {
    title: 'Now Open at Melbourne Museum',
    description: '<p>DESCRIPTION</p><p>DESCRIPTION</p>',
    step: [
      {
        stepNo: 1,
        title: 'Premium VIP Tickets',
        subtitle: 'Entry at any time',
        content: 'single entry'
      },
      {
        stepNo: 2,
        title: 'Tickets for today',
        subtitle: 'Entry at any time'
      },
      {
        stepNo: 3,
        title: 'Next 7 Days Tickets',
        subtitle: 'Save 10%'
      }
    ]
  };

  constructor(private httpProxy: HttpProxyService) {
    this.httpProxy.getToken().subscribe(
      (data: string) => {
        this.token = data;
        this.httpProxy.search('Tennis', this.token).subscribe(
          (data2) => { console.log(data2); }
        );
      }
    );
  }

  ngOnInit() {

  }

}

