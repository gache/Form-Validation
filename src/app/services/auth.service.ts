import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurModel } from '../models/utilisateur.model';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1';

  private apyKey = 'AIzaSyBqGjdTemKbADGVbslgRU3FS2hSmyoZE74';

  /* Créer nouveau utilisateur  */
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient ) { }

  logOut () {

  }

  login ( utilisateur: UtilisateurModel ) {

  }

  nouveauUtilisateur ( utilisateur: UtilisateurModel ) {
    const autData = {
      email: utilisateur.email,
      password: utilisateur.passaword,
      returnSecureToken: true
    };

    return this.http.post( `${this.URL}` / accounts: signUpkey = ${ this.apyKey }, autData );


  }

}
