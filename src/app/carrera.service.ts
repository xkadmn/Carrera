import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  nafta: number = 50;
  distancia: number = 0;
  jugador1Nafta: number = 50;
  jugador1Distancia: number = 0;
  carreraTerminada: boolean = false;
  carreraComenzada: boolean = false; // Nueva propiedad para indicar si la carrera ha comenzado

  constructor() { }
  // Métodos para establecer y obtener el estado de carreraComenzada
  setCarreraComenzada(value: boolean) {
    this.carreraComenzada = value;
  }

  getCarreraComenzada() {
    return this.carreraComenzada;
  }
  
  cargarNafta() {
    this.nafta = 50;
  }

  cargarNaftaJugador1() {
    this.jugador1Nafta = 50;
  }

  avanzarCarrera() {
    if (!this.carreraTerminada && this.nafta > 1) {
      this.distancia += Math.floor(Math.random() * 9) + 1;
      this.nafta -= this.distancia / 6;

      if (this.nafta < 1) {
        this.cargarNafta();
      }

      if (this.distancia >= 200) {
        this.carreraTerminada = true;
      }
    }
  }
  avanzarJugador1() {
    if (!this.carreraTerminada && this.jugador1Nafta > 1) {
      // Incrementa la distancia del jugador1
      this.jugador1Distancia += Math.floor(Math.random() * 9) + 1;
      // Descuenta la nafta del jugador1
      this.jugador1Nafta -= this.jugador1Distancia / 6;
  
      // Verifica si la nafta del jugador1 llega a 0s
      if (this.jugador1Nafta < 1) {
        this.jugador1Nafta = 0; // Establece la nafta del jugador1 en 0
        //
      }
  
      // Verifica si el jugador1 llega a la meta y termina la carrera si es así
      if (this.jugador1Distancia >= 200) {
        this.carreraTerminada = true;
      }
    }
  }
  avanzarMaquina() {
    if (!this.carreraTerminada && this.nafta === 50) {
      // 
    }
  }
}