import { ClassServiceService } from './class-service.service';
import { StudentServiceService } from './../student/student-service.service';
import { FacultyServiceService } from './../faculty/faculty-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HodsComponent } from './hods/hods.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListFacultyComponent } from './list-faculty/list-faculty.component';
import { FormsModule } from '@angular/forms';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { HodServiceService } from './hod-service.service';
import { FacultyComponent } from './faculty/faculty.component';
//import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';


@NgModule({
  declarations: [HodsComponent, ListStudentComponent, ListFacultyComponent, ClassroomComponent, ClassAddComponent, FacultyComponent, StudentComponent, StudentListComponent, AddNewsComponent, ListNewsComponent, AddScheduleComponent, ScheduleListComponent],
  imports: [
    CommonModule,
    HodRoutingModule,
    FormsModule
  ],
  providers: [HodServiceService, FacultyServiceService, StudentServiceService, ClassServiceService]
})
export class HodModule { }
