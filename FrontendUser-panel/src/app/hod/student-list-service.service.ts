import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListServiceService {

  url = 'http://localhost:4000/hod-list'

  constructor( private httpClient: HttpClient) { }

  getStudentList() {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get('http://localhost:4000/hod-list/approve-students', httpOptions)
 }


 updateState(student) {
  // add the token in the request header
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };
  
  const body = {}
  return this.httpClient.put(this.url + `/update-state/${student['studentId']}/${student['approve'] == 0 ? 1 : 0}`, body, httpOptions)
}
}
