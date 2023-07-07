import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './components/student-page/student-page.component';

const routes : Routes = [
  {
  path: "",
  children: [
    {path:"listar", component:StudentPageComponent}
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class StudentRoutingModule { }
