import { Component, OnInit } from '@angular/core';
import { AuthStudentsService } from './../auth-students.service';
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
    private authStudentsService: AuthStudentsService) {

  }

  ngOnInit(): void {
  }

  addStudents() {
    this.authStudentsService
      .signup(this.name , this.phone, this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/auth-student/login'])
        } else {
          console.log(response['error'])
        }
      })
  }


}

