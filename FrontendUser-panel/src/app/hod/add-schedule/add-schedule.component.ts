import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HodServiceService} from '../hod-service.service'

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  schedule = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hodServiceService: HodServiceService
  ) { }

  id = 0
  courseName = ''
  subjectName = ''
  lecture_no = 0
  timing = 0
  allotedTime = 0
  semester = 0

  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if (id) {
      // edit product
      this.hodServiceService
        .getScheduleDetails()
        .subscribe(response => {
          if (response['status'] == 'success') {
            const infoschedule = response['data']
            if (infoschedule.length > 0) {
              this.schedule = this.schedule[0]
              this.id = infoschedule['id']
              this.courseName = infoschedule['courseName']
              this.subjectName = infoschedule['subjectName']
              this.lecture_no = infoschedule['lecture_no']
              this.timing = infoschedule['timing']
              this.allotedTime = infoschedule['allotedTime']
              this.semester = infoschedule['semester']
          
            }
          }
        })
    }
  }

   onUpdate() {

    if (this.schedule) {
      // edit
      this.hodServiceService
        .updateSchedule(this.id, this.courseName, this.subjectName, this.lecture_no, this.timing, this.allotedTime, this.semester)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.router.navigate(['/hodHome/hod/schedule-list'])
          }
        })
    } else {
      // insert
      this.hodServiceService
        .insertSchedule(this.courseName, this.subjectName, this.lecture_no, this.timing, this.allotedTime, this.semester)
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.router.navigate(['/hodHome/hod/schedule-list'])
          }
        })
    }


  }
}
