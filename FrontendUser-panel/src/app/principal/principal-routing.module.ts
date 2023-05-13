import { MyTeacherComponent } from './../student/my-teacher/my-teacher.component';
import { ListHodComponent } from './list-hod/list-hod.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';

const routes: Routes = [
  { path: 'add-news', component: AddNewsComponent } ,
  { path: 'list-hod', component: ListHodComponent},
  { path :'list-news', component: ListNewsComponent},
  { path: 'my-teacher', component: MyTeacherComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
