import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnDestroy{

  constructor()
  {
    console.log('Child component object is created.')
  }

  ngOnInit(): void 
  {
    console.log('Chlid component is loaded on browser.')
  }

  ngOnDestroy(): void 
  {
      console.log('Child component is destroyed.')
  }
  
}
