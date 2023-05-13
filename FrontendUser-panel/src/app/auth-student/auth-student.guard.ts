import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthStudentGuard implements CanActivate  {

  user:any
  constructor( private router: Router) {
  }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['token']) {
      // user is already logged in
      // launch the component
      return true
    }

    // force user to login
    this.router.navigate(['/auth-student/login'])

    // user has not logged in yet
    // stop launching the component
    return false
  }
  
}