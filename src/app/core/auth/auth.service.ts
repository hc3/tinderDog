import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Roles {
  admin?:boolean;
  basic?:boolean;
  petshop?:boolean;
}

export interface User { 
  uid:string;
  name:string;
  lastName:string;
  email?:string;
  sex:string;
  birthDate:string;
  active?:boolean;
  roles?:Roles;
  registerDate?:Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<User>

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore

  )
  { 
    this.user$ = this.fireAuth.authState.switchMap(user => (user) ? this.fireStore.doc<User>(`users/${user.uid}`).valueChanges() : Observable.of(null));
  }

  
}
