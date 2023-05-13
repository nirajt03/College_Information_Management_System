import { Component, OnInit } from '@angular/core';
import { HodServiceService } from '../hod-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentDetails = []

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private HodServiceService: HodServiceService
    ) { }

  ngOnInit(): void {
    this.loadStudentDetails()
  }

  loadStudentDetails(){
      this.HodServiceService.getStudentDetails().subscribe(response => {
      if (response['status'] == 'success') {
        this.studentDetails = response['data']
        console.log(this.studentDetails)
      } else {
        console.log(response['error'])
      }
    })
  }


}
