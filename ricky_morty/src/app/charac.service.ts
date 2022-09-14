import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacService {

  constructor(private http:HttpClient) { }

  retornar(ids:any){
   return this.http.get("https://rickandmortyapi.com/api/character/"+ids);
  }
}
