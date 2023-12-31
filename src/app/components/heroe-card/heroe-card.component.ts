import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {

  @Input() heroe!: Heroe;

}
