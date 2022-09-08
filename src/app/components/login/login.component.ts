import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../entities/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: User = {
    username: "",
    password: ""
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.logIn(this.login);
    this.router.navigate(['/search']);
  }

}
