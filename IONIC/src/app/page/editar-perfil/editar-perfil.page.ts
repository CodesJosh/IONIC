import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  user: any = {};

  constructor(private router: Router, private auth: AngularFireAuth, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.auth.user.subscribe(user =>{
      if (user) {
        this.loadUserProfile(user.uid);
      }
    });
  }

  async loadUserProfile(userId: string) {
    const userDoc = await this.firebaseService.firestore.collection('user').doc(userId).get().toPromise();
    this.user = userDoc.data();
  }

  updateProfile() {
    const userId = (await this.auth.currentUser).uid;
    await this.firebaseService.updateUserProfile(userId,this.user);
    console.log('Perfil actualizado:', this.user);
    
    this.router.navigate(['/cuenta']);
  }
}
