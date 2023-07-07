import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../../models/courses';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent {

  nombreControl = new FormControl();
  comisionControl = new FormControl();
  profesorControl = new FormControl()
  cursoForm = new FormGroup({
    nombre:this.nombreControl,
    comision: this.comisionControl,
    profesor: this.profesorControl
  })

  constructor(private readonly dialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public data: Curso | null,) {
    console.log(data);
    if(data){
      this.cursoForm.patchValue(data)
    }
  }

  close(){
    this.dialogRef.close()
  }


}
