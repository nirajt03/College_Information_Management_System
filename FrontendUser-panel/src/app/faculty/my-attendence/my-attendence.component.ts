// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import {MyAttendenceComponent} from './my-attendence.component.spec'

// @Component({
//   selector: 'app-my-attendence',
//   templateUrl: './my-attendence.component.html',
//   styleUrls: ['./my-attendence.component.css']
// })
// export class MyAttendenceComponent implements OnInit {

  
//   constructor(
//     private router: Router,
//     private activatedRoute: ActivatedRoute,
//     private FacultyServiceService: FacultyServiceService
//   ) { }


//   srNo = 0
//   courseName = ''
//   subjectName = ''
//   className = ''
//   studentName = '' 
//   date = 0 


//   ngOnInit(): void {

//   }

//   addAttendence() {
//     this.facultyService
//       .addJob(this.srNo,this.courseName,this.subjectName,this.className,this.studentName,this.date)
//       .subscribe(response => {
//         if (response['status'] == 'success') {
//           this.router.navigate(['/faculty/my-attendence'])
//         }
//       })
//   }

// }

