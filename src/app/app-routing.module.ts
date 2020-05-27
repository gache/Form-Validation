
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  Imporation des Composants
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistreComponent } from './pages/registre/registre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, /* Route home */
  { path: 'registre', component: RegistreComponent },  /* Route registre */
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'registre' } /* m'envoie vers la page registre */
];

@NgModule({
  /* j'imrte et exporte le RouterModule pour pouvoir exporter ma class  */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
/* j'exporte ma class  vers app.module */
export class AppRoutingModule { }
