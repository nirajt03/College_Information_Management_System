import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultysComponent } from './facultys/facultys.component';
import { AddAttendenceComponent } from './add-attendence/add-attendence.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { FacultyService } from './faculty.service';
//import { StudentService } from './student.service';
//import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { MyNewsComponent } from './my-news/my-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { ClassroomComponent } from './classroom/classroom.component';


@NgModule({
  declarations: [FacultysComponent, MyScheduleComponent, MyNewsComponent, AddAttendenceComponent, AddNewsComponent, ListNewsComponent, ClassroomComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule
  ]
})
export class FacultyModule { }
