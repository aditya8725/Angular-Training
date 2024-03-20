import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  // @Input() student:any={}
  service:StudentService;
  students:any[] = [];

  constructor(s:StudentService)
  { //dependency Injection
    this.service=s;

    this.students=this.service.getAllStudent();
  }

  getBackgroundColor()
  {
    if(Math.random()>0.5)
    {
      return "#ccffff";
    }
    else
    {
      return "#ffccff";
    }
  }
}
