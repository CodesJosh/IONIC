import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebase:AngularFireAuth, private firestore: AngularFirestore) { }

  async auth(email:string,password:string) {
    const request=await this.firebase.signInWithEmailAndPassword(email,password)
    return request
  }
    
  async logout(){
    await this.firebase.signOut();
  }

  async registrar(email: string, password: string, name: string) {
    const request = await this.firebase.createUserWithEmailAndPassword(email, password);
    await this.firestore.collection('users').doc(request.user.uid).set({ name, email });
    return request;
  }
  

  async recuperar(email:string){
    const request=await this.firebase.sendPasswordResetEmail(email)
    return request
  }

  async updateUserProfile(userId: string, userData: { name: string, email: string }) {
    return await this.firestore.collection('users').doc(userId).update(userData);
  }
}
