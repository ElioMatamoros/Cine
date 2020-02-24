import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Pelicula} from '../interfaces/Pelicula';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculasService {

  private itemsCollection: AngularFirestoreCollection<Pelicula>;
  peliculas: Observable<Pelicula[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Pelicula>('Pelicula');
    this.peliculas = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Pelicula;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }


  getPeliculas() {
    return this.peliculas;
  }

}


