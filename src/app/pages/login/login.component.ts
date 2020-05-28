import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';


@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

  utilisateur: UtilisateurModel = new UtilisateurModel();
  constructor() { }

  ngOnInit () {
  }

  UtilisateurLogin ( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }

    console.log( this.utilisateur );
    console.log( form );


  }

}
