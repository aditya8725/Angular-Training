import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Xpractice-xstudnent-io-new';

  students:any[] = [];

  addstudent(student:any)
  {
    this.students.push(student)
  }
}
