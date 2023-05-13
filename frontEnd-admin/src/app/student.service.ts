import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:5000/student'

  constructor(
    private httpClient: HttpClient) { }

  getStudents() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    return this.httpClient.get(this.url, httpOptions)
  }
  toggleActivateStatus(student) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {}
    return this.httpClient.put(this.url + `/update-state/${student['studentId']}/${student['isActice'] == 0 ? 1 : 0}`, body, httpOptions)
  }

  getStudentcount() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url + "/all-student-count", httpOptions)
  }

  getFacultyCount() {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url + "/all-faculty-count", httpOptions)
  }

  // getPlacedStudentcount() {
  //   // add the token in the request header
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   };
    
  //   return this.httpClient.get(this.url + "/placed-student-count", httpOptions)
  // }

  getHodCount() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(this.url + "/all-hod-count", httpOptions)
  }

  // getTpoCount() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   };
    
  //   return this.httpClient.get(this.url + "/all-tpo-count", httpOptions)
  // }

  // getFacultyCount() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   };
    
  //   return this.httpClient.get(this.url + "/all-faculty-count", httpOptions)
  // }

  // getAllPlacedstudent(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   };
    
  //   return this.httpClient.get(this.url + "/placed", httpOptions)
  // }
}
