
import { Component, Input } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent {
  @Input() carreraComenzada: boolean = false;

  constructor(private carreraService: CarreraService) { }

  get nafta() {
    return this.carreraService.nafta;
  }

  get distancia() {
    return this.carreraService.distancia;
  }

  get imagenMaquina(): string {
    return this.carreraComenzada ? 'https://i.gifer.com/ZJFD.gif' : 'https://i.gifer.com/Pw0b.gif';
  }

  cargarNafta() {
    this.carreraService.cargarNafta();
  }
}