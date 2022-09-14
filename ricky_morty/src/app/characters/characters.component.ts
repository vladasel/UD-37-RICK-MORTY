import { Component, OnInit } from '@angular/core';

import { CharacService } from '../charac.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  res: any = null;

  constructor(private cServ:CharacService) { }

  ngOnInit(){
    this.cServ.retornar("1,2,3,4,5,6,7,8")
         .subscribe( result => this.res = result);
  }



}
