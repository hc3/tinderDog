import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authFire: AngularFireAuth) { }

  public login(user: any): Promise<firebase.auth.UserCredential> {
    return this.authFire.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  public logout(): Promise <void>{
    return this.authFire.auth.signOut();
  }

}
