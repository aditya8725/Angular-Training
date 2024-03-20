import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addStudent(student:any)
  {
    return this.http.post("http://localhost:3000/students",student)
  }

  getAllStudnets()
  {
    return this.http.get<any[]>("http://localhost:3000/students")
  }
}
