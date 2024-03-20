import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {
  constructor(private http:HttpClient) { }

  addStudent(player:any)
  {
    return this.http.post("http://localhost:3000/players",player)
  }

  getAllStudnets()
  {
    return this.http.get<any[]>("http://localhost:3000/players")
  }
}
