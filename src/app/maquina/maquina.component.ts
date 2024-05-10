import { Component, Input } from '@angular/core';
import { CarreraService } from '../carrera.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css'],
  animations: [
    trigger('moveDerecha', [
      state('true', style({
        transform: 'translateX({{ translateXValue }}%)' // Mueve la imagen hacia la derecha con un valor porcentual
      }), { params: { translateXValue: 0 } }),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class MaquinaComponent {
  @Input() carreraComenzada: boolean = false;
  distanciaRecorrida: number = 0;
  distanciaTotal: number = 200; // Suponiendo una distancia total de 200 unidades
  contenedorAncho: number = 340; // Ancho del contenedor padre en píxeles
  ngOnInit(): void {
    // Calcula la distancia recorrida inicialmente
    this.distanciaRecorrida = this.distancia; // Asegúrate de que distanciaRecorrida se inicialice correctamente
  }
  
  constructor(private carreraService: CarreraService) { }

  get nafta() {
    return this.carreraService.nafta;
  }

  get distancia() {
    return this.carreraService.distancia;
  }

  calcularTranslateX(): number {
    // Calcula el porcentaje de avance basado en la distancia recorrida
    const porcentajeAvance = (this.distancia / 200) * 100;
    // Ajusta el porcentaje para que la imagen termine en el extremo derecho del contenedor
    return porcentajeAvance * (this.contenedorAncho / 100);
  }

  get imagenMaquina(): string {
    return this.carreraComenzada ? 'https://i.gifer.com/ZJFD.gif' : 'https://i.gifer.com/Pw0b.gif';
  }

  cargarNafta() {
    this.carreraService.cargarNafta();
  }
}