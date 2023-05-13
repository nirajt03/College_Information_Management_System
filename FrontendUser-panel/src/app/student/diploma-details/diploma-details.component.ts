import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diploma-details',
  templateUrl: './diploma-details.component.html',
  styleUrls: ['./diploma-details.component.css']
})
export class DiplomaDetailsComponent implements OnInit {

  Course = ''
  university = ''
  Aggregate = 0
  YOP = 0 

  details = null
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if (id) {
      // edit product
      this.StudentServiceService
        .getDiplomaDetails()
        .subscribe(response => {
          if (response['status'] == 'success') {
            const info = response['data']
            if (info.length > 0) {
              this.details = info[0]
              this.Course = this.details['Course']
              this.university = this.details['university']
              this.Aggregate = this.details['Aggregate']
              this.YOP = this.details['YOP']
            
            }
          }
        })
  }
}
onUpdate(){

  if (this.details) {
    // edit
    this.StudentServiceService
      .updateDiplomaDetails(this.Course, this.university, this.Aggregate, this.YOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/studentHome/students'])
        }
      })
  } else {
    // insert
    this.StudentServiceService
      .insertDiplomaDetails(this.Course, this.university, this.Aggregate, this.YOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/studentHome/students'])
        }
      })
  }

}
}


