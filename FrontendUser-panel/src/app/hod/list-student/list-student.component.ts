import { Component, OnInit } from '@angular/core';
import { StudentListServiceService } from '../student-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentlist = []

  constructor( private router: Router,
    private StudentListServiceService: StudentListServiceService) { }

  ngOnInit(): void {
    this.loadStudentList()
  }

  loadStudentList() {
    this.StudentListServiceService
      .getStudentList()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.studentlist = response['data']
          console.log(this.studentlist)
        } else {
          console.log(response['error'])
        }
      })
  }

  updateStatus(student) {
    this.StudentListServiceService
      .updateState(student)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadStudentList()
        } else {
          console.log(response['error'])
        }
      })
  }
}

