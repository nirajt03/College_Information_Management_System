import { Component, OnInit } from '@angular/core';
import { FacultyListServiceService } from '../faculty-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-faculty',
  templateUrl: './list-faculty.component.html',
  styleUrls: ['./list-faculty.component.css']
})
export class ListFacultyComponent implements OnInit {

  facultylist = []

  constructor( private router: Router,
    private FacultyListServiceService: FacultyListServiceService) { }

  ngOnInit(): void {
    this.loadFacultyList()
  }

  loadFacultyList() {
    this.FacultyListServiceService
      .getFacultyList()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.facultylist = response['data']
          console.log(this.facultylist)
        } else {
          console.log(response['error'])
        }
      })
  }

  updateStatus(faculty) {
    this.FacultyListServiceService
      .updateState(faculty)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadFacultyList()
        } else {
          console.log(response['error'])
        }
      })
  }

}
