import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/servicios/jugadores.service';

@Component({
  selector: 'app-goleadores',
  templateUrl: './goleadores.component.html',
  styleUrls: ['./goleadores.component.css']
})
export class GoleadoresComponent implements OnInit {

  jugador;

  constructor(private $jugadores: JugadoresService) { }

  ngOnInit(): void {
  }

  buscarJugador(jugadorBuscado){
    this.$jugadores.buscarJugador(jugadorBuscado.value)
      .subscribe(datosJugador =>{
        console.log(datosJugador.player[0]);
        this.jugador = datosJugador.player[0];
      })
  }

}
