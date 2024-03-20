import { Component } from '@angular/core';

import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
student:any={
  studentId:'',
  studentName:'',
  studentScore:''
}

service:StudentService

constructor(s:StudentService)
{
  this.service=s
}

addHandler(form:NgForm)
{

  let obj:object = {
    studentId:form.value.studentId,
    studentName:form.value.studentName,
    studentScore:form.value.studentScore
  }
  // let formdata = form.value
  //  formdata.this.service.addStudent(this.student);
  //formdata.this.service.addStudent(this.student)
  this.service.addStudent(obj);
  form.reset;
}
}
