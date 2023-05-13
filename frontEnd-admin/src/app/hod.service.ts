import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HodService {

  url = 'http://localhost:5000/HOD'

  constructor(
    private httpClient: HttpClient) { }

  getHods() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)
  }
  toggleActivateStatus(hod) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {}
    return this.httpClient.put(this.url + `/update-state/${hod['hodId']}/${hod['isActive'] == 0 ? 1 : 0}`, body, httpOptions)
  }

}
