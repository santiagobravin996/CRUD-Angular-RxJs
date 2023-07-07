import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Student } from 'src/app/students/models/student';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  
})
export class StudentDialogComponent {
  nombreControl = new FormControl();
  edadControl = new FormControl();
  cursoControl = new FormControl()
  studentForm = new FormGroup({
    nombre:this.nombreControl,
    edad: this.edadControl,
    curso: this.cursoControl
  })

  constructor(private dialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    console.log(data);
    if(data){
      this.studentForm.patchValue(data)
    }
  }

  close(){
    this.dialogRef.close()
  }
}
