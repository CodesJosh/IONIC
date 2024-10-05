import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {
  user: any = {};

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.auth.user.subscribe(user =>{
      if (user){
        this.loadUserProfile(user.uid);
      }
    });
  }

  async loadUserProfile(UserId: string){
    const userDoc = await this.firebaseService.firestore.collection('users').doc(userId).get().topromise();
    this.user = userDoc.data();
  }

  editProfile() {
    this.router.navigate(['/editar-perfil']);
  }
}
