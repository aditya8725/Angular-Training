import { Component } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {

  constructor(private service:PlayerServiceService)
  {

  }
  addHandler(playerForm:NgForm){
    this.service.addStudent(playerForm.value).subscribe(()=>{
      alert("Student Added Successfully !!!!")
    });
    playerForm.resetForm();
  }
}
