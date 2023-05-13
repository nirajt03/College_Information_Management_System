import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HodServiceService} from '../hod-service.service'

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  scheduleDetails = []

  constructor(
    private router: Router,
    private hodServiceService : HodServiceService ) { }

  ngOnInit(): void {
    this.loadSchedule()
  }

  loadSchedule() {
    this.hodServiceService
      .getSchedule()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.scheduleDetails = response['data']
          console.log(this.scheduleDetails)
        } else {
          console.log(response['error'])
        }
      })
  }


  onEdit(schedule) {
    this.router.navigate(['/hodHome/hod/add-schedule'], {queryParams: {id: schedule['id']}})
  }

  addSchedule() {
    this.router.navigate(['/hodHome/hod/add-schedule'])
  }

}
