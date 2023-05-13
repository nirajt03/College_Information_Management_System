import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassServiceService } from '../class-service.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  users=[]
  constructor(private classServiceService:ClassServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.onload()
  }


  onload(){
    const request=this.classServiceService.getClasses()
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
  onDelete(id){
    const request=this.classServiceService.deleteClass(id)
    request.subscribe(response=>{
      if(response['status']=='success'){
        //this.toastrService.success('class deleted successsfully')
        this.onload()
      }
      else{
        console.log(response['error'])
      }
    })

  }

  addclassroom(){
    this.router.navigate(['/hodHome/hod/ClassAddInfo'])
  }

}
