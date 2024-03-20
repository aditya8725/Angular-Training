import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

// userid:string=""
// password:string=""  
message:string=""
colorflag:number=5
data1:any=''
data2:any=''

data:object[] = [{user:'', pass:''}];

  onClicker(form:NgForm)
  {
    let userid=form.value.userid;
    let password=form.value.password;

    if(userid=="kpit" && password=="admin")
    {
      
      this.message="Successfull...!!"
      this.colorflag=1

      this.data1=userid
      this.data2=password

      let obj:object = {user: this.data1, pass: this.data2};
      this.data.push(obj);
    }

    else
    {
      this.message="Falied...!!"
      this.colorflag=2
    }

    form.reset()
  }
}

