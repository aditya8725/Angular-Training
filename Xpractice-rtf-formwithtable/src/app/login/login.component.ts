import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit
{
  stform:FormGroup = new FormGroup({});
  data:any=[];
  
  message:string=''
  ngOnInit(): void 
  {
  this.stform = new FormGroup({
    name: new FormControl(null,Validators.required),
    age: new FormControl(null,Validators.required),
    gender:new FormControl(null,Validators.required),
    salary: new FormControl(null,Validators.required)
  })
     
 } 

  onClicker()
  {
    let name=this.stform.value.name
    let age = this.stform.value.age
    let gender = this.stform.value.gender
    let salary= this.stform.value.salary
    
    if(name && age && gender && salary)
    {
      let obj={n:name,a:age,g:gender,s:salary};
      this.data.push(obj);
    }
  }
}
