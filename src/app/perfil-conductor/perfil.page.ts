import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilConductorPage implements OnInit, AfterContentInit {
  user = {
    usuario: '',
    password: '',
  };
  nombreUsuario = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.initMap();
  }

  ngAfterContentInit() {
    if (history.state && history.state.user) {
      this.user = history.state.user;
      this.nombreUsuario = this.user.usuario;
    } else {
      this.user = { usuario: 'Usuario Desconocido', password: '' };
      this.nombreUsuario = this.user.usuario;
    }

   
    const user = this.auth.getUser();
    if (user) {
      this.user = user;
      this.nombreUsuario = this.user.usuario; 
    } else {
      this.user = { usuario: 'Usuario Desconocido', password: '' };
      this.nombreUsuario = this.user.usuario;
    }
  }

  initMap() {
    const map = L.map('map').setView([-33.43292148475801, -70.61553501719746], 13); // Ejemplo: Antonio Varas
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.43292148475801, -70.61553501719746]).addTo(map)
      .bindPopup('¡Hola! PROBABLEMENTE TE ENCUENTRES AQUÍ :D.')
      .openPopup();

      
    
      map.locate({setView: true, maxZoom: 16})


  }



  logout() {
    this.auth.logout();
    this.router.navigate(['/home']);
    this.generarToast('Usuario Desconectado');
  }

  generarToast(message: string) {
    this.toast.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    }).then((res) => {
      res.present();
    });
  }
}
