import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  onSubmit(form:NgForm)
  {
    console.log('Form submitted.')
    console.log('Values = '+JSON.stringify(form.value))
    alert('Values = '+JSON.stringify(form.value))

    console.log("Touched = "+form.touched)
    console.log("Valid = "+form.valid)
    console.log("Invalid = "+form.invalid)
  }

}
