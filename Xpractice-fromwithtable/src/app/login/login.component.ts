import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent
{

  firstname:string ='';
  lastname:string='';
  score:string='';
  
  data: any[] = []
  onClicker()
  {
    if(this.firstname && this.lastname && this.score)
    {
      this.data.push({
        firstname:this.firstname,
        lastname:this.lastname,
        score:this.score
      });

      this.firstname='',
      this.lastname='';
      this.score='';
    }
  }
}
