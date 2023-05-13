import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  url='http://localhost:4000/hod'
  
    constructor(private httpClient:HttpClient) { }
  
    getStudents(){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      };
      return this.httpClient.get(this.url+'/',httpOptions)
    }
    getStudentById(id:number){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      };
      return this.httpClient.get(this.url+'/'+id,httpOptions)
    }
    getClassroom(){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      };
      return this.httpClient.get(this.url+'/',httpOptions)
    }
    allocateClass(id:number){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      };
      const body={
        id:id
      }
      return this.httpClient.put(this.url+'/',body,httpOptions)
    }
  
    deleteStudent(id:number){
      const httpOptions={
        headers:new HttpHeaders({
          token:sessionStorage['token']
        })
      };
      return this.httpClient.delete(this.url+'/'+id,httpOptions)
    }
  getProfile(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/',httpOptions)
  }
}
