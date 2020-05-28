import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component( {
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
} )
export class RegistreComponent implements OnInit {
  //  Propriété
  utilisateur: UtilisateurModel;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    // initilalisation de ma propriété utilisateur
    this.utilisateur = new UtilisateurModel();
  }

  onSubmit( form: NgForm ) {
    if ( form.invalid ) {
      return;
    }
    this.authService.nouveauUtilisateur(this.utilisateur).subscribe(resp => {
      console.log(resp);
    });

  }

}
