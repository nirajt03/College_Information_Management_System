import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyListServiceService {

  url = 'http://localhost:4000/hod-list'

  constructor( private httpClient: HttpClient) { }

  getFacultyList() {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get('http://localhost:4000/hod-list/approve-facultys', httpOptions)
 }


 updateState(faculty) {
  // add the token in the request header
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };
  
  const body = {}
  return this.httpClient.put(this.url + `/update-state/${faculty['facultyId']}/${faculty['approve'] == 0 ? 1 : 0}`, body, httpOptions)
}
}
