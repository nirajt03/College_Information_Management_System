import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {


  url = 'http://localhost:5000/faculty'

  constructor(
    private httpClient: HttpClient) { }

  getFaculties() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)
  }
  toggleActivateStatus(faculty) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {}
    return this.httpClient.put(this.url + `/update-state/${faculty['facultyId']}/${faculty['isActive'] == 0 ? 1 : 0}`, body, httpOptions)
  }

}
