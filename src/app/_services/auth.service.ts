import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  

  constructor(private http: HttpClient,private router: Router) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        console.log(response);
        if (user) {
          localStorage.setItem('access_token', user.access_token);
       //   localStorage.setItem('name', JSON.stringify(user.name));
          localStorage.setItem('name', user.name);
   //       this.decodedToken = this.jwtHelper.decodeToken(user.access_token);
          this.currentUser = user.name;
       /*   if (user['role'] == 'Creator') {
            this.router.navigate(['/creator/home']);
        }

        if (user['role'] == 'Admin') {
            this.router.navigate(['/admin/home']);
        } */

        }
        return response;
      })
    );
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !token;
  }
}
