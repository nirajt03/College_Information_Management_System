import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassroomServiceService {
  url='http://localhost:4000/faculty-classroom'

  constructor(private httpCLient:HttpClient) { }

  getClasses(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpCLient.get(this.url+'/',httpOptions)
  }



}
