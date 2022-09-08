import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserInfo} from "../../entities/userInfo";


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
  curUser: UserInfo = this.authService.curUser;
  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logOut();
  }

}
