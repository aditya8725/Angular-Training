import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';



@NgModule({
  declarations: [
    ListStudentComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[AddStudentComponent,ListStudentComponent],
  providers:[StudentService]
})
export class StudentModule { }
