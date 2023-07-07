import { Component, OnDestroy, OnInit } from '@angular/core';
import { Curso } from '../../models/courses';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CoursesService } from '../../services/courses.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy{

  dataSource!: MatTableDataSource<Curso>;
  columsToDisplay: string[] = ["comision", "nombre", "profesor", "edit", "delete", "detalle"]
  suscription!: Subscription
  

  constructor(
    
    public cursoService: CoursesService
    ){}

    ngOnInit(): void {
      
      this.dataSource = new MatTableDataSource<Curso>();

      this.suscription = this.cursoService.obtenerCursos().subscribe((cursosObservable : Curso[]) => {
        this.dataSource.data = cursosObservable
      })
    }
    ngOnDestroy(): void {
      this.suscription.unsubscribe()
    }

    
  }






  
          //CÓDIGO PREVIO A LOS SERVICIOS Y A RXJS
  // agregarCurso(){
  //   const dialog = this.dialogService.open(CourseDialogComponent)
  //   dialog.afterClosed().subscribe((value => {
  //     if (value){
        
  //       let nuevoCurso : Curso = {
  //         nombre: value.nombre,
  //         comision:  value.comision,
  //         profesor: value.profesor}     

  //       this.cursos = [...this.cursos, nuevoCurso]
  //        this.cursos$.next(this.cursos)  
  //     }
  //   }))
  //}

  // borrarCurso(curso: Curso){
  //   this.cursos = this.cursos.filter( c => c.comision != curso.comision)
  // }

  // editarCurso(curso:Curso){
  //   const dialog = this.dialogService.open(CourseDialogComponent, {
  //     data: curso,
  //   })

  //   dialog.afterClosed().subscribe((data)=>{
  //     if(data){
  //       this.cursos = this.cursos.map(c => c.comision === curso.comision ? {...c, ...data} : c)
  //     }
  //   })
  // }      



