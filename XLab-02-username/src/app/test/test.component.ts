import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  username:string = ''

  message:string =''
  onClicker()
  {
    this.message=this.username;
    this.username=''
  }
}
