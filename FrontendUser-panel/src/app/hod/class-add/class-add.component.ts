import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassServiceService } from '../class-service.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {

  name=''
  size=0
  faculties=[]
  facultyId=0
    constructor(private classServiceService:ClassServiceService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.getFaculties()
    }
  onSave(){
  console.log(this.facultyId)
  const request=this.classServiceService.createClass(this.name,this.size,this.facultyId)
  request.subscribe(response=>{
    if(response['status']=='success'){
      //this.toastrService.success('faculty added successfully')
      this.router.navigate(['/hodHome/hod/class-list'])
    }else{
      console.log(response['error'])
    }
  })
  }
  getFaculties(){
    const request=this.classServiceService.getFaculties()
    request.subscribe(response=>{
      if(response['status']=='success'){
        this.faculties=response['data']
        console.log(this.faculties)
      }else{
        console.log(response['error'])
      }
    })
  }
  onCancel(){
    this.router.navigate(['/hodhome/hod/ClassRoomInfo'])
  }

}
