import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
} )
export class LoginComponent implements OnInit {

  utilisateur: UtilisateurModel = new UtilisateurModel();
  rappeler = false;


  constructor( private httpService: AuthService,
               private router: Router ) { }

  ngOnInit() {
    if  (localStorage.getItem('email')) {
      this.utilisateur.email = localStorage.getItem('email');
      this.rappeler = true;
    }
  }

  UtilisateurLogin ( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }
//
    Swal.fire({
      allowOutsideClick: false,
      title: 'info!',
      text: 'Veuillez de patienter',
      icon: 'info',
    });
    Swal.showLoading(); /* la fênetre d'information avec loading */

    this.httpService.login( this.utilisateur )
      .subscribe( resp => {
        console.log( resp );
        Swal.close(); /* pour fermer la fênetre d'information */
//  navigation
//  si le mail et le pssword sont correctes
        if  (this.rappeler) {
        localStorage.setItem('email', this.utilisateur.email);
      }

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
