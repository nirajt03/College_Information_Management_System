import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hsc-details',
  templateUrl: './hsc-details.component.html',
  styleUrls: ['./hsc-details.component.css']
})
export class HSCDetailsComponent implements OnInit {

  hscCourse = ''
  hscBoard = ''
  hscAggregate = 0
  hscYOP = 0 

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
        .getHSCDetails()
        .subscribe(response => {
          if (response['status'] == 'success') {
            const info = response['data']
            if (info.length > 0) {
              this.details = info[0]
              this.hscCourse = this.details['hscCourse']
              this.hscBoard = this.details['hscBoard']
              this.hscAggregate = this.details['hscAggregate']
              this.hscYOP = this.details['hscYOP']
            
            }
          }
        })
  }
}
onUpdate(){

  if (this.details) {
    // edit
    this.StudentServiceService
      .updateHSCDetails(this.hscCourse, this.hscBoard, this.hscAggregate, this.hscYOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['studentHome/students'])
        }
      })
  } else {
    // insert
    this.StudentServiceService
      .insertHSCDetails(this.hscCourse, this.hscBoard, this.hscAggregate, this.hscYOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['studentHome/students'])
        }
      })
  }

}
}

