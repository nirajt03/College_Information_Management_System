import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit {

  attendenceDetails = []

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
    ) { }

  ngOnInit(): void {
    this.loadAttendenceDetails()
  }

  loadAttendenceDetails(){
      this.StudentServiceService.getAttendenceDetails().subscribe(response => {
      if (response['status'] == 'success') {
        this.attendenceDetails = response['data']
        console.log(this.attendenceDetails)
      } else {
        console.log(response['error'])
      }
    })
  }

}

