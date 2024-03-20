import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-student-app';

   students: any[]=[
  //   {studentId: 101, studentName:'Aditya', studentScore:91},
  //   {studentId: 102, studentName:'Vikash', studentScore:70},
  //   {studentId: 103, studentName:'Shubham', studentScore:82},
  //   {studentId: 104, studentName:'Akash', studentScore:81},
  //   {studentId: 105, studentName:'Shreyansh', studentScore:87},
  ];

  addStudent(student:any)
  {
    this.students.push(student)
  }
}
