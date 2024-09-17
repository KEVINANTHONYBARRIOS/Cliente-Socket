import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombre: string = '';

  constructor(private router: Router) {}

  entrar() {
    // Guardar el nombre en el localStorage para que esté disponible en el chat
    localStorage.setItem('nombreUsuario', this.nombre);
    // Redirigir al chat
    this.router.navigate(['/chat']);
  }
}