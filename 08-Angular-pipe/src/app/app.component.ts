import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08-Angular-pipe';

  companyName:string = "kpit";
  num:number = 75
  student :any={
    studentId:100,
    studentName: 'rajesh',
    studentScore: 60.8
  };

  studentName:string[]=[' Aditya ',' Shubham ',' kartik ',' akash ',' madhav ',' jack ',' jwalitha ',' deepika '];

 
}
