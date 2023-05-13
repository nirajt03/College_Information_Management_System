import { ClassroomComponent } from './classroom/classroom.component';
import { MyScheduleComponent } from './../student/my-schedule/my-schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { AddAttendenceComponent } from './add-attendence/add-attendence.component';
import { MyNewsComponent } from './my-news/my-news.component';

const routes: Routes = [
  { path: 'add-attendence', component: AddAttendenceComponent } ,
  { path: 'NewsInfo', component: MyNewsComponent},
  { path: 'ScheduleInfo', component: MyScheduleComponent},
  { path: 'ClassRoomInfo', component: ClassroomComponent},
  //{ path: 'faculty-details', component: FacultyDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
