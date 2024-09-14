import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email: string=""
  pass: number=0
  valor: number=0

 //dark-v11 \ light-v11
 
  public map!: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/dark-v11';

  constructor(private firebase:FirebaseService, private Router: Router, private activate:ActivatedRoute) { 
    this.activate.queryParams.subscribe(params => {
    this.email=params['email'];
    this.pass=params['password'];
    this.valor=params['valor']; 
    console.log(this.email, this.pass);
    }),

    (mapboxgl as any).accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() {
    this.buildMap();
  }

  async logout(){
    await this.firebase.logout();
    this.Router.navigateByUrl('login')
  }

  ionViewWillEnter(){
    if(!this.map){
      this.buildMap();
    }
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'mapa-box',
      style: this.style,
      zoom: 14,
      center: [
        -70.6168669,
        -33.500581
      ]

    })
  }
}
