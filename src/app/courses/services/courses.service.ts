import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseDialogComponent } from '../components/course-dialog/course-dialog.component';
import { Curso } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private cursos : Curso[] = [
    {
      nombre: "NodeJs",
      comision : "5467",
      profesor: "Corso, Cynthia"  
    },
    {
      nombre: "Angular",
      comision : "5001",
      profesor: "Guzman, Analia"
    },
    {
      nombre: "React",
      comision : "5227",
      profesor: "Romani, German"
    }

  ]

  private cursos$!:BehaviorSubject<Curso[]> 

  constructor(
    private dialogService: MatDialog
  )
  { 

    this.cursos$ = new BehaviorSubject(this.cursos)

  }

  obtenerCursos() : Observable<Curso[]> {

    return this.cursos$.asObservable()

  }

  agregarCurso() : Observable<Curso[]> {
    const dialog = this.dialogService.open(CourseDialogComponent)
    dialog.afterClosed().subscribe((value => {
      if (value){
        
        let nuevoCurso : Curso = {
          nombre: value.nombre,
          comision:  value.comision,
          profesor: value.profesor}     

        this.cursos = [...this.cursos, nuevoCurso]
        this.cursos$.next(this.cursos)
      }
      
    }))
    return this.cursos$
  }

  borrarCurso(curso: Curso){
    this.cursos = this.cursos.filter( c => c.comision != curso.comision)
    this.cursos$.next(this.cursos)
  }

  editarCurso(curso:Curso){
    const dialog = this.dialogService.open(CourseDialogComponent, {
      data: curso,
    })
      dialog.afterClosed().subscribe((data)=>{
      if(data){
        this.cursos = this.cursos.map(c => c.comision === curso.comision ? {...c, ...data} : c)
      }
      this.cursos$.next(this.cursos)
    })
  }  




}
