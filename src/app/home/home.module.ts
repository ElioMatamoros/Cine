import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';


@NgModule({
  declarations: [HomeComponent, PeliculaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports : [HomeComponent]
})
export class HomeModule { }
