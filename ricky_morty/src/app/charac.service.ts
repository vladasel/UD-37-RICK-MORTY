import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacService {

  constructor(private http:HttpClient) { }

  retornar(){
   return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }
}
