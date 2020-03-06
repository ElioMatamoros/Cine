import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../../servicios/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }
  onLogout() {
    this.authService.isAuth();
    this.authService.logoutUser().then(r => {
      this.router.navigate(['']);
    });
  }
}
