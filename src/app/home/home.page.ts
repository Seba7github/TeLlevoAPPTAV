import { Component, AfterViewInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AuthService } from '../Servicios/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements AfterViewInit {
  user = {
    usuario: '',
    password: '',
  };

  msj = '';
  carga = false;

  constructor(
    private router: Router,
    private animation: AnimationController,
    private auth: AuthService
  ) {}

  conectar() {
    if (this.user.usuario.length > 0 && this.user.password.length > 0) {
      this.auth.login(this.user.usuario, this.user.password).then((res) => {
        if (res) {
          let navigationExtras: NavigationExtras = {
            state: { user: this.user },
          };
          this.carga = true;
          
          const loginAnimacion = this.animacionLogin();
          if (loginAnimacion) {
            loginAnimacion.play(); 
          }

          this.msj = 'Conexion Exitosa';
          /* setTimeout permite generar un delay en MS */
          setTimeout(() => {
            this.router.navigate(['/perfil'], navigationExtras);
            this.msj = '';
            this.carga = false;
          }, 1500);
        } else {
          this.msj = 'Credenciales erroneas';
        }
      });
    } else {
      this.msj = 'Credenciales no pueden estar vacias';
    }
  }

  ngAfterViewInit() {
    this.animacion();

    
  }
  
  animacion() {
    const imagen = document.querySelector(
      '#container ion-card ion-card-header ion-img'
    ) as HTMLElement;
  
    if (imagen) {
      const animacion = this.animation
        .create()
        .addElement(imagen)
        .duration(5000) 
        .iterations(Infinity) 
        .direction('alternate') 
        .keyframes([
          {
            offset: 0, 
            border: '5px solid white',
            boxShadow: '0 0 3px 5px rgb(0, 251, 255)', 
          },
          {
            offset: 0.2, 
            border: '7px solid cyan',
            boxShadow: '0 0 5px 5px rgb(255, 255, 255)',
          },
          {
            offset: 1,
            border: '5px solid white',
            boxShadow: '0 0 3px 5px rgb(0, 251, 255)', 
          },
        ]);
  
      animacion.play();
    } else {
      console.warn('No se encontró el elemento para animar.');
    }
  }
  
  
  animacionLogin() {
    const imagen = document.querySelector(
      '#container ion-card ion-card-header ion-img'
    ) as HTMLElement;

    if (imagen) {
      const animacion = this.animation
        .create()
        .addElement(imagen)
        .duration(6000)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'rotateY(0deg)' },
          { offset: 1, transform: 'rotateY(180deg)' },
          { offset: 1, transform: 'rotateY(0deg)' },
        ]);

      return animacion;
    } else {
      console.warn('No se encontró el elemento para animar.');
      return null; 
    }
  }
}