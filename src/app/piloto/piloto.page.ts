import { Component } from '@angular/core';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.page.html',
  styleUrls: ['./piloto.page.scss'],
  standalone:false
})
export class PilotoPage {
  
  destino: string = '';
  tarifa: number = 0;
  

  viajesDisponibles: { destino: string, tarifa: number }[] = [];

  constructor() { }

  
  agregarViaje() {
    if (this.destino && this.tarifa > 0) {
      this.viajesDisponibles.push({ destino: this.destino, tarifa: this.tarifa });
      this.destino = '';  
      this.tarifa = 0;
    } else {
      alert('Por favor, ingresa un destino y una tarifa válidos.');
    }
  }

  
  confirmarViaje(viaje: { destino: string, tarifa: number }) {
    console.log(`Viaje confirmado a ${viaje.destino} con una tarifa de ${viaje.tarifa} por pasajero.`);
  }
}

