import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

}
