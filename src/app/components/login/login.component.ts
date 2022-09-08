import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {User} from "../../entities/user";
import {AuthService} from "../../services/auth/auth.service";

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
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log("inside login component");
    console.log(this.login);
    this.authService.logIn(this.login);
  }

}
