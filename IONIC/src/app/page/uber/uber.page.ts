import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uber',
  templateUrl: './uber.page.html',
  styleUrls: ['./uber.page.scss'],
})
export class UberPage implements OnInit {

  rideOptions = [
    { type: 'Económico', price: 5, description: 'Viaje asequible' },
    { type: 'Confort', price: 10, description: 'Más espacio y comodidad' },
    { type: 'Premium', price: 20, description: 'Viaje de lujo' },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
