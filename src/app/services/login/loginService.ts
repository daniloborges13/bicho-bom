import { User } from './../../components/models/model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

import { User as FirebaseUser } from 'firebase/app';
import { cfaSignIn } from 'capacitor-firebase-auth';

import { Capacitor } from '@capacitor/core';

const { platform } = Capacitor;



const { FacebookAuthProvider } = auth;



@Injectable()
export class LoginService {

  user: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async signInFacebook() {
    if (platform === 'web') {
      return await this.angularFireAuth.auth.signInWithPopup(new FacebookAuthProvider());
    } else {
      return await cfaSignIn('facebook.com').toPromise<FirebaseUser>();
    }
  }

  async signOut(): Promise<any> {
    try {
      return this.signOutFirebase();
    } catch (error) {
      console.error(error);
    }
  }

  public signOutFirebase() {
    return this.angularFireAuth.auth.signOut();
  }


  resetPassword(email: string) {
    return auth().sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }
}
