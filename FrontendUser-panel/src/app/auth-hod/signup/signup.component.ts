import { Component, OnInit } from '@angular/core';
import { AuthHodsService } from './../auth-hods.service';
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
    private authHodsService: AuthHodsService) {

  }

  ngOnInit(): void {
  }

  addHods() {
    this.authHodsService
      .signup(this.name, this.phone, this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/auth-hod/login'])
        } else {
          console.log(response['error'])
        }
      })
  }

}

