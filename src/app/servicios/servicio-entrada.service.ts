import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Entrada} from '../interfaces/Entrada';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEntradaService {

  private itemsCollection: AngularFirestoreCollection<Entrada>;
  entradas: Observable<Entrada[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Entrada>('Entrada');
    this.entradas = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Entrada;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  addEntrada(entrada: Entrada) {
    this.itemsCollection.add(entrada);
  }

  getEntradas() {
    return this.entradas;
  }

}
