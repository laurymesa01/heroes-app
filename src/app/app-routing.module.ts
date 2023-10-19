import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { SearchComponent } from './pages/search/search.component';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'heroes',
        component: HeroesListComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'add',
        component: AddHeroeComponent
      },
      {
        path: 'edit/:id',
        component: AddHeroeComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'heroes'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
