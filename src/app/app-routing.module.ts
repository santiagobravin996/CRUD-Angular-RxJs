import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './students/components/student-page/student-page.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { NoEncontradoComponent } from './core/no-encontrado/no-encontrado.component';

  const routes : Routes = [

    {path:"inicio", component:InicioComponent},

    {
      path:"alumnos",
      
      loadChildren: ()=> import("./students/students.module").then(m=>m.StudentsModule)
    },

    {
      path:"cursos",

      loadChildren: ()=> import("./courses/courses.module").then(m =>m.CoursesModule)

    },
    
    {path:"", redirectTo:"inicio", pathMatch:"full"},
    {path:"**", component:NoEncontradoComponent},
    
   
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
    
  ]
})
export class AppRoutingModule { }
