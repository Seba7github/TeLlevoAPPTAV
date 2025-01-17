import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; // Importamos Location

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  showElement: boolean = false;
  
  // Inyectamos Location en el constructor
  constructor(private location: Location) {}
  
  user = {
    usuario: '',
    password: '',
  };
  
  nombreUsuario = '';

  ngOnInit() {}

  ngAfterContentInit() {
    this.user = history.state.user;
    this.nombreUsuario = this.user.usuario;
    setTimeout(() => {
      this.showElement = true; // Después de un tiempo, mostramos el elemento
    }, 1000);
  }

  // Método para regresar a la página anterior
  goBack() {
    this.location.back(); // Esto hace que el navegador regrese a la página anterior
  }
}
