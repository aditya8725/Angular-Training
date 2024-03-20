import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string=""
  password:string=""
  message:string=""
  flag:number=8;

  checkpw()
  {
    if(this.username=="kpit" && this.password == 'admin')
    {
      this.message="Login Successfull..!!";
      this.flag=1
    }
    else
    {
      this.message="Login Failed...!!";
      this.flag=2;
    }
  }
}

