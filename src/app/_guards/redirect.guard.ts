/*import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class RedirectGuard implements CanActivate {
 let currentUser = null;
 let auth = null;

    constructor(private authenticationService: AuthService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.auth =  authenticationService;
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      //Your redirection logic goes here

      if (this.auth.loggedIn()) {

        if (currentUser['role'] == 'User') {
            this.router.navigate(['/dashboard/user']);
        }

        if (currentUser['role'] == 'Admin') {
            this.router.navigate(['/dashboard/admin']);
        }
    }
   return false;

    }
} */