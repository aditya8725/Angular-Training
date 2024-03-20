import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Question4';

  players:any[]=[
    {playerId:101,playerName:"Aditya",playerAge:21}
  ];

  player:any={
    playerId:'',
    playerName:'',
    playerAge:''
  }
  addPlayer(form:NgForm)
  {
    this.player=form.value;
    this.players.push(this.player)
  }

}
