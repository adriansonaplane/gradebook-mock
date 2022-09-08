import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "http://localhost:8080/login";
  public isAuthenticated: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})

  }

  constructor(
    private http: HttpClient,
  ) { }

  logIn(user: User): void{
    console.log("inside service");
    console.log(user);
    this.http.post(this.authUrl, user, this.httpOptions)
      .subscribe(data => console.log(JSON.stringify(data)), error => console.log(error.error.text));
    this.isAuthenticated = true;
  }
}
