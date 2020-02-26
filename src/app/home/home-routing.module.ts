import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PeliculaComponent} from './pelicula/pelicula.component';
import {AuthGuard} from '../guards/AuthGuard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'pelicula/:id', component: PeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
