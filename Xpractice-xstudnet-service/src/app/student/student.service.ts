import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
  students:any[]=[
    {
      studentId:'101',studentName:'Aditya',studentScore:'100'
    }
  ];
  constructor() { }

  addStudent(s:any)
  {
    this.students.push(s)
  }

  getAllStudent()
  {
    return this.students
  }
  
}
