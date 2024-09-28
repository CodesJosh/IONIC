import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private firebase:FirebaseService, private Router:Router) { }

    email=""
    
  ngOnInit() {
  }

  async recuperar(){
    let usuario=await this.firebase.recuperar(this.email);
    console.log(usuario);
    this.Router.navigateByUrl("login");
  }
}
