import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  user: any;

  constructor(private router: Router) {
    // Inicializa el usuario con datos de ejemplo
    this.user = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com'
    };
  }

  ngOnInit() {}

  updateProfile() {
    // Aquí implementa la lógica para actualizar el perfil
    console.log('Perfil actualizado:', this.user);
    
    // Redirige de vuelta a la vista de cuenta
    this.router.navigate(['/cuenta']);
  }
}
