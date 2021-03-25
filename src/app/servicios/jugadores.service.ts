import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }

  buscarJugador(nombre:string): Observable<any>{
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + nombre);
  }
}
