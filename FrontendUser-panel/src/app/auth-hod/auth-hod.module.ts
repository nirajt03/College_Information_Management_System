import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthHodRoutingModule } from './auth-hod-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthHodsService } from './auth-hods.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthHodRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthHodsService]
})
export class AuthHodModule { }
