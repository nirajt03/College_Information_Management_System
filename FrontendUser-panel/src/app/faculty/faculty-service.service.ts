import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {

  
  url = 'http://localhost:4000/faculty'

  constructor(
    private httpClient: HttpClient) { }

  
  addAttendence(srNo: number, courseName: string, subjectName: string,className : string , studentName : string , date : number ) {
    // add the token in the request header
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };

    const body = {
      srNo : srNo,
      courseName : courseName,
      subjectName : subjectName,
      className : className,
      studentName : studentName, 
      date : date 

    }

    return this.httpClient.put(this.url +"/add-my-attendence", body, httpOptions)
  }

  getNewsDetails(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/news-details`, httpOptions)
  }

  // getScheduleDetails(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       token: sessionStorage['token']
  //     })
  //   };
    
  //   return this.httpClient.get(`http://localhost:4000/details/schedule-details`, httpOptions)
  // }

  getScheduleDetails(){
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    };
    
    return this.httpClient.get(`http://localhost:4000/details/schedule-details`, httpOptions)
  }

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



}
