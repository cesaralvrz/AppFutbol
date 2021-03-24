import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor(private http: HttpClient) { }

  buscarEquipo(nombre:string): Observable<any>{
    return this.http.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + nombre);
  }
}
