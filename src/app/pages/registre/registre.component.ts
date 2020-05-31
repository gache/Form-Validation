import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
} )
export class RegistreComponent implements OnInit {
  //  Propriété
  utilisateur: UtilisateurModel;
  rappeler = false;

  constructor( private authService: AuthService,
              private router: Router ) { }

  ngOnInit () {
    // initilalisation de ma propriété utilisateur
    this.utilisateur = new UtilisateurModel();
  }

  onSubmit( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      title: 'info!',
      text: 'Veuillez de patienter',
      icon: 'info',
    });
    Swal.showLoading();

    this.authService.nouveauUtilisateur( this.utilisateur ).subscribe( resp => {
      console.log( resp );
      Swal.close();

      if  (this.rappeler) {
        localStorage.setItem('email', this.utilisateur.email);
      }
//  navigation vers la page home
      this.router.navigateByUrl('/home');

    }, ( err ) => {
      console.log( err.error.error.message );
      Swal.fire({
        title: `Error d'autentification`,
        text: err.error.error.message,
        icon: 'error',
      });

    } );

  }

}
