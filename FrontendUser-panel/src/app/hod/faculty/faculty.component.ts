import { Component, OnInit } from '@angular/core';
import { FacultyServiceService } from '../faculty-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  user={}
  classes=[]
  classId=0
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private facultyServiceService:FacultyServiceService) { }

  ngOnInit(): void {
    this.onLoad()
    this.loadClass()
  }

  onSave(){
    console.log(this.classId)
    console.log('krishna kailas')
    const request=this.facultyServiceService.allocateClass(this.classId,this.user['id'])
    request.subscribe(response=>{
      if(response['status']=='success'){
       //this.toastrService.success('faculty added successfully')
       this.router.navigate(['/hodHome/hod/faculty-list'])
      }else{
        console.log(response['error'])
      }
    })
  }
  onCancel(){
    this.router.navigate(['hodHome/hod/faculty-list'])
  }
  loadClass(){
    const request=this.facultyServiceService.getClassroom()
    request.subscribe(response=>{
      if(response['status']=='success'){
        console.log(response['data'])
      this.classes=response['data']
      }else{
        console.log(response['error'])
      }
    })
  }
  onLoad(){
    const id=this.activatedRoute.snapshot.queryParams['id']
    const request=this.facultyServiceService.getFacultyById(id)
    request.subscribe(response=>{
      if(response['status']=='success'){
        console.log(response['data'])
      this.user=response['data'][0]
      }else{
        console.log(response['error'])
      }
    })
  }

}
