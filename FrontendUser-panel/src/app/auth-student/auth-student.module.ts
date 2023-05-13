import { AuthStudentsService } from './auth-students.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthStudentRoutingModule } from './auth-student-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthStudentRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthStudentsService]
})
export class AuthStudentModule { }
