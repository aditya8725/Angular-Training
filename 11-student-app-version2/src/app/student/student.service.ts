import { Injectable } from '@angular/core';

@Injectable()
export class StudentService 
{
  students: any[]=[
      {studentId: 101, studentName:'aditya', studentScore:91},
      {studentId: 102, studentName:'vikash', studentScore:35},
      {studentId: 103, studentName:'Shubham', studentScore:82},
      {studentId: 104, studentName:'akash', studentScore:55},
      {studentId: 105, studentName:'sHREYANSH', studentScore:77},
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
