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
    this.cServ.retornar()
         .subscribe( result => this.res = result);
  }

}
