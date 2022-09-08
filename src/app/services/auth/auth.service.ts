import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../entities/user";
import {lastValueFrom} from "rxjs";
import {Token} from "../../entities/token";

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

  async logIn(user: User): Promise<void>{
    const object = await lastValueFrom(
      this.http.post<Token>(
        this.authUrl, user, this.httpOptions));
    localStorage.setItem("userInfo", object.token);
    this.isAuthenticated = true;
  }
}
