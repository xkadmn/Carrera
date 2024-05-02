import { Component } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-jugador1',
  templateUrl: './jugador1.component.html',
  styleUrls: ['./jugador1.component.css']
})
export class Jugador1Component {
  constructor(private carreraService: CarreraService) { }

  get jugador1Nafta() {
    return this.carreraService.jugador1Nafta;
  }

  get jugador1Distancia() {
    return this.carreraService.jugador1Distancia;
  }

  cargarNaftaJugador1() {
    this.carreraService.cargarNaftaJugador1();
  }
  
  acelerarJugador1() {
    // Inicia  intervalo para avanzar  jugador1
    setInterval(() => {
      if (this.carreraService.jugador1Nafta > 0) {
        this.carreraService.avanzarJugador1();
      }
    }, 1000); // Cambia el intervalo según velocidad
  }
}