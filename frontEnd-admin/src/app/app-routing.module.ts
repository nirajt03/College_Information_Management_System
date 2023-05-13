import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { HodListComponent } from './hod-list/hod-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminService } from './admin.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [

  {path : 'dashboard' , component : DashboardComponent ,canActivate:[AdminService]} ,
  {path : 'student-list' , component : StudentListComponent ,canActivate: [AdminService]} ,
  {path : 'hod-list' , component : HodListComponent,canActivate: [AdminService]} ,
  {path : 'faculty-list' , component : FacultyListComponent,canActivate: [AdminService]} ,

  { path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
