import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-teacher',
  templateUrl: './my-teacher.component.html',
  styleUrls: ['./my-teacher.component.css']
})
export class MyTeacherComponent implements OnInit {

  facultyDetails = []

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
    ) { }

  ngOnInit(): void {
    this.loadFacultyDetails()
  }

  loadFacultyDetails(){
      this.StudentServiceService.getFacultyDetails().subscribe(response => {
      if (response['status'] == 'success') {
        this.facultyDetails = response['data']
        console.log(this.facultyDetails)
      } else {
        console.log(response['error'])
      }
    })
  }

}



