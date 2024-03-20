import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08-Angular-pipe';

  employees:any=[
    {id:'101',name:'Aditya',gender:'male',salary:500000},
    {id:'102',name:'Aarti',gender:'female',salary:12000},
    {id:'103',name:'Deepak',gender:'male',salary:4000},
    {id:'104',name:'Janvi',gender:'female',salary:5000},
    {id:'105',name:'Shubham',gender:'male',salary:4800},
  ];
}
