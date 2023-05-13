import { FacultyService } from './faculty.service';
import { StudentService } from './student.service';
import { AdminService } from './admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HodListComponent } from './hod-list/hod-list.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { HodService } from './hod.service';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    HodListComponent,
    FacultyListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule
  ],
  providers: [
    AdminService ,
    StudentService ,
    FacultyService ,
    HodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
