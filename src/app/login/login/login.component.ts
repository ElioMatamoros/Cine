import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import {LoginServiceService} from '../../servicios/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError: any;
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: LoginServiceService) { }
  public email = '';
  public password = '';
  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLogout() {
    this.authService.logoutUser().then(r => {
      this.router.navigate(['home']);
    });
  }
  onLoginRedirect(): void {
    this.router.navigate(['home']);
  }

}
