import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassroomServiceService } from '../classroom-service.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  users=[]
  constructor(private classroomServiceService:ClassroomServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.onload()
  }


  onload(){
    const request=this.classroomServiceService.getClasses()
    request.subscribe(response=>{
      if(response['status']=='success'){
        this.users=response['data']
        console.log(response['data'])
      }
      else{
        console.log(response['error'])
      }
    })
  }


 

}
