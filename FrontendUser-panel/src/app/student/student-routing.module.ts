import { from } from 'rxjs';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyNewsComponent } from './my-news/my-news.component';
import { DiplomaDetailsComponent } from './diploma-details/diploma-details.component';
import { SSCDetailsComponent } from './ssc-details/ssc-details.component';
import { HSCDetailsComponent } from './hsc-details/hsc-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsComponent } from './students/students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MyTeacherComponent } from './my-teacher/my-teacher.component';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'studentProfile', component: StudentProfileComponent },
  { path: 'editPersonalInfo', component: EditComponent },
  { path: 'SSCInfo', component: SSCDetailsComponent },
  { path: 'HSCInfo', component: HSCDetailsComponent },
  { path: 'DiplomaInfo', component: DiplomaDetailsComponent },
  { path: 'NewsInfo', component: MyNewsComponent},
  { path: 'ScheduleInfo', component: MyScheduleComponent},
  { path: 'FacultyInfo', component: MyTeacherComponent},
  { path: 'AttendenceDetails', component: LectureDetailsComponent},
  { path: 'NewsDetails', component: MyNewsComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
