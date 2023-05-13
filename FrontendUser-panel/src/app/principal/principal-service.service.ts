import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalServiceService {

  url = 'http://localhost:4000/principal'

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


//  getFacultyDetails(){
//   const httpOptions = {
//     headers: new HttpHeaders({
//       token: sessionStorage['token']
//     })
//   };
  
//   return this.httpClient.get(`http://localhost:4000/details/faculty-details`, httpOptions)
// }

getFacultyDetails() {
  // add the token in the request header
  const httpOptions = {
   headers: new HttpHeaders({
     token: sessionStorage['token']
   })
 };
 
 return this.httpClient.get('http://localhost:4000/details/faculty-details', httpOptions)
}


 


}
