import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './../student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private StudentServiceService: StudentServiceService 
  ) { }
  
  
  name = ''
  gender = ''
  hobbies = ''
  address = ''
  phone = ''
  email = ''
  password = ''

  details = null
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.queryParams['id']
    if(id){
      this.StudentServiceService.getStudent().subscribe(response => {
        if (response['status'] == 'success') {
          const detail = response['data']
          if (detail.length > 0) {
            this.details = detail[0]
            this.name = this.details['name']
            this.gender = this.details['gender']
            this.hobbies = this.details['hobbies']
            this.address = this.details['address']
            this.phone = this.details['phone']
            this.email = this.details['email']
          }
        }
      })
    }
  }

  onUpdate(){
    this.StudentServiceService.updatePersonalDetails(this.name,this.gender,this.hobbies,this.address,this.phone,this.email)
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.router.navigate(['/studentHome/students'])
      }
    })
  }
}

