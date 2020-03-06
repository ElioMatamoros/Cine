import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicioPeliculasService} from '../../servicios/servicio-peliculas.service';
import {ServicioEntradaService} from '../../servicios/servicio-entrada.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Pelicula} from '../../interfaces/Pelicula';
import {Entrada} from '../../interfaces/Entrada';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  error: boolean;
  msgError: string;

  nCredito: string;
  peliID: string;
  pelicula: Pelicula;
  peliculas: any;
  hora: any;
  acompanyantes: any = 0;
  entradas: any;
  asientos = [];
  sitio: any;
  existe = false;
  precio: any;
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
  constructor( private modalService: NgbModal  , private _service: ServicioPeliculasService, activateRoute: ActivatedRoute,   private _sanitizer: DomSanitizer, private _service1: ServicioEntradaService) {
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
    this.sitio = '';
    this.precio = '';
    this.asientos = [];
    this.entrada.nombrePelicula = this.pelicula.nombre;
    this.entrada.horaPelicula = this.hora;
    this.entrada.sala = this.pelicula.sala;
    this.entrada.acompanyantes = this.acompanyantes;

    if (this.entrada.acompanyantes === 0) {
      this.entrada.precio = 5;
      this.precio = 'El precio de la entrada son 5 euros';
    } else {
      this.entrada.precio = ((this.entrada.acompanyantes * 5) + 5);
      this.precio = 'El precio de las entradas son ' + ((this.entrada.acompanyantes * 5) + 5) + ' euros';
    }

    // tslint:disable-next-line:no-conditional-assignment
    if (this.acompanyantes === '0') {


      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[0]);
          }
        }
      }
      this.sitio = 'Tu sitio en la sala ' + this.entrada.sala  + ' es el asiento ' + this.asientos[0];

    }
    // tslint:disable-next-line:triple-equals
    if (this.acompanyantes == 0) {
      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      console.log('Primer numero ' + this.asientos[0]);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[0]);
          }
        }
      }
      this.sitio = 'Tu sitio en la sala ' + this.entrada.sala  + ' es el asiento ' + this.asientos[0];

    }
    if (this.acompanyantes === '1' ) {
      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[0]);
          }
        }
      }
      this.asientos[1] = this.asientos[0] + 1;
      let j;
      for ( j = 0 ; j < this.entradas.length ; j++) {
        if (this.entradas[j].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[j].asiento == this.asientos[1]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[1] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[1]);
          }
        }
      }

      this.sitio = 'Tus sitio en la sala ' + this.entrada.sala  + ' son los asientos ' + this.asientos[0] + ',' + this.asientos[1] ; }

    if (this.acompanyantes === '2') {
      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[0]);
          }
        }
      }
      this.asientos[1] = this.asientos[0] + 1;
      let j;
      for ( j = 0 ; j < this.entradas.length ; j++) {
        if (this.entradas[j].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[j].asiento == this.asientos[1]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[1] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[1]);
          }
        }
      }
      this.asientos[2] = this.asientos[1] + 1;
      let h;
      for ( h = 0 ; h < this.entradas.length ; h++) {
        if (this.entradas[h].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[h].asiento == this.asientos[2]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[2] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[2]);
          }
        }
      }
      this.sitio = 'Tus sitio en la sala ' + this.entrada.sala  + ' son los asientos ' + this.asientos[0] + ',' + this.asientos[1] + ',' + this.asientos[2]; }
    if (this.acompanyantes === '3') {
      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[0]);
          }
        }
      }
      this.asientos[1] = this.asientos[0] + 1;
      let j;
      for ( j = 0 ; j < this.entradas.length ; j++) {
        if (this.entradas[j].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[j].asiento == this.asientos[1]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[1] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[1]);
          }
        }
      }
      this.asientos[2] = this.asientos[1] + 1;
      let h;
      for ( h = 0 ; h < this.entradas.length ; h++) {
        if (this.entradas[h].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[h].asiento == this.asientos[2]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[2] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[2]);
          }
        }
      }
      this.asientos[3] = this.asientos[2] + 1;
      let a;
      for ( a = 0 ; a < this.entradas.length ; a++) {
        if (this.entradas[a].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[a].asiento == this.asientos[3]) {
            this.existe = true;
            console.log('asientos iguales');
            this.asientos[3] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero ' + this.asientos[3]);
          }
        }
      }
      this.sitio = 'Tus sitio en la sala ' + this.entrada.sala  + ' son los asientos ' + this.asientos[0] + ',' + this.asientos[1] + ',' + this.asientos[2] + ',' + this.asientos[3]; }
    // tslint:disable-next-line:triple-equals
    if (this.acompanyantes === '4') {
      this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
      let i;
      for ( i = 0 ; i < this.entradas.length ; i++) {
        if (this.entradas[i].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[i].asiento == this.asientos[0]) {
            this.existe = true;
            console.log('Primer asiento igual');
            this.asientos[0] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero del primer asiento ' + this.asientos[0]);
          }
        }
      }
      this.asientos[1] = this.asientos[0] + 1;
      let j;
      for ( j = 0 ; j < this.entradas.length ; j++) {
        if (this.entradas[j].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[j].asiento == this.asientos[1]) {
            this.existe = true;
            console.log('Segundo asiento igual');
            this.asientos[1] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero del segundo asiento ' + this.asientos[1]);
          }
        }
      }
      this.asientos[2] = this.asientos[1] + 1;
      let h;
      for ( h = 0 ; h < this.entradas.length ; h++) {
        if (this.entradas[h].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[h].asiento == this.asientos[2]) {
            this.existe = true;
            console.log('Tercer asiento igual');
            this.asientos[2] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero del tercer asiento ' + this.asientos[2]);
          }
        }
      }
      this.asientos[3] = this.asientos[2] + 1;
      let a;
      for ( a = 0 ; a < this.entradas.length ; a++) {
        if (this.entradas[a].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[a].asiento == this.asientos[3]) {
            this.existe = true;
            console.log('Cuarto asiento igual');
            this.asientos[3] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero del cuarto asiento' + this.asientos[3]);
          }
        }
      }
      this.asientos[4] = this.asientos[3] + 1;
      let b;
      for ( b = 0 ; b < this.entradas.length ; b++) {
        if (this.entradas[b].horaPelicula === this.entrada.horaPelicula) {
          // tslint:disable-next-line:triple-equals
          while (this.entradas[b].asiento == this.asientos[4]) {
            this.existe = true;
            console.log('Quinto asient igual');
            this.asientos[4] = Math.floor(Math.random() * ((56 + 1) - 1) + 1);
            console.log('Segundo numero del quinto asiento ' + this.asientos[4]);
          }
        }
      }
      this.sitio = 'Tus sitio en la sala ' + this.entrada.sala  + ' son los asientos ' + this.asientos[0] + ',' + this.asientos[1] + ',' + this.asientos[2] + ',' + this.asientos[3] + ',' + this.asientos[4]; }

    // @ts-ignore
    this.entrada.asiento = this.asientos;


  }

  compraEntrada(modal) {
    this.error = false;
    this.nCredito = '';
    this.msgError = '';
    this.addEntrada();
    this.modalService.open(modal);
  }
  compruebaNumero() {
    this.error = false;
    this.msgError = '';
    if ( this.nCredito === '' || this.nCredito == null || this.nCredito.length !=20 ) {
      this.error = true;
      this.msgError = 'El numero de la tarjeta de credito está compuesto de 20 dígitos';
    } else {
      this._service1.addEntrada(this.entrada);
      this.modalService.dismissAll();
    }
    this.nCredito = '';
  }
}
