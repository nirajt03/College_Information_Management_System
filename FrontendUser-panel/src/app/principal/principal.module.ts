import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalsComponent } from './principals/principals.component';
import { ListHodComponent } from './list-hod/list-hod.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { PrincipalServiceService } from './principal-service.service';
import { FormsModule } from '@angular/forms';
import { ListNewsComponent } from './list-news/list-news.component';
import { MyTeacherComponent } from './my-teacher/my-teacher.component';


@NgModule({
  declarations: [PrincipalsComponent, ListHodComponent, AddNewsComponent, ListNewsComponent, MyTeacherComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule
  ],
  providers: [
    PrincipalServiceService 
  ]
})
export class PrincipalModule { }
