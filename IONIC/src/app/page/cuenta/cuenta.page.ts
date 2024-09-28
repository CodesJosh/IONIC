import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {
  user: any;

  constructor(private router: Router) {
    // Inicializa el usuario con datos de ejemplo
    this.user = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com'
    };
  }

  ngOnInit() {}

  editProfile() {
    // Navegar a la página de editar perfil
    this.router.navigate(['/editar-perfil']);
  }
}
