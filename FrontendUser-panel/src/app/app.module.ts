import { AuthHodGuard } from './auth-hod/auth-hod.guard';
import { AuthStudentGuard } from './auth-student/auth-student.guard';
import { AuthPrincipalGuard } from './auth-principal/auth-principal.guard';
import { AuthFacultyGuard } from './auth-faculty/auth-faculty.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// import { StudentsComponent } from './student/students/students.component';
// import { StudentProfileComponent } from './student/student-profile/student-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentHomeComponent,
    FacultyHomeComponent,
    HodHomeComponent,
    PrincipalHomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthFacultyGuard,AuthPrincipalGuard,AuthStudentGuard,AuthHodGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
