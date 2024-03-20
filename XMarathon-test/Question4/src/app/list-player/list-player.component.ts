import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrl: './list-player.component.css'
})
export class ListPlayerComponent {
@Input() players:any[]=[]
}
