import { Component, OnInit } from '@angular/core';
import {ServicioPeliculasService} from '../../servicios/servicio-peliculas.service';
import { ActivatedRoute } from '@angular/router';
import {Pelicula} from '../../interfaces/Pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  peliID: string;
  pelicula: Pelicula;
  peliculas: any;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServicioPeliculasService, activateRoute: ActivatedRoute,   private _sanitizer: DomSanitizer) {
    this.peliID = activateRoute.snapshot.params['id'];
    _service.getPeliculas().subscribe(pelicula1 => {
      this.peliculas = pelicula1;
      this.pelicula = this.peliculas[this.peliID];
    });

  }

  ngOnInit() {
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }



}
