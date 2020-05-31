import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

constructor(private authenfication: AuthService,
            private router: Router) {

}

  canActivate(): boolean  {

if (this.authenfication.utilisateruAuthentifier()) {
  return true;
} else {
  this.router.navigateByUrl('/login');
  return false;
}


  }

}
