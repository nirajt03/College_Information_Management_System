import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {

  scheduleDetails = []

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
    ) { }

  ngOnInit(): void {
    this.loadscheduleDetails()
  }

  loadscheduleDetails(){
      this.StudentServiceService.getScheduleDetails().subscribe(response => {
      if (response['status'] == 'success') {
        this.scheduleDetails = response['data']
        console.log(this.scheduleDetails)
      } else {
        console.log(response['error'])
      }
    })
  }

}




