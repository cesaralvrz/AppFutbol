import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LigasService } from 'src/app/servicios/ligas.service';

@Component({
  selector: 'app-detalle-liga',
  templateUrl: './detalle-liga.component.html',
  styleUrls: ['./detalle-liga.component.css']
})
export class DetalleLigaComponent implements OnInit {

  ligaa;
  id;

  constructor(private ligasService: LigasService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Recupero parámetro id de la URL

    this.ligasService.devolverLiga()
      .subscribe( datos => {
        console.log(datos);
        console.log(this.id);
        this.ligaa = datos;
      });
  }
  volver(){
    this.location.back();
  }

}
