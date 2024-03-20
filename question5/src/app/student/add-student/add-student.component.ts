import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  constructor(private service:StudentService)
  {

  }
  addHandler(studentForm:NgForm){
    this.service.addStudent(studentForm.value).subscribe(()=>{
      alert("student Added Successfully !!!!")
    });
    studentForm.resetForm();
  }
  
}






