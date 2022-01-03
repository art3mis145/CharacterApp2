import { Injectable } from '@angular/core';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    public route: Router,
    public db: AngularFirestore
  ) {}
  create(email: any, password: any) {
    this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      if (user) {
        this.route.navigate(['/home']);
      } else {
        alert('Error');
        this.route.navigate(['/register']);
      }
    });
  }
  logout() {
    this.auth.signOut().then(() => this.route.navigate(['']));
  }
  loginEmailandPassword(email: any, password: any) {
    this.auth.signInWithEmailAndPassword(email, password).then((user) => {
      if (user) {
        this.route.navigate(['/home']);
      } else {
        alert('Error');
      }
    });
  }
  loginWithGG() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this.route.navigate(['/home']));
  }
}
