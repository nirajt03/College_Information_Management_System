import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthfacultysService} from './../auth-facultys.service'

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
    private  authfacultysService:   AuthfacultysService) {

  }

  ngOnInit(): void {
  }

  addFacultys() {
    this.authfacultysService
      .signup(this.name, this.phone, this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/auth-faculty/login'])
        } else {
          console.log(response['error'])
        }
      })
  }


}

