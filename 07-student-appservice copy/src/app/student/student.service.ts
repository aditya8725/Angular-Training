import { Injectable } from '@angular/core';

@Injectable()
export class StudentService 
{
  students: any[]=[
      {studentId: 101, studentName:'Aditya', studentScore:91},
      {studentId: 102, studentName:'Vikash', studentScore:70},
      {studentId: 103, studentName:'Shubham', studentScore:82},
      {studentId: 104, studentName:'Akash', studentScore:81},
      {studentId: 105, studentName:'Shreyansh', studentScore:87},
    ];

  constructor() { }

  addStudent(s:any){
    this.students.push(s);
  }

  getAllStudent()
  {
    return this.students;
  }
}
