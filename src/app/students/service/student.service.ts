import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentDialogComponent } from '../components/student-dialog/student-dialog.component';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students : Student[] = [
    {
      id:1,
      nombre:"Orlando, Eleonora", 
      edad: 25, 
      curso: "NodeJs"
    },
    {
      id:2,
      nombre:"Orlando, Eleonora", 
      edad: 25, 
      curso: "NodeJs"
    },
    {
      id:3,
      nombre:"Orlando, Eleonora", 
      edad: 25, 
      curso: "NodeJs"
    },
    {
      id:4,
      nombre:"Orlando, Eleonora", 
      edad: 25, 
      curso: "NodeJs"
    },
  ]

  private students$!:BehaviorSubject<Student[]> 

  constructor(
    private dialogService: MatDialog
  )
  { 

    this.students$ = new BehaviorSubject(this.students)

  }

  obtenerEstudiantes() : Observable<Student[]> {

    return this.students$.asObservable()

  }

  agregarEstudiante() : Observable<Student[]>{
    const dialog = this.dialogService.open(StudentDialogComponent)
    dialog.afterClosed().subscribe((value => {
      if (value){
        const lastId = this.students[this.students.length - 1]?.id;

                
        this.students = [...this.students, { id:lastId + 1,nombre:value.nombre, edad: value.edad, curso : value.curso}]
        this.students$.next(this.students)
      }
    }))
    return this.students$
  }

  borrarEstudiante(student: Student){
    this.students = this.students.filter(stu => stu.id != student.id)
    this.students$.next(this.students)
  }

  editarEstudiante(student:Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data)=>{
      if(data){
        this.students = this.students.map(stu => stu.id === student.id ? {...stu, ...data} : stu)
      }
      this.students$.next(this.students)
    })
  }   
}    