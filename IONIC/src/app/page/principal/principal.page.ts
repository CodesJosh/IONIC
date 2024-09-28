import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit, OnDestroy {

  email: string = "";
  pass: number = 0;
  valor: number = 0;

  public isMapVisible: boolean = false;

  public map!: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/dark-v11';

  constructor(private firebase: FirebaseService, private Router: Router, private activate: ActivatedRoute) { 
    this.activate.queryParams.subscribe(params => {
      this.email = params['email'];
      this.pass = params['password'];
      this.valor = params['valor']; 
      console.log(this.email, this.pass);
    });

    (mapboxgl as any).accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {
    this.buildMap();
    window.addEventListener('resize', () => this.resizeMap());
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => this.resizeMap());
  }

  async logout() {
    await this.firebase.logout();
    this.Router.navigateByUrl('login');
  }

  ionViewWillEnter() {
    if (!this.map) {
      this.buildMap();
    } else {
      this.resizeMap();
    }
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: [-70.6168669, -33.500581]
    });

    this.map.on('load', () => {
      this.resizeMap();
    });
  }

  resizeMap() {
    if (this.map) {
      this.map.resize();
    }
  }

  toggleMap() {
    this.isMapVisible = !this.isMapVisible; // Cambia la visibilidad del mapa
    if (this.isMapVisible && !this.map) {
      this.buildMap(); // Construye el mapa si se va a mostrar
    } else {
      this.resizeMap(); // Redimensiona el mapa si ya está creado
    }
  }
  
}
