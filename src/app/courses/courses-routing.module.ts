import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';


const routes : Routes = [
  {
  
    path:"",

    children: [

      {path:"listar", component:CoursesPageComponent},
      {path: ":id", component: CoursesCardComponent}
    ]
  }
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
