import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { Jugador1Component } from './jugador1/jugador1.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { CarreraService } from './carrera.service'; 
@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    Jugador1Component,
    MaquinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarreraService], // CarreraService como proveedor
  bootstrap: [AppComponent]
})
export class AppModule { }