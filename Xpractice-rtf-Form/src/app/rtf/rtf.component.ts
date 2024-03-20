import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent implements OnInit
{
  loginform:FormGroup = new FormGroup({});
  message:string=''

 ngOnInit(): void 
 {
  this.loginform = new FormGroup({
    userid: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })
     
 } 

  onClicker()
  {
    let userid=this.loginform.value.userid
    let password = this.loginform.value.password
    if(userid == "Aditya" && password =="aditya")
    {
      this.message="Successfull"
    }
    else
    {
      this.message = "Failed"
    }
  }

}
