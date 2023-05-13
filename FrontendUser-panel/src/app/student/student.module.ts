import { StudentServiceService } from './student-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsComponent } from './students/students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyNewsComponent } from './my-news/my-news.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyTeacherComponent } from './my-teacher/my-teacher.component';
import { EditComponent } from './edit/edit.component';
import { SSCDetailsComponent } from './ssc-details/ssc-details.component';
import { HSCDetailsComponent } from './hsc-details/hsc-details.component';
import { DiplomaDetailsComponent } from './diploma-details/diploma-details.component';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';


@NgModule({
  declarations: [StudentsComponent, StudentProfileComponent, MyNewsComponent, MyScheduleComponent, MyTeacherComponent, EditComponent, SSCDetailsComponent, HSCDetailsComponent, DiplomaDetailsComponent,  LectureDetailsComponent ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentServiceService]
})
export class StudentModule { }
