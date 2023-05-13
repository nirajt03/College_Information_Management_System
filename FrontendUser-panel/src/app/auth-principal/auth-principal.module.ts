import { AuthPrincipalsService } from './auth-principals.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPrincipalRoutingModule } from './auth-principal-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthPrincipalRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthPrincipalsService]
})
export class AuthPrincipalModule { }
