import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipo;

  constructor(private $equipos: EquiposService) { }

  ngOnInit(): void {
  }

  buscarEquipo(equipoBuscado){
    this.$equipos.buscarEquipo(equipoBuscado.value)
      .subscribe(datosEquipo =>{
        console.log(datosEquipo.teams[0]);
        this.equipo = datosEquipo.teams[0];
      })
  }



}
