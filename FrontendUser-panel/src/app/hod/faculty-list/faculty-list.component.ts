import { Router } from '@angular/router';
import { FacultyServiceService } from '../faculty-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  users=[]
  constructor(private facultyServiceService:FacultyServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getFaculty()
  }
  onEdit(user){
    this.router.navigate(['/home/faculty/faculty-edit'],{queryParams:{id:user['id']}})
  }
  onDelete(id){
    const request=this.facultyServiceService.deleteFaculty(id)
    request.subscribe(response=>{
      if(response['status']=='success'){
        //this.toastrService.success('student deleted successfully')
        this.getFaculty()
      }else{
        console.log(response['error'])
        //this.toastrService.error('something went wrong')
      }
    })
  }
  getFaculty(){
    const request=this.facultyServiceService.getFaculty()
  request.subscribe(response=>{
    if(response['status']=='success'){
      console.log(response)
      this.users=response['data']
    }else{
      console.log(response['error'])
    }
  })
  }

  }
