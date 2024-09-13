import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Asegúrate de importar signOut correctamente
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth);

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.correo, user.clave);
  }

  signOut() {
    return signOut(getAuth()); // Usa signOut directamente
  }
}