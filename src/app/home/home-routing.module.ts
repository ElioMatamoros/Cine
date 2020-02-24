import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PeliculaComponent} from './pelicula/pelicula.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'pelicula/:id', component: PeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
