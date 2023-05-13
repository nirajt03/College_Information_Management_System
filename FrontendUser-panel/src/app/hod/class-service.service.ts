import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  url = 'http://localhost:4000/hod'

  constructor(
    private httpClient: HttpClient) { }

  getClasses() {
      // add the token in the request header
      const httpOptions = {
       headers: new HttpHeaders({
         token: sessionStorage['token']
       })
     };
     
     return this.httpClient.get('http://localhost:4000/details/getClasses', httpOptions)
   }
  
    createClass(name:string,size:number,facultyId:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    const body={
      name:name,
      size:size,
      facultyId:facultyId
    }
    return this.httpClient.post('http://localhost:4000/details/createClass', httpOptions)
  }

    getFaculties(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get('http://localhost:4000/details/getFaculty', httpOptions)
  }


  deleteClass(id){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get('http://localhost:4000/details/deleteClass', httpOptions)
  }

}

  

