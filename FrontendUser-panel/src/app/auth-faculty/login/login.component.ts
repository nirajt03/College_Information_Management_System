import { Component, OnInit } from '@angular/core';
import { AuthfacultysService} from './../auth-facultys.service'
import { Router } from '@angular/router';

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
    private authFacultysService: AuthfacultysService) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.email.length == 0) {
      alert('please enter email')
    } else if (this.password.length == 0) {
      alert('please enter password')
    } else {
      this.authFacultysService
        .login(this.email, this.password)
        .subscribe(response => {
          if (response['status'] == 'success') {
            const data = response['data']
            console.log(data)

            // cache the user info
            sessionStorage['token'] = data['token']
            sessionStorage['name'] = data['name']
            sessionStorage['phone'] = data['phone']

            alert(`Welcome ${data['name']} to My CIMS`)

            // goto the dashboard
            this.router.navigate(['/facultyHome'])

          } else {
            alert(response['error'])
          }
        })
    }
  }


}

