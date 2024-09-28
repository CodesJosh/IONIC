import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor(private firebase:FirebaseService, private Router:Router) { }

  ngOnInit() {
  }

  email=""
  password=""

  async registro(){
    const usuario=await this.firebase.registrar(this.email, this.password)
    console.log(usuario);
    this.Router.navigateByUrl("login");
  }
}
