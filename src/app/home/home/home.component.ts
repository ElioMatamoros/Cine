import { Component, OnInit } from '@angular/core';
import {ServicioPeliculasService} from '../../servicios/servicio-peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  peliculas: any;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServicioPeliculasService) {
    _service.getPeliculas().subscribe(pelicula1 => {
      this.peliculas = pelicula1;
    });
  }
  ngOnInit() {
  }

}
