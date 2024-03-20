import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student:any={
    studentId: '',
    studentName:'',
    studentScore:''
  }

  service:StudentService;
  constructor(s:StudentService){
    this.service = s;
  }

  addHandler(){
    this.service.addStudent(this.student);
    this.student = {};
  }
}