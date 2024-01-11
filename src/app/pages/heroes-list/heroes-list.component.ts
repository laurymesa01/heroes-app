import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit{

  @Input() hero: Heroe[] = [];

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router){}

  ngOnInit(){
    if (this.router.url.includes('search')) {
      this.heroes = this.hero;
    }
    else{
      this.heroesService.getHeroes().subscribe(heroes => {
        console.log(heroes);
        this.heroes = heroes;
      })
    }
  }

}
