import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{

  message:string=""
  userid:string=''
  password:string=''
  colorflag:number=7;
  
  onClicker()
  {
    if(this.userid=="kpit" && this.password=="admin")
    {
      this.message="Successfuuly submmited...!!!"
      this.colorflag=1;
    }
    else
    {
      this.message="Failed....!!!"
      this.colorflag=2;
    }
  }
}
