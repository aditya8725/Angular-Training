import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent 
{


  @Output() add = new EventEmitter();

  addHandler(forms:NgForm)
  {
    this.add.emit(forms)
    forms.resetForm()
  }

}
