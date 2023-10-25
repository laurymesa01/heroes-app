import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(hero: Heroe): string {
    if(!hero.id){
      return '../../assets/no-image.png'
    }

    return `../../assets/heroes/${hero.id}.jpg`;
  }

}
