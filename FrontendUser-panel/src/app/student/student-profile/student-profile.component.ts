import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  
  studentProfile = []

  constructor(
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
  ) { }

  ngOnInit(): void {
    this.getStudentProfile()
  }


  getStudentProfile() {
    
    this.StudentServiceService.getStudentProfile().subscribe(response => {
      if (response['status'] == 'success') {
        this.studentProfile = response['data']
        console.log(this.studentProfile)
      } else {
        console.log(response['error'])
      }
    })
  }

  onEdit() {
    this.router.navigate(['/studentHome/students/editPersonalInfo'], {queryParams: {id: 1 }})
  }

  onSSCEdit(){
    this.router.navigate(['/studentHome/students/SSCInfo'], {queryParams: {id: 1 }})
  }

  onHSCEdit(){
    this.router.navigate(['/studentHome/students/HSCInfo'], {queryParams: {id: 1 }})
  }

  onDiplomaEdit(){
    this.router.navigate(['/studentHome/students/DiplomaInfo'], {queryParams: {id: 1 }})
  }

}

