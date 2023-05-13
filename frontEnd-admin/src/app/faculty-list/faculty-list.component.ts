import { FacultyService } from './../faculty.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  faculties = []

  constructor(
    private router: Router,
    private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.loadfaculties()
  }

  loadfaculties() {
    this.facultyService
      .getFaculties()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.faculties = response['data']
          console.log(this.faculties)
        } else {
          console.log(response['error'])
        }
      })
  }

  toggleActiveStatus(faculty) {
    this.facultyService
      .toggleActivateStatus(faculty)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadfaculties()
        } else {
          console.log(response['error'])
        }
      })
  }


}
