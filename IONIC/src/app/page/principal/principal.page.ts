import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  email: string = "";
  pass: number = 0;
  valor: number = 0;
  public map!: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/dark-v11';
  public mapVisible: boolean = false; // Controla la visibilidad del mapa

  constructor(
    private firebase: FirebaseService,
    private Router: Router,
    private activate: ActivatedRoute,
    private actionSheetController: ActionSheetController
  ) {
    this.activate.queryParams.subscribe(params => {
      this.email = params['email'];
      this.pass = params['password'];
      this.valor = params['valor'];
      console.log(this.email, this.pass);
    });

    (mapboxgl as any).accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {}

  async logout() {
    await this.firebase.logout();
    this.Router.navigateByUrl('login');
  }

  ionViewWillEnter() {
    if (this.mapVisible && !this.map) { // Solo construye el mapa si es visible y no existe
      this.buildMap();
    }
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapa-box', // Asegúrate de que este ID coincida
      style: this.style,
      zoom: 14,
      center: [-70.6168669, -33.500581]
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Mostrar Mapa',
          handler: () => {
            this.showMap();
          },
        },
        {
          text: 'Más información',
          handler: () => {
            console.log('Más información clicked');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  showMap() {
    this.mapVisible = true; // Cambia la visibilidad del mapa
    this.buildMap(); // Crea el mapa si no existe
  }

  navigateToCuenta() {
    this.Router.navigate(['/cuenta']); // Cambia '/account' según tu ruta
  }
  
  navigateToSettings() {
    this.Router.navigate(['/settings']); // Cambia '/settings' según tu ruta
  }
  
  navigateToAbout() {
    this.Router.navigate(['/about']); // Cambia '/about' según tu ruta
  }
  
  navigateToContact() {
    this.Router.navigate(['/contact']); // Cambia '/contact' según tu ruta
  }
}
