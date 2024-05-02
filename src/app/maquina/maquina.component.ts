
import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {
  carreraComenzada: boolean = false; // Variable para indicar si la carrera ha comenzado
  constructor(private carreraService: CarreraService) { }
  
  ngOnInit(): void {
    // Obtener el estado de carreraComenzada al inicializar el componente
    this.carreraComenzada = this.carreraService.getCarreraComenzada();
  }


  get nafta() {
    return this.carreraService.nafta;
  }

  get distancia() {
    return this.carreraService.distancia;
  }
  
  comenzarCarrera() {
    this.carreraService.setCarreraComenzada(true); // Establecer carreraComenzada en true
    this.carreraComenzada = true; // Actualizar el estado local de carreraComenzada
  }

  cargarNafta() {
    this.carreraService.cargarNafta();
  }

}