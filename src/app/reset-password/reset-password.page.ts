import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetPasswordPage {
  email: string = ''; 
  constructor(private router: Router) {}

  
  volverHome() {
    this.router.navigate(['/home']);
  }

  recoverPassword() {
    if (this.email) {
      console.log('Recuperando contraseña para: ', this.email);
    } else {
      console.log('Por favor, ingresa un correo válido.');
    }
  }
}
