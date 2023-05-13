import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthPrincipalsService {



  url = 'http://localhost:4000/principal'

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
  signup(name: string,  phone: string, email: string, password: string) {
    const body = {
      name: name,
      phone: phone,
      email: email,
      password: password
    }

    return this.httpClient.post(this.url + '/signup', body)
  }

  

}

