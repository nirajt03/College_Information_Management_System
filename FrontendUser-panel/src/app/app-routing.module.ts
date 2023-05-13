import { StudentHomeComponent } from './student-home/student-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AuthPrincipalGuard } from './auth-principal/auth-principal.guard';
import { AuthHodGuard } from './auth-hod/auth-hod.guard';
import { AuthFacultyGuard } from './auth-faculty/auth-faculty.guard';
import { AuthStudentGuard } from './auth-student/auth-student.guard';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { PrincipalHomeComponent } from './principal-home/principal-home.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent } ,
  { path: 'contact-us', component: ContactUsComponent },
  { 
    path: 'studentHome',
    component: StudentHomeComponent, 
    canActivate: [AuthStudentGuard],
    children: [ 
      { path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule ) } 
    ]
  },
  { 
    path: 'hodHome',
    component: HodHomeComponent, 
    canActivate: [AuthHodGuard],
    children: [ 
      { path: 'hod', loadChildren: () => import('./hod/hod.module').then(m => m.HodModule ) }
    ]
  },
  { 
    path: 'principalHome',
    component: PrincipalHomeComponent, 
    canActivate: [AuthPrincipalGuard],
    children: [ 
      { path: 'principal', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule ) }
    ]
  },
  { 
    path: 'facultyHome',
    component: FacultyHomeComponent, 
    canActivate: [AuthFacultyGuard],
    children: [ 
      { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) }  
    ]
  },
  { path: 'auth-student', loadChildren: () => import('./auth-student/auth-student.module').then(m => m.AuthStudentModule)},
  { path: 'auth-faculty', loadChildren: () => import('./auth-faculty/auth-faculty.module').then(m => m.AuthFacultyModule)},
  { path: 'auth-principal', loadChildren: () => import('./auth-principal/auth-principal.module').then(m => m.AuthPrincipalModule)},
  { path: 'auth-hod', loadChildren: () => import('./auth-hod/auth-hod.module').then(m => m.AuthHodModule)}  
];


// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent } ,
  //  { 
  //    path: 'student',
  //    component: StudentComponentComponent, 
  //    canActivate: [AuthStudentsService],
  //    children: [ 
  //      { path: 'students', loadChildren: () => import('./student/student.module').then(m => m.StudentModule ) },
  //    ]
  //  },
  //  { path: 'auth-student', loadChildren: () => import('./auth-student/auth-student.module').then(m => m.AuthStudentModule)}
  
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
