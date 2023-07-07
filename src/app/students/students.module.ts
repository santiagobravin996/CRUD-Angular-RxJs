import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    StudentDialogComponent,
    StudentPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule, 
    ReactiveFormsModule,
    StudentRoutingModule
  ]
})
export class StudentsModule { }
