import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class HttpProxyService {
  constructor(private http: HttpClient) {}

  getToken() {
    return this.http.get(environment.apiUrl + '/webtoken/collect?token=3b0916a6e90e8');
  }

  proxy(body, token: string) {
    // body.append('webtoken', token)
    return this.http.post(environment.apiUrl + '/proxy?webtoken=' + token, body);
  }

  search(search, token) {
    const body = {
      'path': '/products',
      'method': 'GET',
      'payload': {
        'keywords': search
      }
    };
    return this.proxy(body, token);
  }
}
