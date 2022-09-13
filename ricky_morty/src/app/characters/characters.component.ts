import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  res: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")
         .subscribe(
      result => {
        this.res = result;
      },
      error => {
        console.log("hay problemas");
      }
    );
  }

}
