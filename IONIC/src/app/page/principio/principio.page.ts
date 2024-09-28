import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-principio',
  templateUrl: './principio.page.html',
  styleUrls: ['./principio.page.scss'],
})
export class PrincipioPage implements OnInit {

  email: string = "";
  pass: number = 0;
  valor: number = 0;

  constructor(private firebase: FirebaseService, private Router: Router, private activate: ActivatedRoute) { 
    this.activate.queryParams.subscribe(params => {
      this.email = params['email'];
      this.pass = params['password'];
      this.valor = params['valor']; 
      console.log(this.email, this.pass);
    });
  }

  ngOnInit() {
  }

  async logout() {
    await this.firebase.logout();
    this.Router.navigateByUrl('login');
  }
  buscar() {
 
    this.Router.navigate(['/principal']);// Reemplaza 'nombre-de-tu-pagina' con la ruta de tu página
    
    // Aquí puedes agregar la lógica para la búsqueda
  }
}
