import { Component } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: false,
})
export class ResetPasswordPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {}

  async resetPassword() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.showToast('Por favor completa todos los campos.');
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden.');
      return;
    }
  
    try {
      const success = await this.authService.resetPassword(this.email, this.password);
      if (success) {
        this.showToast('Contraseña actualizada exitosamente.');
        this.router.navigate(['/home']);  // Redirigir a la página de login
      } else {
        this.showToast('Hubo un problema al actualizar la contraseña.');
      }
    } catch (error) {
      this.showToast('Error al restablecer la contraseña.');
    }
  }
  

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
