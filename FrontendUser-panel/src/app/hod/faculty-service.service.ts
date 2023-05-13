import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {

  url='http://localhost:4000/hod'

  constructor(private httpClient:HttpClient) { }

  getFaculty(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/',httpOptions)
  }

  getClassroom(){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/',httpOptions)
  }
  getFacultyById(id:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.get(this.url+'/'+id,httpOptions)
  }
  allocateClass(id:number,id1:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    const body={
      id:id,
      id1:id1
    }
    return this.httpClient.put(this.url+'/',body,httpOptions)
  }
  deleteFaculty(id:number){
    const httpOptions={
      headers:new HttpHeaders({
        token:sessionStorage['token']
      })
    };
    return this.httpClient.delete(this.url+'/'+id,httpOptions)
  }

}
