import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HodServiceService {

  url = 'http://localhost:4000/hod'

  constructor(
    private httpClient: HttpClient) { }

  getAnnouncements() {
      // add the token in the request header
      const httpOptions = {
       headers: new HttpHeaders({
         token: sessionStorage['token']
       })
     };
     
     return this.httpClient.get('http://localhost:4000/details/getNews', httpOptions)
   }
  
  getAnnouncementDetails(id) {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get('http://localhost:4000/details/getNews/' + id, httpOptions)
  }

  updateAnnouncement(id : number, notice: string, description: string) {
     // add the token in the request header
     const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {
      notice: notice,
      description: description,
    }
    return this.httpClient.put('http://localhost:4000/details/updateNews' + '/' + id,body, httpOptions)
    
  }

  insertAnnouncement(notice: string, description: string) {
    // add the token in the request header
    const httpOptions = {
     headers: new HttpHeaders({
       token: sessionStorage['token']
     })
   };

   const body = {
     notice: notice,
     description: description
    }
   
    return this.httpClient.post('http://localhost:4000/details/insertNews', body, httpOptions)
 }

   
 getScheduleDetails() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get('http://localhost:4000/details/get-Schedule', httpOptions)
}

updateSchedule(id: number,courseName: string, subjectName: string, lecture_no: number, timing:number, allotedTime: number, semester: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
  courseName: courseName,
  subjectName: subjectName,
  lecture_no : lecture_no,
  timing: timing,
  alltedTime: allotedTime,
  semester: semester
 }
 return this.httpClient.put('http://localhost:4000/details/updateSchedule' + '/' + id,body, httpOptions)
 
}

insertSchedule(courseName: string, subjectName: string, lecture_no: number, timing: number, allotedTime: number, semester: number) {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };

 const body = {
  courseName: courseName,
  subjectName: subjectName,
  lecture_no : lecture_no,
  timing: timing,
  alltedTime: allotedTime,
  semester: semester
  }
 
  return this.httpClient.post('http://localhost:4000/details/insertSchedule', body, httpOptions)
}


getSchedule() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get('http://localhost:4000/details/get-Schedule', httpOptions)
}

getStudentDetails(){
  const httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token']
    })
  };
  
  return this.httpClient.get(`http://localhost:4000/details/student-details`, httpOptions)
}

  
}
