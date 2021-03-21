import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Liga } from '../modelos/liga.model';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  listaLigas: Liga[];
  id = 4328;

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  public obtenerLigas(): Observable<any[]>{
    //return this.firestore.collection('ligas').snapshotChanges();
    return this.firestore.collection('ligas').snapshotChanges();
  }

  // Aquí ahora hay que llamar a la API para sacar la información

  devolverLiga(){
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=' + this.id);

  }
}
