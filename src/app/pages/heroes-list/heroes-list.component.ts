import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService){}

  ngOnInit(){
    this.heroesService.getHeroes().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    })
  }

}
