import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {

  students:any[]=[]
  service:StudentService;

  constructor(s:StudentService)
  {
    this.service=s;
    this.students = this.service.getAllStudent();
  }
}
