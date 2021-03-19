import { Component, OnInit } from '@angular/core';
import { LigasService } from 'src/app/servicios/ligas.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  listadoLigas;

  constructor(private ligasService: LigasService) { }


  ngOnInit(): void {
    this.ligasService.obtenerLigas()
    .subscribe(ligas => {
      this.listadoLigas = ligas.map (t => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data()
        };
      })
    }
    )
  }

}
