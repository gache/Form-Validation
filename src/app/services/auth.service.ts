import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurModel } from '../models/utilisateur.model';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

  private apyKey = 'AIzaSyBqGjdTemKbADGVbslgRU3FS2hSmyoZE74';

  userToken: string;

  /* Créer nouveau utilisateur  */
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.lireToken();
  }
//  pour fermer la session
  logOut() {
    localStorage.removeItem('token');
  }

  login(utilisateur: UtilisateurModel) {
    const autData = {
      email: utilisateur.email,
      password: utilisateur.passaword,
      returnSecureToken: true
    };
    return this.http.post(`${this.URL}:signInWithPassword?key=${this.apyKey}`, autData)
      .pipe(
        map(resp => {
          this.enregistreToken(resp['idToken']);
          return resp;
        }));
  }

  nouveauUtilisateur(utilisateur: UtilisateurModel) {
    const autData = {
      email: utilisateur.email,
      password: utilisateur.passaword,
      returnSecureToken: true
    };
    return this.http.post(`${this.URL}:signUp?key=${this.apyKey}`, autData)
      .pipe(
        map(resp => {
          this.enregistreToken(resp['idToken']);
          return resp;
        }));
  }

  //  enregistre le token
  private enregistreToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }


  //  lire le token
  lireToken() {

    if (localStorage.getItem('item')) {
      this.userToken = localStorage.getItem('item')
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  utilisateruAuthentifier(): boolean {
    return this.userToken.length > 2;
  }


}
