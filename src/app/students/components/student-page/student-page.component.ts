import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/students/models/student';
import { StudentService } from '../../service/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: []
})
export class StudentPageComponent implements OnInit {
  
  
  dataSource!: MatTableDataSource<Student>
  displayedColumns = ["id", "nombre", "edad", "curso", 'edit', 'delete' ]
  suscription!:Subscription;
  
  constructor(
    
    public studentService : StudentService
    ){}

    ngOnInit(): void {
      
      this.dataSource = new MatTableDataSource<Student>();

      this.suscription = this.studentService.obtenerEstudiantes().subscribe((estudiantesObservable : Student[]) => {
        this.dataSource.data = estudiantesObservable
      })
    }

    ngOnDestroy(): void {
      this.suscription.unsubscribe()
    }
  
} 
