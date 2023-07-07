import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { RouterModule } from '@angular/router';
import { CoursesRoutingModule } from './courses-routing.module';
import { MaterialModule } from '../material/material.module';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';



@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseDialogComponent,
    CoursesCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoursesRoutingModule,
    MaterialModule, 
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
