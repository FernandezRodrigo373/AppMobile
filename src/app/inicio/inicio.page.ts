import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  username: string;

  constructor() {
    // Puedes establecer el nombre del usuario aquí o recibirlo desde algún servicio
    this.username = 'Usuario'; // Cambia esto según la lógica de tu aplicación
  }
}