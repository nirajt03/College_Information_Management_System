import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { ListFacultyComponent } from './list-faculty/list-faculty.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';


const routes: Routes = [
  { path: 'studentlist', component: ListStudentComponent },
  { path: 'list-faculty', component: ListFacultyComponent},
  { path: 'ClassRoomInfo', component: ClassroomComponent},
  { path: 'ClassAddInfo', component: ClassAddComponent},
  { path: 'FacultyInfo', component: FacultyComponent},
  { path: 'FacultyListInfo', component: FacultyListComponent},
  { path: 'StudentInfo', component: StudentComponent},
  { path: 'StudentListInfo', component: StudentListComponent},
  { path: 'add-news', component: AddNewsComponent } ,
  { path: 'list-news', component: ListNewsComponent},
  { path: 'add-schedule', component: AddScheduleComponent},
  { path: 'schedule-list', component: ScheduleListComponent},
  { path: 'student-list', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
