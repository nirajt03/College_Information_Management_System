import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('phone')

    this.router.navigate(['/home'])
  }
}
