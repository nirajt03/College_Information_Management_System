import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ssc-details',
  templateUrl: './ssc-details.component.html',
  styleUrls: ['./ssc-details.component.css']
})
export class SSCDetailsComponent implements OnInit {

  sscCourse = ''
  sscBoard = ''
  sscAggregate = 0
  sscYOP = 0 

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
        .getSSCDetails()
        .subscribe(response => {
          if (response['status'] == 'success') {
            const info = response['data']
            if (info.length > 0) {
              this.details = info[0]
              this.sscCourse = this.details['sscCourse']
              this.sscBoard = this.details['sscBoard']
              this.sscAggregate = this.details['sscAggregate']
              this.sscYOP = this.details['sscYOP']
            
            }
          }
        })
  }
}
onUpdate(){

  if (this.details) {
    // edit
    this.StudentServiceService
      .updateSSCDetails(this.sscCourse, this.sscBoard, this.sscAggregate, this.sscYOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['studentHome/students'])
        }
      })
  } else {
    // insert
    this.StudentServiceService
      .insertSSCDetails(this.sscCourse, this.sscBoard, this.sscAggregate, this.sscYOP)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['studentHome/students'])
        }
      })
  }

}
}
