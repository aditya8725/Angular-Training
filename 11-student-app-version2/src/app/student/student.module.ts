import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListStudentComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListStudentComponent,AddStudentComponent
  ],
  providers:[StudentService]
})
export class StudentModule { }
