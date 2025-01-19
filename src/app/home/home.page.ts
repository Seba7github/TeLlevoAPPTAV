import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  user = {
    usuario: '',
    password: '',
  };

  msj = '';
  carga = false;
  constructor(private router: Router, private animation: AnimationController) {}

  conectar() {
    if (this.user.usuario.length > 0 && this.user.password.length > 0) {
      if (
        this.user.usuario == 'secavieres@duocuc.cl' &&
        this.user.password == '1234'
      ) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user },
        };
        this.carga = true;
        this.msj = 'Conexion Exitosa';
        /* setTimeout permite generar un delay en MS */
        setTimeout(() => {
          this.router.navigate(['/perfil'], navigationExtras);
          this.msj = '';
          this.carga = false;
        }, 3000);
      } else {
        this.msj = 'Credenciales erroneas';
      }
    } else {
      this.msj = 'Las credenciales no pueden estar vacias';
    }
  }

  ngAfterContentInit() {
    this.animacionLogin();
  }

  animacionLogin() {
    const imagen = document.querySelector(
      '#container ion-card ion-card-header ion-img'
    ) as HTMLElement;
  
    const animacion = this.animation
      .create()
      .addElement(imagen)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        {
          offset: 0,
          opacity: '1',
          border: '1px solid cyan', // Borde inicial más fino
          boxShadow: '0 0 5px cyan', // Le damos un resplandor suave
          transform: 'scale(1)', // Imagen en su tamaño original
        },
        {
          offset: 0.5,
          opacity: '0.8',
          border: '5px solid cyan', // Borde más grueso a la mitad de la animación
          boxShadow: '0 0 15px 5px cyan', // Aumento del resplandor para simular un brillo
          transform: 'scale(1)', // Imagen sin cambios en tamaño
        },
        {
          offset: 1,
          opacity: '1',
          border: '1px solid cyan', // Borde vuelve al grosor original
          boxShadow: '0 0 5px cyan', // Resplandor más suave
          transform: 'scale(1)', // Imagen sin cambios en tamaño
        },
      ]);
  
    animacion.play();
  }
}
