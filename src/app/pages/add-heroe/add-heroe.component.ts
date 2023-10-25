import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent implements OnInit{

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    }
  ];

  hero: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  };

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    this.route.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroeById(id))
      )
      .subscribe(data => {
        this.hero = data;
      })
  }


  saveHero(){
    if(this.hero.superhero.trim().length === 0){
      return;
    }

    if(this.hero.id){
      this.heroesService.editHero(this.hero).subscribe(resp => {
        console.log(resp);
      })
    }else{
      this.heroesService.addHero(this.hero).subscribe(hero => {
        this.router.navigate(['', hero.id]);
      })
    }



  }

}
