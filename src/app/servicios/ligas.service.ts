import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import { Liga } from '../modelos/liga.model';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  listaLigas: Liga[];

  constructor(private firestore: AngularFirestore) { }

  obtenerLigas(): Observable<any[]>{
    return this.firestore.collection('ligas').snapshotChanges();
  }

  // Aquí ahora hay que llamar a la API para sacar la información
  obtenerLiga(id){
    return this.listaLigas.find(listaLigas => listaLigas.id === id);
  }
}
