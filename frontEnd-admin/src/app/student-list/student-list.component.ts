import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students = []

  constructor(
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents()
  }

  loadStudents() {
    this.studentService
      .getStudents()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.students = response['data']
          console.log(this.students)
        } else {
          console.log(response['error'])
        }
      })
  }

  toggleActiveStatus(student) {
    this.studentService
      .toggleActivateStatus(student)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadStudents()
        } else {
          console.log(response['error'])
        }
      })
  }


}
