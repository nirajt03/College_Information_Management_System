import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthHodsService{

  
  url = 'http://localhost:4000/hod'

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }


  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.httpClient.post(this.url + '/signin', body)
  }
  signup(name : string, phone : string,email: string, password: string) {
    const body = {
      name: name,
      phone: phone,
      email: email,
      password: password
    }

    return this.httpClient.post(this.url + '/signup', body)
  }
 
 

}

