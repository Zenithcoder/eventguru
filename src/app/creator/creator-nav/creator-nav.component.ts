import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator-nav',
  templateUrl: './creator-nav.component.html',
  styleUrls: ['./creator-nav.component.css']
})
export class CreatorNavComponent implements OnInit {
  currentUser: string;
  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('name');
    console.log(this.currentUser);
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
