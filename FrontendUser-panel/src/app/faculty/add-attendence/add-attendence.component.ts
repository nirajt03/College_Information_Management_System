import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyServiceService } from '../faculty-service.service';

@Component({
  selector: 'app-add-attendence',
  templateUrl: './add-attendence.component.html',
  styleUrls: ['./add-attendence.component.css']
})
export class AddAttendenceComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private facultyService: FacultyServiceService
  ) { }


  srNo = 0
  courseName = ''
  subjectName = ''
  className = ''
  studentName = '' 
  date = 0 
 

  ngOnInit(): void {

  }

  addAttendence() {
    this.facultyService
      .addAttendence(this.srNo,this.courseName,this.subjectName,this.className,this.studentName,this.date)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/faculty/faculty-details'])
        }
      })
  }


}
