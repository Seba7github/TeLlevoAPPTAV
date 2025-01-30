import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseURL = 'https://hz9h10lj-3000.brs.devtunnels.ms/';
  private http: HttpClient = inject(HttpClient);
  constructor() {}

  login(username: string): Observable<any> {
    return this.http
      .get(this.baseURL + '/users?username=' + username)
      .pipe(retry(3));
  }

  register(data: any): Observable<any> {
    return this.http.post(this.baseURL + '/users', data).pipe(retry(3));
  }

  eliminarUsuario(username: string): Observable<any> {
    return this.http
      .delete(this.baseURL + '/users?username=' + username)
      .pipe(retry(3));
  }

  listarUsuarios(): Observable<any> {
    return this.http.get(this.baseURL + '/users').pipe(retry(3));
  }

  updateUserPassword(user: any): Observable<any> {
    return this.http.put(`${this.baseURL}/usuarios/${user.id}`, user);  
  }
}
