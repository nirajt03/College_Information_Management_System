import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  users=[]
  constructor(private studentServiceService:StudentServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getStudents()
  }
getStudents(){
  const request=this.studentServiceService.getStudents()
  request.subscribe(response=>{
    if(response['status']=='success'){
      console.log(response)
      this.users=response['data']
    }else{
      console.log(response['error'])
    }
  })
}

onEdit(user){
  this.router.navigate(['/hodHome/hod/student-edit'],{queryParams:{id:user['id']}})
}

onDelete(id){
  const request=this.studentServiceService.deleteStudent(id)
  request.subscribe(response=>{
    if(response['status']=='success'){
      //this.toastrService.success('student deleted successfully')
      this.getStudents()
    }else{
      console.log(response['error'])
      //this.toastrService.error('something went wrong')
    }
  })
}
filter(){
  this.router.navigate(['/hodHome/hod/formated-list'])
}

}
