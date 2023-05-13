import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  url = 'http://localhost:4000/student'

  constructor( private httpClient: HttpClient ) { }


  getStudent() {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get(this.url + `/student`, httpOptions)
 }

  getStudentProfile() {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };
   
   return this.httpClient.get(this.url + `/profile`  , httpOptions)
 }

 getAttendenceDetails() {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/attendence-details`, httpOptions)
  }

  getFacultyDetails(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/faculty-details`, httpOptions)
  }

  getScheduleDetails(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/schedule-details`, httpOptions)
  }

  getNewsDetails(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/news-details`, httpOptions)
  }

  updatePersonalDetails( name : string , gender : string ,hobbies : string , address : string ,phone : string,email: string){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    const body = {
      name: name,
      gender: gender,
      hobbies: hobbies,
      address: address,
      phone: phone,
      email: email
    }
    return this.httpClient.put(this.url + "/update-profile" , body, httpOptions)
  }

  insertSSCDetails(sscCourse: string, sscBoard: string, sscAggregate: number, sscYOP: number) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };

   const body = {
    sscCourse: sscCourse,
    sscBoard: sscBoard,
    sscAggregate: sscAggregate,
    sscYOP: sscYOP
  }
   
   return this.httpClient.post("http://localhost:4000/details/addSSC", body, httpOptions)
 }

 updateSSCDetails(sscCourse: string, sscBoard: string, sscAggregate: number, sscYOP: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
  sscCourse: sscCourse,
  sscBoard: sscBoard,
  sscAggregate: sscAggregate,
  sscYOP: sscYOP

 }
 
 return this.httpClient.put("http://localhost:4000/details/updateSSC", body, httpOptions)
}

getSSCDetails() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get("http://localhost:4000/details/SSC", httpOptions)
}

getHSCDetails() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get("http://localhost:4000/details/HSC", httpOptions)
}

updateHSCDetails(hscCourse: string, hscBoard: string, hscAggregate: number, hscYOP: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
  hscCourse: hscCourse,
  hscBoard: hscBoard,
  hscAggregate: hscAggregate,
  hscYOP: hscYOP
 }
 
 return this.httpClient.put("http://localhost:4000/details/updateHSC", body, httpOptions)
}

insertHSCDetails(hscCourse: string, hscBoard: string, hscAggregate: number, hscYOP: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };


 const body = {
  hscCourse: hscCourse,
  hscBoard: hscBoard,
  hscAggregate: hscAggregate,
  hscYOP: hscYOP
 }
 
 return this.httpClient.post("http://localhost:4000/details/addHSC", body, httpOptions)
}

getDiplomaDetails() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get("http://localhost:4000/details/Diploma", httpOptions)
}

updateDiplomaDetails(Course: string, university: string, Aggregate: number, YOP: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
  Course: Course,
  university: university,
  Aggregate: Aggregate,
  YOP: YOP
 }
 
 return this.httpClient.put("http://localhost:4000/details/updateDiploma", body, httpOptions)
}

insertDiplomaDetails(Course: string, university: string, Aggregate: number, YOP: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };


 const body = {
  Course: Course,
  university: university,
  Aggregate: Aggregate,
  YOP: YOP
 }
 
 return this.httpClient.post("http://localhost:4000/details/addDiploma", body, httpOptions)
}

}


