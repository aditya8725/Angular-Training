import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regform:FormGroup = new FormGroup({});
  
  message:string='';
  colorflag:number=8;
  ngOnInit(): void
  {
  this.regform = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
  })
     
 } 

  onClicker()
  {
    this.message="User Added Successfully...!!!"
    this.colorflag=1
    this.regform.reset();
  }

}
