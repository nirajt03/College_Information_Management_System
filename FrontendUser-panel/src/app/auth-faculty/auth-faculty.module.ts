import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFacultyRoutingModule } from './auth-faculty-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthfacultysService } from './auth-facultys.service';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthFacultyRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthfacultysService]
})
export class AuthFacultyModule { }
