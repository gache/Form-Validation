import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

  utilisateur: UtilisateurModel = new UtilisateurModel();
  constructor( private httpService: AuthService ) { }

  ngOnInit () {
  }

  UtilisateurLogin ( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }
    this.httpService.login( this.utilisateur )
      .subscribe( resp => {
        console.log( resp );

      }, ( err ) => {
        console.log( err.error.error.message );
      } );




  }

}
