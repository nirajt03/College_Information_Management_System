import { Component, OnInit } from '@angular/core';
import { AuthPrincipalsService } from './../auth-principals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  name = '' 
  phone = '' 
  email = '' 
  password = '' 
  constructor(private router: Router,
    private authPrincipalsService: AuthPrincipalsService) {

  }

  ngOnInit(): void {
  }

  addPrincipals() {
    this.authPrincipalsService
      .signup(this.name , this.phone, this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/auth-principal/login'])
        } else {
          console.log(response['error'])
        }
      })
  }


}

