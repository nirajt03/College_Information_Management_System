import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // placedStudentCount = []
  allStudentCount = []
  allFacultyCount = []
  allHodCount = []
  // placedStudent =[]

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllStudents()
    // this.loadPlacedStudents()
    this.loadAllFacultys()
    this.loadAllhods()
    // this.listplacedtudents()
  }

  // loadPlacedStudents() {
  //   this.studentService
  //     .getPlacedStudentcount()
  //     .subscribe(response => {
  //       if (response['status'] == 'success') {
  //         this.placedStudentCount = response['data']
  //         console.log(this.placedStudentCount)
  //       } else {
  //         console.log(response['error'])
  //       }
  //     })
  // }

  loadAllStudents() {
    this.studentService
      .getStudentcount()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.allStudentCount = response['data']
          console.log(this.allStudentCount)
        } else {
          console.log(response['error'])
        }
      })
  }

  loadAllFacultys() {
    this.studentService
      .getFacultyCount()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.allFacultyCount = response['data']
          console.log(this.allFacultyCount)
        } else {
          console.log(response['error'])
        }
      })
  }

  // listplacedtudents() {
  //   this.studentService
  //     .getAllPlacedstudent()
  //     .subscribe(response => {
  //       if (response['status'] == 'success') {
  //         this.placedStudent = response['data']
  //         console.log(this.placedStudent)
  //       } else {
  //         console.log(response['error'])
  //       }
  //     })
  // }


  loadAllhods() {
    this.studentService
      .getHodCount()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.allHodCount = response['data']
          console.log(this.allHodCount)
        } else {
          console.log(response['error'])
        }
      })
  }

}
