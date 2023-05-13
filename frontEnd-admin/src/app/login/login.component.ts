import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = ''
  password = ''

  constructor(
    private router: Router,
    private adminService: AdminService) {}

  ngOnInit(): void {
  }
  onLogin() {
    this.adminService
      .login(this.email, this.password)
      .subscribe(response => {
        if (response['status'] == 'success') {
          const data = response['data']
          console.log(data)

          // cache the user info
          sessionStorage['token'] = data['token']
          sessionStorage['name'] = data['name']
          sessionStorage['phone'] = data['phone']

          // goto the dashboard
          this.router.navigate(['/dashboard'])

        } else {
          alert('invalid email or password')
        }
      }) 
  }
}
