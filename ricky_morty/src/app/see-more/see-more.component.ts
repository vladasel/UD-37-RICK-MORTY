import { Component, OnInit } from '@angular/core';
import { CharacService } from '../charac.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  id: string | null = "";
  res: any = null;


  constructor(private cServ: CharacService,private route:ActivatedRoute) { }

  ngOnInit(){


      this.route.queryParams
      .subscribe(params => {
        this.id = params['id'];
      }
    );

    this.cServ.retornar(this.id)
    .subscribe(result => this.res = result);

  }




}
