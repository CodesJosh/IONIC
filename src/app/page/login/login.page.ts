import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicio/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email=""
  password=""

  constructor(private firebase:FirebaseService, private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
  }

  async login(){
    try {
      let usuario=await this.firebase.auth(this.email,this.password);
      console.log(usuario);
      const navigationextras:NavigationExtras = {
        queryParams: {email: this.email, password: this.password}
      };
      this.router.navigate(['/principal'], navigationextras);
    } catch (error) {
      console.log(error);
      this.popalert();
    }
  }

    async popalert(){
      const alert = await this.alertcontroller.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['Ok']
      })
      await alert.present();
    }


}
