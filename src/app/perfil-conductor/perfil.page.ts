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
    // Asegúrate de que history.state.user no sea null
    if (history.state && history.state.user) {
      this.user = history.state.user;
      this.nombreUsuario = this.user.usuario;
    } else {
      // Si no hay usuario en history.state, inicializa un valor predeterminado
      this.user = { usuario: 'Usuario Desconocido', password: '' };
      this.nombreUsuario = this.user.usuario;
    }

    // Obtener el usuario del AuthService de manera segura
    const user = this.auth.getUser();
    if (user) {
      this.user = user;
      this.nombreUsuario = this.user.usuario; // Asignar nombre de usuario desde el AuthService
    } else {
      // Manejo si no hay un usuario conectado
      this.user = { usuario: 'Usuario Desconocido', password: '' };
      this.nombreUsuario = this.user.usuario;
    }
  }

  initMap() {
    // Crear un mapa centrado en una ubicación específica
    const map = L.map('map').setView([-33.43292148475801, -70.61553501719746], 13); // Ejemplo: Antonio Varas

    // Agregar capa de mapa (usando OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar un marcador en el centro
    L.marker([40.7128, -74.0060]).addTo(map)
      .bindPopup('¡Hola! Este es tu marcador.')
      .openPopup();
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
