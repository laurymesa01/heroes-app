import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  termino: string = '';
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService){}

  searchHoeroes(){
    this.heroesService.searchHero(this.termino).subscribe(heroes => {
      this.heroes = heroes;
    })
  }

}
