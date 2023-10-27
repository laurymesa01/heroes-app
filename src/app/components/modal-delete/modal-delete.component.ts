import { Component, Input } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  @Input() modal: boolean = false;
  @Input() hero!: Heroe;

  constructor(private heroesService: HeroesService,
              private router: Router){}


  deleteHero(){
    this.heroesService.deleteHero(this.hero.id!).subscribe(resp => {
      this.router.navigate(['']);
    })
  }
}
