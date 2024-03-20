import { Component } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrl: './list-player.component.css'
})
export class ListPlayerComponent {

  players:any[] = [];

  constructor(private service:PlayerServiceService)
  {
    service.getAllStudnets().subscribe(data=>{
      this.players=data;
    })
  }

}
