import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { APIService } from './api.service';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static isLogged: boolean = false;
  private storage: LocalStorageService = new LocalStorageService();
  private api: APIService = new APIService();

  constructor() {}

  // Método de login existente
  login(user: string, pass: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.api.login(user).subscribe((res: any) => {
        if (res.length > 0) {
          if (
            (res[0].username == user || res[0].correo == user) &&
            res[0].pass == pass
          ) {
            this.storage.setItem('conectado', JSON.stringify(res[0]));
            resolve(true);
          } else {
            resolve(false);
            console.log('Credenciales no validas');
          }
        } else {
          console.log('Llamada vacia');
        }
      });
    });
  }

  // Método de registro existente
  registrar(user: string, correo: string, pass: string) {
    const listaUsuarios = this.storage.getItem('users') || [];
    if (
      listaUsuarios.find(
        (userFind: any) =>
          userFind.username == user || userFind.correo == correo
      )
    ) {
      return false;
    }
    const nuevoUsuario = {
      id: listaUsuarios.length + 1,
      username: user,
      correo: correo,
      pass: pass,
    };
    listaUsuarios.push(nuevoUsuario);
    this.storage.setItem('users', listaUsuarios);
    return true;
  }

  // Método de registro con la API
  async registerAPI(
    user: string,
    correo: string,
    pass: string
  ): Promise<boolean> {
    const users = await firstValueFrom(this.api.listarUsuarios());
    const exists =
      users.find((us: any) => us.username == user || us.correo == correo) !=
      null;
    if (exists) {
      return false;
    }

    const nuevoUsuario = {
      id: users.length + 1,
      username: user,
      correo: correo,
      pass: pass,
    };
    await this.api.register(nuevoUsuario).subscribe();

    return true;
  }

  // Método para verificar si el usuario está conectado
  isConnected(): boolean {
    return this.storage.getItem('conectado') !== null;
  }

  // Método para hacer logout
  logout() {
    this.storage.removeItem('conectado');
  }

  // *** NUEVO MÉTODO PARA RESETEAR LA CONTRASEÑA ***

  // Método para restablecer la contraseña
  async resetPassword(correo: string, nuevaPassword: string): Promise<boolean> {
    const users = await firstValueFrom(this.api.listarUsuarios());  // Suponiendo que tienes una API para obtener los usuarios
    const userIndex = users.findIndex((user: any) => user.correo === correo);
    
    if (userIndex === -1) {
      console.log('Correo no encontrado');
      return false; // Si no se encuentra el usuario con ese correo
    }

    // Actualiza la contraseña del usuario
    users[userIndex].pass = nuevaPassword;

    // Aquí puedes enviar los datos actualizados al servidor si lo deseas
    await this.api.updateUserPassword(users[userIndex]).subscribe();

    // Si trabajas con almacenamiento local
    this.storage.setItem('users', users);

    console.log('Contraseña actualizada correctamente');
    return true;
  }
}
