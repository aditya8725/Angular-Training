import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  studentForm:FormGroup = new FormGroup({});

  data:any=[];

  ngOnInit() :void
  {
    this.studentForm = new FormGroup({
      studentId: new FormControl(null,Validators.required),
      studentName: new FormControl(null,Validators.required)
    });
  }

  onSubmit()
    {
      console.log(`value= ${JSON.stringify(this.studentForm.value)}`);
      console.log(`touched= ${JSON.stringify(this.studentForm.touched)}`);
      console.log(`untouched= ${JSON.stringify(this.studentForm.untouched)}`);
      console.log(`valid= ${JSON.stringify(this.studentForm.valid)}`);
      console.log(`invalid= ${JSON.stringify(this.studentForm.invalid)}`);    
      
      
      
      this.data = this.studentForm.value;

      this.studentForm.reset();
    }

}
