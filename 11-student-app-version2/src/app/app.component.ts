import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07-student-appservice';
  students: any[]=[];
  addStudent(student:any)
  {
    this.students.push(student)
  }
}

