import { Component, Input } from '@angular/core';
import { CarreraService } from '../carrera.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-jugador1',
  templateUrl: './jugador1.component.html',
  styleUrls: ['./jugador1.component.css'],
  animations: [
    trigger('moveRight', [
      state('true', style({
        transform: 'translateX({{ translateXValue }}%)' // Mueve la imagen hacia la derecha con un valor porcentual
      }), { params: { translateXValue: 0 } }),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class Jugador1Component {
  @Input() carreraComenzada: boolean = false;
  acelerarHabilitado: boolean = false; // Nueva propiedad para indicar si el botón de acelerar está habilitado
  contenedorAncho: number = 330; // Ancho del contenedor padre en píxeles
  private intervalo: any; // Almacena el ID del intervalo

  constructor(private carreraService: CarreraService) { }

  get imagenJugador1(): string {
    return this.carreraComenzada ? 'https://i.gifer.com/3F3F.gif' : 'https://i.gifer.com/NCVF.gif';
  }

  acelerarJugador1() {
    if (!this.acelerarHabilitado) {
      this.acelerarHabilitado = true;
      this.avanzarJugador();
    }
  }

  private avanzarJugador() {
    this.intervalo = setInterval(() => {
      if (this.carreraService.jugador1Nafta > 0 && !this.carreraService.carreraTerminada) {
        this.carreraService.avanzarJugador1();
      } else {
        clearInterval(this.intervalo);
        this.acelerarHabilitado = false;
      }
    }, 1000);
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

  // Obtén la distancia acumulada desde el servicio de carrera
  get distancia(): number {
    return this.carreraService.jugador1Distancia;
  }

  calcularTranslateX(): number {
    // Calcula el porcentaje de avance basado en la distancia recorrida
    const porcentajeAvance = (this.distancia / 200) * 100;
    // Ajusta el porcentaje para que la imagen termine en el extremo derecho del contenedor
    return porcentajeAvance * (this.contenedorAncho / 100);
  }
}