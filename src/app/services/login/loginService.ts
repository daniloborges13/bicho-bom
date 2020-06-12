import { User } from './../../components/models/model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LoginService {

  user: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) {
    this.user = angularFireAuth.authState;
  }

  createUser(user: User) {
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: User) {
    return this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  async signOut(): Promise<any> {
    try {
      return this.signOutFirebase();
    } catch (error) {
      console.error(error);
    }
  }

  public signOutFirebase() {
    return this.angularFireAuth.signOut();
  }


  resetPassword(email: string) {
    return auth().sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }
}
