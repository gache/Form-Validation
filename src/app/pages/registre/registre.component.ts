import { Component, OnInit } from '@angular/core';
import { UtilisateurModel } from '../../models/utilisateur.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  //  Propriété
  utilisateur: UtilisateurModel;

  constructor() { }

  ngOnInit() {
    // itilalisation de ma proproété utilisateur
    this.utilisateur = new UtilisateurModel();
    this.utilisateur.email = 'erickfrancodelgado@hotmail.com';


  }

  onSubmit(form: NgForm) {

    if (form.invalid ) {
        return;
    }
    console.log('formulaire envoyé');
    console.log(this.utilisateur);
    console.log(form);


  }

}
