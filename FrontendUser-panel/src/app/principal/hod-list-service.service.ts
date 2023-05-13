import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HodListServiceService {

  url = 'http://localhost:4000/principal-list'

  constructor( private httpClient: HttpClient) { }

  getHodList() {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get('http://localhost:4000/principal-list/approve-hods', httpOptions)
 }


 updateState(hod) {
  // add the token in the request header
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };
  
  const body = {}
  return this.httpClient.put(this.url + `/update-state/${hod['hodId']}/${hod['approve'] == 0 ? 1 : 0}`, body, httpOptions)
}
}
