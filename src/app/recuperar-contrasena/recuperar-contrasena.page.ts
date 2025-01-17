import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: false,
})
export class RecuperarContrasenaPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
   
  }

 
  goBack() {
    this.location.back();  
  }
}
