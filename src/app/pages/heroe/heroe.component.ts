import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{

  hero!: Heroe;

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute,
              private location: Location){}

  ngOnInit(){
    this.route.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroeById(id))
    )
    .subscribe(hero => {
      this.hero = hero;
    })
  }

  goBack(){
    this.location.back()
  }

}
