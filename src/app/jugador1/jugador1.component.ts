import { Component, Input } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-jugador1',
  templateUrl: './jugador1.component.html',
  styleUrls: ['./jugador1.component.css']
})
export class Jugador1Component {
  @Input() carreraComenzada: boolean = false;
  acelerarHabilitado: boolean = false; // Nueva propiedad para indicar si el botón de acelerar está habilitado


  constructor(private carreraService: CarreraService) { }
  get imagenJugador1(): string {
    return this.carreraComenzada ? 'https://i.gifer.com/3F3F.gif' : 'https://i.gifer.com/NCVF.gif';
  }

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