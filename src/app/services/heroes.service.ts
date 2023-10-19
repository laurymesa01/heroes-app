import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: string = 'http://localhost:3000/heroes'

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}`);
  }

  getHeroeById(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.url}/${id}`);
  }
}
