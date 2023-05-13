import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.css']
})
export class PrincipalHomeComponent implements OnInit {

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
