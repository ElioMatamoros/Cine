import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicioPeliculasService} from '../../servicios/servicio-peliculas.service';
import {ServicioEntradaService} from '../../servicios/servicio-entrada.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Pelicula} from '../../interfaces/Pelicula';
import {Entrada} from '../../interfaces/Entrada';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  peliID: string;
  pelicula: Pelicula;
  peliculas: any;
  hora: any;
  acompanyantes: any = 0;
  entradas: any;
  asientos = [];

entrada: Entrada = {
  id: '0',
  nombrePelicula: '',
  acompanyantes: 0,
  horaPelicula: '',
  sala: 1,
  precio: 5,
  asiento: []
};

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _service: ServicioPeliculasService, activateRoute: ActivatedRoute,   private _sanitizer: DomSanitizer, private _service1: ServicioEntradaService) {
    _service1.getEntradas().subscribe(entrada1 => {
      this.entradas = entrada1;
      this.entrada.id = this.entradas.length;
    });
    this.peliID = activateRoute.snapshot.params.id;
    this.hora = activateRoute.snapshot.params.hora;
    _service.getPeliculas().subscribe(pelicula1 => {
      this.peliculas = pelicula1;
      this.pelicula = this.peliculas[this.peliID];
    });


  }

  ngOnInit() {
  }

  addEntrada() {

    this.entrada.nombrePelicula = this.pelicula.nombre;
    this.entrada.horaPelicula = this.hora;
    this.entrada.sala = this.pelicula.sala;
    this.entrada.acompanyantes = this.acompanyantes;

    if (this.entrada.acompanyantes === 0) {
      this.entrada.precio = 5;
    } else {
      this.entrada.precio = this.entrada.acompanyantes * 5;
    }
    // tslint:disable-next-line:no-conditional-assignment
    if (this.acompanyantes === 0) { this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 0) + 0); }
    if (this.acompanyantes === '1' ) {this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 0) + 0);
                                      this.asientos[1] = this.asientos[0] + 1; }

    if (this.acompanyantes === '2') { this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 0) + 0);
                                      this.asientos[1] = this.asientos[0] + 1;
                                      this.asientos[2] = this.asientos[1] + 1; }
    if (this.acompanyantes === '3') { this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 0) + 0);
                                      this.asientos[1] = this.asientos[0] + 1;
                                      this.asientos[2] = this.asientos[1] + 1;
                                      this.asientos[3] = this.asientos[2] + 1; }
    if (this.acompanyantes === '4') { this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 0) + 0);
                                      this.asientos[1] = this.asientos[0] + 1;
                                      this.asientos[2] = this.asientos[1] + 1;
                                      this.asientos[3] = this.asientos[2] + 1;
                                      this.asientos[4] = this.asientos[3] + 1; }

    // @ts-ignore
    this.entrada.asiento = this.asientos;
    this._service1.addEntrada(this.entrada);
    this.asientos = [];
  }
}
