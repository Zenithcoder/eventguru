import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe((next) => {
      this.alertify.success('Logged in successfully');
      if (next['role'] == 'Creator') {
        this.router.navigate(['/creator/home']);
    }

    if (next['role'] == 'Attendee') {
        this.router.navigate(['/home']);
    }
    if (next['role'] == 'Admin') {
      this.router.navigate(['/admin/home']);
  }
      console.log("checking for nexttt",next);
    }, error => {
      this.alertify.error(error);
    }, () => {
   //   this.router.navigate(['/home']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('name');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
