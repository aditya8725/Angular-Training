import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


data:any = [];

  onClicker(form:NgForm)
  {
    let firstname=form.value.firstname;
    let lastname=form.value.lastname;
    let email=form.value.email;
    let gender=form.value.gender;
    let married=form.value.married;
    let country=form.value.country;

    if(firstname && lastname && email && gender && married && country)
    {
      
     // let obj:object = {user: this.data1, pass: this.data2};
      let obj1:object = {firstname: firstname,lastname:lastname,email:email,gender:gender,
      married:married,country:country};
      this.data.push(obj1);
    }

    form.resetForm()
  }
}




