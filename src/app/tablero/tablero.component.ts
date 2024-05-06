import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  tiempo: number = 0;
  carreraTerminada: boolean = false;
  ganador: string = ''; // Variable para almacenar el nombre del jugador ganador
  carreraComenzada: boolean = false; // Declara la propiedad carreraComenzada aquí

  constructor(private carreraService: CarreraService) { }

  ngOnInit(): void {
  }

  comenzarCarrera() {
    console.log('Carrera comenzada!');
    this.carreraService.setCarreraComenzada(true); // Establecer carreraComenzada en true
    this.carreraComenzada = true; // Actualizar carreraComenzada en el componente
    this.iniciarContador();
    this.iniciarCarrera();
  }

  iniciarContador() {
    setInterval(() => {
      if (!this.carreraTerminada) {
        this.tiempo++;
      }
    }, 1000);
  }

  iniciarCarrera() {
    setInterval(() => {
      if (!this.carreraTerminada) {
        this.carreraService.avanzarCarrera();
        
        if (this.carreraService.jugador1Distancia >= 200) {
          this.carreraTerminada = true;
          this.ganador = 'Jugador 1';
        } else if (this.carreraService.distancia >= 200) {
          this.carreraTerminada = true;
          this.ganador = 'Máquina';
        }
      }
    }, 1000);
  }
  
  acelerarJugador1() {
    this.carreraService.avanzarJugador1();
  }
  
  cargarNaftaJugador1() {
    this.carreraService.cargarNaftaJugador1();
  }
}